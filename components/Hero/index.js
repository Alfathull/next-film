import Image from "next/image";
import Link from "next/link";
import Header from "../Header";

const Hero = () => (
  <>
    <div className="hero-section relative w-full h-screen selection:bg-red-600">
      <Header scrollBackground={true} />
      <div className="hero-image absolute inset-0 w-full h-full">
        <Image src="/hero.jpg" alt="Hero Poster" layout="fill" objectFit="cover" />
      </div>
      <div className="hero-overlay absolute inset-0 bg-black opacity-60"></div>
      <div className="hero-content absolute inset-0 flex flex-col justify-center items-center text-center">
        <div className="content-wrapper">
          <h1 className="text-white text-4xl font-bold mb-4  ">Film, acara TV tak terbatas, dan banyak lagi</h1>
          <p className="text-white text-lg">Tonton di mana pun. Batalkan kapan pun.</p>
        </div>
        {/* <div className="w-full translate-x- flex flex-col justify-end items-center bg-gradient-to-t from-[#141414] from-10% to-transparent">
          <div className="text-white mb-4">halo</div>
        </div> */}
      </div>
    </div>
  </>

  // <header class="bg-gray-900 text-white py-32">
  //     <div class="container mx-auto px-4">
  //         <h1 class="text-5xl font-bold mb-6">Filmix</h1>
  //         <p class="text-lg mb-12">Your ultimate destination for movies and entertainment</p>
  //         <a href="#" class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-full">Get
  //             Started</a>
  //     </div>
  // </header>
);

export default Hero;
