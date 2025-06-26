import React, { useState } from 'react';
import { FaImage } from 'react-icons/fa';

const AdminPage = () => {
  // 1. Estados para armazenar os valores dos campos
  const [titulo, setTitulo] = useState('');
  const [sobre, setSobre] = useState('');
  const [preco, setPreco] = useState('');
  const [imagem, setImagem] = useState<File | null>(null); // Para o arquivo da imagem
  const [imagemPreviewUrl, setImagemPreviewUrl] = useState<string | null>(null); // Para mostrar a pré-visualização
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // 2. Função para lidar com a seleção do arquivo
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      setImagem(selectedFile);
      setImagemPreviewUrl(URL.createObjectURL(selectedFile)); // Cria uma URL para pré-visualização
    } else {
      setImagem(null);
      setImagemPreviewUrl(null);
    }
  };

  // 3. Função para lidar com o envio do formulário
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Previne o recarregamento padrão da página
    setLoading(true);
    setMessage(''); // Limpa mensagens anteriores

    // Validação básica
    if (!titulo || !sobre || !preco || !imagem) {
      setMessage('Por favor, preencha todos os campos e selecione uma imagem.');
      setLoading(false);
      return;
    }

    // Criar um objeto FormData para enviar dados mistos (texto e arquivo)
    const formData = new FormData();
    formData.append('titulo', titulo);
    formData.append('sobre', sobre);
    formData.append('preco', preco);
    formData.append('imagem', imagem); // 'imagem' é o nome que a Netlify Function vai procurar

    try {
      // 4. Enviar os dados para sua Netlify Function
      const response = await fetch('/.netlify/functions/upload-product', { // Ajuste o caminho se sua função tiver outro nome
        method: 'POST',
        body: formData,
        // NÃO defina o 'Content-Type' aqui; o navegador fará isso automaticamente para FormData,
        // incluindo o 'boundary' correto.
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar dados.');
      }

      const result = await response.json();
      setMessage(`Produto enviado com sucesso! URL da Imagem: ${result.imageUrl}`);

      // 5. Limpar o formulário após o sucesso
      setTitulo('');
      setSobre('');
      setPreco('');
      setImagem(null);
      setImagemPreviewUrl(null);
    } catch (error: any) {
      console.error('Erro no upload:', error);
      setMessage(`Erro no upload: ${error.message || 'Ocorreu um erro desconhecido.'}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center mt-20 mx-4 bg-slate-300 p-4 rounded-3xl h-130">
      {/* Adicionado o form e o evento onSubmit */}
      <form className="flex-col items-center w-full" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Titulo"
          className="rounded-full p-2 my-2 flex h-8 bg-white w-full" // Adicionado w-full
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Sobre"
          className="rounded-full p-2 my-2 flex h-8 bg-white w-full" // Adicionado w-full
          value={sobre}
          onChange={(e) => setSobre(e.target.value)}
          required
        />
        <input
          type="number" // Alterado para type="number" para preço
          placeholder="Preço"
          className="rounded-full p-2 my-2 flex h-8 bg-white w-full" // Adicionado w-full
          value={preco}
          onChange={(e) => setPreco(e.target.value)}
          step="0.01" // Permite valores decimais para preço
          required
        />

        <label htmlFor="dropzone-file" className="flex-col items-center justify-center flex my-8 bg-slate-100 h-2/5 w-full rounded-3xl cursor-pointer">
          {imagemPreviewUrl ? (
            <img src={imagemPreviewUrl} alt="Pré-visualização" className="max-h-full max-w-full object-contain rounded-3xl" />
          ) : (
            <>
              <FaImage size={60} />
              <h1 className="font-bold">Imagem</h1>
            </>
          )}
          {/* O input file real, que fica escondido, mas é acionado pelo label */}
          <input
            type="file"
            id="dropzone-file"
            className="hidden"
            accept="image/*" // Aceita apenas arquivos de imagem
            onChange={handleFileChange}
            required
          />
        </label>

        <button
          type="submit" // Importante: type="submit" para acionar o onSubmit do formulário
          className="bg-blue-500 w-full py-2 rounded-full cursor-pointer"
          disabled={loading} // Desabilita o botão enquanto está enviando
        >
          <h1 className="text-white">
            {loading ? 'Enviando...' : 'Enviar'}
          </h1>
        </button>

        {/* Mensagens de feedback */}
        {message && (
          <p className={`mt-4 text-center ${message.includes('sucesso') ? 'text-green-600' : 'text-red-600'}`}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
};

export default AdminPage;