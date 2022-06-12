import Image from "next/image";
import { useEffect, useState } from "react/cjs/react.production.min";
import { useFetchAnimeList } from "../hooks/useFetchAnimeList";
import { Anime } from "./Anime";

export const AnimeList = ( {currentAnimes} ) => {
  
  return (
    <div id="anime-list">
        {
        currentAnimes.map((anime) => 
          <Anime key={anime.id} anime={anime} note={anime.note}></Anime>
        )}
      <style jsx>{`
        #anime-list {
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          width: 100%;
          height: inherit;
        }
        `
      }
      </style>
    </div>
  )
}