import { useEffect, useState } from 'react';

// Define uma interface para o formato dos seus produtos
interface Product {
  id: string;
  imageUrl: string;
  titulo: string;
  sobre: string;
  preco: string;
}

const Feed = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // useEffect para carregar os produtos quando o componente for montado
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true); // Indica que o carregamento começou
        const response = await fetch('/.netlify/functions/list-products'); // Caminho para sua Netlify Function

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Erro ao carregar produtos.');
        }

        const data: Product[] = await response.json();
        setProducts(data); // Armazena os produtos no estado
      } catch (err: any) {
        console.error('Erro ao buscar produtos:', err);
        setError(err.message || 'Não foi possível carregar os produtos.');
      } finally {
        setLoading(false); // Indica que o carregamento terminou (com sucesso ou erro)
      }
    };

    fetchProducts();
  }, []); // O array vazio [] garante que esta função só será executada uma vez, no montagem do componente

  if (loading) {
    return (
      <div className="mt-20 mx-4 bg-slate-300 p-4 rounded-3xl h-100 flex justify-center items-center">
        <p className="text-lg font-bold text-gray-700">Carregando produtos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="mt-20 mx-4 bg-slate-300 p-4 rounded-3xl h-100 flex justify-center items-center">
        <p className="text-lg font-bold text-red-600">Erro: {error}</p>
      </div>
    );
  }

  if (products.length === 0) {
    return (
      <div className="mt-20 mx-4 bg-slate-300 p-4 rounded-3xl h-100 flex justify-center items-center">
        <p className="text-lg font-bold text-gray-700">Nenhum produto encontrado.</p>
      </div>
    );
  }

  return (
    <div className="mt-20 mx-4 bg-slate-300 p-4 rounded-3xl min-h-[400px]"> {/* min-h ajustado */}
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Nossos Produtos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
            <img
              src={product.imageUrl}
              alt={product.titulo}
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.titulo}</h3>
            <p className="text-gray-600 text-center mb-3 line-clamp-2">{product.sobre}</p>
            <p className="text-green-600 text-2xl font-bold mb-2">R$ {parseFloat(product.preco).toFixed(2)}</p>
            {/* Você pode adicionar um botão "Ver Detalhes" aqui se tiver uma página de detalhes */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feed;