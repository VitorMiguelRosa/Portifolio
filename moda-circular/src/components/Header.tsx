import { FaBars } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);


  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <div className='bg-blue-500 flex absolute top-0 left-0 right-0 h-15 '>
      <div className='h-full absolute left-4 items-center flex'>
        <Link to={'/'}>
            <h1 className='text-white font-bold text-2xl'>ModaCircular</h1>
        </Link>
        
      </div>
      <div className='absolute h-full items-center flex right-4'>
        <button onClick={handleClick} className='text-white h-full p-4 cursor-pointer'>
          <FaBars size={20} />
        </button>
      </div>

      {isMenuOpen && (
        <div className='rounded-bl-3xl absolute flex bg-blue-500 right-0 top-0 mt-15 p-4 flex-col'> 
          <a href="https://www.instagram.com/moda60852/" className=" flex items-center px-2 py-2 text-white font-bold"><FaInstagram className='mr-2'/> Instagram</a>
          <a href="https://wa.me/41992521368" className=" mt-2 flex items-center px-2 py-2 text-white font-bold"><FaWhatsapp className='mr-2'/> WhatsApp</a>
          <Link to={'/admin'} className=" mt-2 flex items-center px-2 py-2 text-white font-bold"><FaUser className='mr-2'/> Admin</Link>
        </div>
      )}
    </div>
  );
};

export default Header;