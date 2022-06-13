import { AnimeList } from "./AnimeList";
import { useFetchAnimeList } from "../hooks/useFetchAnimeList";
import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { GET_ANIMES } from "../http/AnilistClient";
import { saveInDB } from "../http/saveInDb";
import { callScrapper } from "../http/callScrapper";

export const PaginatedAnimes = ({ itemsPerPage }) => {
    let {data, isLoaded} = useFetchAnimeList(GET_ANIMES) 
    const animeList = data
    const noteList = []

    const [currentAnimes, setCurrentAnimes] = useState([]);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);
  
    useEffect(() => {
        if(isLoaded){
            const endOffset = itemOffset + itemsPerPage;
            callScrapper()
            /*for(let i = 0; i < animeList.length; i++){
                animeList[i].note = noteList[i]
            }*/
            setCurrentAnimes(animeList.slice(itemOffset, endOffset));
            saveInDB(animeList.slice(0,10))
            setPageCount(Math.ceil(animeList.length / itemsPerPage));
        }
    }, [itemOffset, itemsPerPage, isLoaded]);
  
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % animeList.length;
        setItemOffset(newOffset);
    };

    if(!isLoaded){ 
        return (
            <p>chargement</p>
        )
    }
  
    return (
      <div id="paginated-anime">
        {isLoaded && <AnimeList currentAnimes={currentAnimes} />}
        <ReactPaginate
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            marginPagesDisplayed={2}
            pageCount={pageCount}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
        />
        <style jsx global>{`
            @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";

            #paginated-anime {
                height: 90%;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
            }
        `}</style>
      </div>
    );
}