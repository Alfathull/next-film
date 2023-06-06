import { useRouter } from "next/router";
import axios from "axios";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Card from "../../components/Card";

const Search = ({ searchData }) => {
  const router = useRouter();
  const { s } = router.query;

  return (
    <div className="bg-black-dark">
      <Header isDarkBackground={true} />
      <div className="bg-black-dark">mt</div>
      <div className=" flex justify-center mt-20 mb-1">
      <p className="bg-black-dark text-white text-xl font-bold">Berdasarkan kata kunci “{s}” yang anda masukkan, berikut kami tampilkan hasil pencarian tersebut</p>
      </div>
      <div className="bg-black-dark px-14">
        <div className=" flex justify-between mt-16 mb-5">
          <p className="bg-black-dark text-white text-3xl font-bold">{s}</p>
        </div>
            <div className="grid grid-cols-5 gap-4 bg-black-dark">
                {searchData?.Search?.map((item) => (
                  <Card
                    key={item.imdbID}
                    imageSrc={item.Poster !== "N/A" ? item.Poster : "/foto1.jpg"}
                    title={item.Title}
                    year={`${item.Type}, ${item.Year}`}
                    imdbID={item.imdbID}
                  />
                ))}
            </div>
      </div>
      <Footer />
    </div>
  );
};

export default Search;

export const getServerSideProps = async (context) => {
  const { s } = context.query;

  try {
    const response = await axios.get(`http://www.omdbapi.com/?apikey=1883f93f&s=${s}`);
    const searchData = response.data;

    return {
      props: {
        searchData,
      },
    };
  } catch (error) {
    console.error(error);
    return {
      props: {
        searchData: null,
      },
    };
  }
};
