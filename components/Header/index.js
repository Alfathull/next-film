import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Header = ({ isDarkBackground }) => {
  const [scrollBackground, setScrollBackground] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      if (scrollTop > 0) {
        setScrollBackground(true);
      } else {
        setScrollBackground(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${searchValue}`);
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <header
      className={`py-4 px-14 flex justify-between items-center fixed top-0 left-0 right-0 z-10 ${
        isDarkBackground || scrollBackground ? 'bg-black' : ''
      }`}
    >
      <Link href="/" className="text-4xl font-bold text-red-600">
        QFilm
      </Link>
      <div className="space-x-4 relative">
        <form className="flex items-center border border-white rounded" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Titles, genres"
            className="text-white bg-transparent border-none focus:outline-none flex-grow p-2"
            value={searchValue}
            onChange={handleChange}
          />
          <button type="submit" className="text-white p-2 hover:text-gray-300">
            Search
          </button>
        </form>
      </div>
    </header>

    // <nav class="bg-white shadow-lg">
    //     <div class="container mx-auto">
    //         <div class="flex justify-between items-center px-4 py-3">
    //             <div>
    //                 <a href="#" class="text-gray-800 font-semibold text-lg">Filmix</a>
    //             </div>
    //             <div class="flex md:hidden">
    //                 <button class="text-gray-600 hover:text-gray-800 focus:outline-none focus:text-gray-800"
    //                     aria-label="Toggle menu">
    //                     <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
    //                         <path d="M4 6H20M4 12H20M4 18H20" stroke="black"></path>
    //                     </svg>
    //                 </button>
    //             </div>
    //             <div class="hidden md:flex md:items-center">
    //                 <a href="#" class="text-gray-600 hover:text-gray-800 px-3 py-2">Movies</a>
    //                 <a href="#" class="text-gray-600 hover:text-gray-800 px-3 py-2">Genres</a>
    //                 <a href="#" class="text-gray-600 hover:text-gray-800 px-3 py-2">Actors</a>
    //                 <a href="#" class="text-gray-600 hover:text-gray-800 px-3 py-2">Trailers</a>
    //             </div>
    //         </div>
    //     </div>

    //     <div class="hidden md:hidden">
    //         <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
    //             <a href="#" class="text-gray-600 hover:text-gray-800 block px-3 py-2">Movies</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-800 block px-3 py-2">Genres</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-800 block px-3 py-2">Actors</a>
    //             <a href="#" class="text-gray-600 hover:text-gray-800 block px-3 py-2">Trailers</a>
    //         </div>
    //     </div>
    // </nav>
  );
};

export default Header;
