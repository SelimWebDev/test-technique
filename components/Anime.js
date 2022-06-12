export const Anime = ({anime, note}) => {
    return(
        <diV id="anime">
            <h3>{anime.title.romaji}</h3>
            <span id="desc">{anime.description}</span>
            <span id="note">{note}</span>
            <style jsx global>{`
                #anime{
                    height: 300px;
                    width: 30%;
                }
                #desc{
                    display: block;
                    height: 215px;
                    overflow: auto;
                }
            `}</style>
        </diV>
    )
}