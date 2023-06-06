import { useRouter } from "next/router";
import axios from "axios";
import Detail from "../../components/Detail";
import Header from "../../components/Header";
import Footer from "../../components/Footer";


const Detailid = ({ film }) => {
  const router = useRouter();
  const { imdbID } = router.query;
  return (
    <>
    <div className="bg-black-dark px-14">
    <Header isDarkBackground={true} />
    <Detail
      key={film.imdbID}
      imageSrc={film.Poster}
      title={film.Title}
      year={film.Year}
      type={film.Type}
      imdbID={film.imdbID}
      rated={film.Rated}
      released={film.Released}
      runtime={film.Runtime}
      genre={film.Genre}
      director={film.Director}
      writer={film.Writer}
      actors={film.Actors}
      plot={film.Plot}
      language={film.Language}
      country={film.Country}
      awards={film.Awards}
      ratings={film.Ratings}
      metascore={film.Metascore}
      imdbRating={film.imdbRating}
      imdbVotes={film.imdbVotes}
      totalSeasons={film.totalSeasons}
    />
    </div>
    <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { imdbID } = context.query;
  const response = await axios.get(
    `http://www.omdbapi.com/?apikey=1883f93f&i=${imdbID}`
  );
  const film = response.data;

  return {
    props: {
      film,
    },
  };
}

export default Detailid;
