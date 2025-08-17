import React, { useRef } from 'react'
import lang from '../utils/languageConstansts'
import { useDispatch, useSelector } from 'react-redux'
import openai from "../utils/openai";
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/gptSlice';

function GptSearchBar() {

  const dispatch = useDispatch()
  
  const langKey = useSelector(store => store.config.lang);
  const searchTxt = useRef(null);

  const searchMovieTMDB = async (movie) => {
      const data = await fetch(
        "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
        API_OPTIONS
      );
      const json = await data.json();
      return json.results;
    };

  const handleGptSearchClick = async () => {
    console.log(searchTxt.current.value)

    const gptQuery = "Act as a Movie Recomendation system and suggest some movies for the query "+ searchTxt.current.value + ". only give me names of 5 movies , comma seperated like the example result given ahead. Example result Gadar , Sholay ,Don , Golmaal , Koi mill gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "llama-3.3-70b-versatile",
    });

    if(!gptResults.choices){
      //write a error handling page do it yourself
    }
    console.log(gptResults.choices[0].message.content);
    const gptMovies = gptResults.choices[0]?.message?.content.split(",")

    const promiseArray =gptMovies.map(movie =>searchMovieTMDB(movie));

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({movieNames :gptMovies ,movieResults : tmdbResults}));
  
  };

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className='w-1/2 bg-black grid grid-cols-12' onSubmit={(e) => e.preventDefault()}>
        <input ref={searchTxt} type='text' className='p-4 m-4 col-span-9' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'
        onClick={handleGptSearchClick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
