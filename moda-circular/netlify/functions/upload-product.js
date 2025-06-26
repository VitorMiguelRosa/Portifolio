// netlify/functions/upload-product.js

const { getStore } = require('@netlify/blobs');
const { parse } = require('parse-multipart-data');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

// Importa o cliente Neon para PostgreSQL
const { neon } = require('@netlify/neon');

// Inicializa o cliente do banco de dados.
// Ele automaticamente usará process.env.NETLIFY_DATABASE_URL
const sql = neon();

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    const contentType = event.headers['content-type'];
    if (!contentType || !contentType.includes('multipart/form-data')) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Content-Type must be multipart/form-data' }),
      };
    }
    const boundary = contentType.split('boundary=')[1];

    const parts = parse(Buffer.from(event.body, 'base64'), boundary);

    let titulo = '';
    let sobre = '';
    let preco = '';
    let imagemPart = null;

    for (const part of parts) {
      if (part.name === 'titulo') {
        titulo = part.data.toString('utf8');
      } else if (part.name === 'sobre') {
        sobre = part.data.toString('utf8');
      } else if (part.name === 'preco') {
        preco = part.data.toString('utf8');
      } else if (part.name === 'imagem' && part.filename) {
        imagemPart = part;
      }
    }

    if (!imagemPart) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Nenhuma imagem foi enviada.' }),
      };
    }

    // Salvar imagem no Netlify Blobs
    const blobStore = getStore('products'); // O mesmo blob store para imagens

    const fileExtension = path.extname(imagemPart.filename);
    const uniqueBlobFileName = `${uuidv4()}${fileExtension}`;

    await blobStore.set(uniqueBlobFileName, imagemPart.data, {
      metadata: {
        originalName: imagemPart.filename,
        contentType: imagemPart.type,
      },
    });

    const imageUrl = `${blobStore.publicUrl}/${uniqueBlobFileName}`;

    // **NOVIDADE: Salvar dados do produto no Neon Database**
    // Primeiro, certifique-se de que a tabela 'products' existe no seu DB.
    // Você pode criar via SQL (veja abaixo) ou uma ferramenta de DB.
    // Preço deve ser um número, então converta-o.
    const parsedPreco = parseFloat(preco);
    if (isNaN(parsedPreco)) {
      return {
        statusCode: 400,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Preço inválido.' }),
      };
    }

    await sql`
      INSERT INTO products (title, description, price, image_url, blob_key)
      VALUES (${titulo}, ${sobre}, ${parsedPreco}, ${imageUrl}, ${uniqueBlobFileName});
    `;

    console.log('Dados do produto e URL da imagem salvos no Neon DB:', {
      titulo,
      sobre,
      preco,
      imageUrl,
      blobKey: uniqueBlobFileName,
    });

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        message: 'Produto e imagem enviados e salvos no DB com sucesso!',
        imageUrl: imageUrl,
        blobKey: uniqueBlobFileName,
      }),
    };

  } catch (error) {
    console.error('Erro na função Netlify (upload-product):', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Erro interno do servidor', error: error.message }),
    };
  }
};