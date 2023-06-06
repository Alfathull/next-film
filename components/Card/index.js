import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Card = ({ imageSrc, title, year, imdbID }) => {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`relative w-200px mb-5 rounded overflow-hidden shadow-lg transform transition-transform duration-300 ${
        isHovered ? 'scale-110' : ''
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="container">
      <Link href={`/detail/${imdbID}`}>
        <Image src={imageSrc} alt="poster" width={250} height={300} className='mx-auto' />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-white text-center">
            </div>
          </div>
        )}
         </Link>
      </div>
      <div className="w-200px text-white text-center py-2">
        <h3 className="text-sm font-bold">{title}</h3>
      </div>
    </div>
        // <div class="bg-white rounded-lg flex flex-col justify-center items-center text-center">
        //   <Link href={`/detail/${imdbID}`}>
        //   <Image src={imageSrc} alt="poster" width={350} height={450} className='mb-4' />
        //   <h3 class="text-sm font-bold mb-2">{title}</h3>
        //   </Link>
        // </div>  
  );
};

export default Card;
