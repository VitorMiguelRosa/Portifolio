// netlify/functions/list-products.js

// Importa o cliente Neon para PostgreSQL
const { neon } = require('@netlify/neon');

// Inicializa o cliente do banco de dados
const sql = neon();

exports.handler = async (event, context) => {
  if (event.httpMethod !== 'GET') {
    return {
      statusCode: 405,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Method Not Allowed' }),
    };
  }

  try {
    // **NOVIDADE: Buscar produtos do Neon Database**
    const products = await sql`
      SELECT id, title, description, price, image_url
      FROM products
      ORDER BY created_at DESC; -- Assumindo que você terá uma coluna created_at
    `;

    // Adapta o formato dos dados para o frontend (se necessário)
    const formattedProducts = products.map(p => ({
      id: p.id,
      titulo: p.title,
      sobre: p.description,
      preco: p.price.toFixed(2), // Formata o preço para 2 casas decimais
      imageUrl: p.image_url,
    }));

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formattedProducts),
    };

  } catch (error) {
    console.error('Erro na função Netlify (list-products):', error);
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Erro interno do servidor ao listar produtos', error: error.message }),
    };
  }
};