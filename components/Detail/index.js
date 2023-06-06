import React from 'react';
import Image from "next/image";

const Detail = ({
  imageSrc,
  title,
  year,
  type,
  imdbID,
  rated,
  released,
  runtime,
  genre,
  director,
  writer,
  actors,
  plot,
  language,
  country,
  awards,
  ratings,
  metascore,
  imdbRating,
  imdbVotes,
  totalSeasons
}) => {
  return (
    <div className="bg-black-dark mt-16 py-8 text-white mx-auto">
      <div className="flex items-start mb-6">
        <div>
            <Image src={imageSrc} alt={title} width={250} height={350} className="rounded" />
        </div>
        <div className="ml-10 mt-28">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p>{runtime}</p>
          <p>{released}</p>
          <p>{genre}</p>
          <p>Director: {director}</p>
          <p>Writer: {writer}</p>
          <p>Actors: {actors}</p>
            <div className="flex mt-5">
            <button className="rounded-full bg-gray-800 hover:bg-gray-300 hover:text-sky-500 text-white px-10 py-3 mr-2">Metascore: {metascore}</button>
            <button className="rounded-full bg-gray-800 hover:bg-gray-300 hover:text-sky-500 text-white px-10 py-3 mr-2">Imdb Rating: {imdbRating}</button>
            <button className="rounded-full bg-gray-800 hover:bg-gray-300 hover:text-sky-500 text-white px-10 py-3 mr-2">Imdb Votes: {imdbVotes}</button>
            </div>
        </div>
      </div>
      <p className="mt-4">{plot}</p>
      <div className='mt-10'>
        <p className='text-slate-400'>Language</p>
        <p>{language}</p>
        <p className='text-slate-400'>Country</p>
        <p>{country}</p>
        <p className='text-slate-400'>Awards</p>
        <p>{awards}</p>
        <p className='text-slate-400'>Rated</p>
        <p>{rated}</p>
      </div>
    </div>
  );
};

export default Detail;
