import { useState, useEffect } from 'react';
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Header from '../components/Header';

const Home = ({ marvelProducts, disneyProducts, zombieProducts }) => {
  const [currentPage, setCurrentPage] = useState({
    marvel: 1,
    disney: 1,
    zombie: 1
  });
  const [marvelSearchData, setMarvelSearchData] = useState(marvelProducts);
  const [disneySearchData, setDisneySearchData] = useState(disneyProducts);
  const [zombieSearchData, setZombieSearchData] = useState(zombieProducts);

  useEffect(() => {
    const fetchMarvelData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=1883f93f&s=marvel&page=${currentPage.marvel}`);
      const data = await response.json();
      setMarvelSearchData(data);
    };

    const fetchDisneyData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=1883f93f&s=disney&page=${currentPage.disney}`);
      const data = await response.json();
      setDisneySearchData(data);
    };

    const fetchZombieData = async () => {
      const response = await fetch(`http://www.omdbapi.com/?apikey=1883f93f&s=zombie&page=${currentPage.zombie}`);
      const data = await response.json();
      setZombieSearchData(data);
    };

    fetchMarvelData();
    fetchDisneyData();
    fetchZombieData();
  }, [currentPage]);

  const handleNextPage = (category) => {
    setCurrentPage(prevPage => ({
      ...prevPage,
      [category]: prevPage[category] + 1
    }));
  };

  return (
    <div className="bg-[#141414] selection:bg-red-600">
      <Header />
      <Hero />
      <div className="px-14">
        <div className="flex justify-between mt-8 mb-1">
          <p className=" text-white text-3xl font-bold">Marvel</p>
          <div>
            <button className="text-white" onClick={() => setCurrentPage(prevPage => ({ ...prevPage, marvel: prevPage.marvel - 1 }))}>Previous</button><a className="text-white"> | </a>
            <button className="text-white" onClick={() => handleNextPage('marvel')}>Next</button>
          </div>
        </div>
        <section class="py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {marvelSearchData?.Search?.map((item) => (
                <Card
                  key={item.imdbID}
                  imageSrc={item.Poster !== "N/A" ? item.Poster : "/foto.jpg"}
                  title={item.Title}
                  year={`${item.Type}, ${item.Year}`}
                  imdbID={item.imdbID}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-between mt-8 mb-5">
          <p className="bg-black-dark text-white text-3xl font-bold">Disney</p>
          <div>
            <button className="text-white" onClick={() => setCurrentPage(prevPage => ({ ...prevPage, disney: prevPage.disney - 1 }))}>Previous</button><a className="text-white"> | </a>
            <button className="text-white" onClick={() => handleNextPage('disney')}>Next</button>
          </div>
        </div>
        <section class="py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {disneySearchData?.Search?.map((item) => (
                <Card
                  key={item.imdbID}
                  imageSrc={item.Poster !== "N/A" ? item.Poster : "/foto.jpg"}
                  title={item.Title}
                  year={`${item.Type}, ${item.Year}`}
                  imdbID={item.imdbID}
                />
              ))}
            </div>
          </div>
        </section>
        <div className="flex justify-between mt-8 mb-5">
          <p className=" text-white text-3xl font-bold">Zombie</p>
          <div>
            <button className="text-white" onClick={() => setCurrentPage(prevPage => ({ ...prevPage, zombie: prevPage.zombie - 1 }))}>Previous</button><a className="text-white"> | </a>
            <button className="text-white" onClick={() => handleNextPage('zombie')}>Next</button>
          </div>
        </div>
        <section class="py-10">
          <div class="container mx-auto px-4">
            <div class="grid grid-cols-2 xl:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {zombieSearchData?.Search?.map((item) => (
                <Card
                  key={item.imdbID}
                  imageSrc={item.Poster !== "N/A" ? item.Poster : "/foto.jpg"}
                  title={item.Title}
                  year={`${item.Type}, ${item.Year}`}
                  imdbID={item.imdbID}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;

export const getStaticProps = async () => {
  const marvelResponse = await fetch('http://www.omdbapi.com/?apikey=1883f93f&s=marvel');
  const marvelData = await marvelResponse.json();

  const disneyResponse = await fetch('http://www.omdbapi.com/?apikey=1883f93f&s=disney');
  const disneyData = await disneyResponse.json();

  const zombieResponse = await fetch('http://www.omdbapi.com/?apikey=1883f93f&s=zombie');
  const zombieData = await zombieResponse.json();

  return {
    props: {
      marvelProducts: marvelData,
      disneyProducts: disneyData,
      zombieProducts: zombieData
    }
  };
};
