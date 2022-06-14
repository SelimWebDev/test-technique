
import { Anime } from "../../models/Anime"

export default async (req, res) => {
    let mediaArray = req.body.medias
    let animeArray = []

    //formatage
    mediaArray.forEach(media => {
        animeArray.push({
            title: media.title.romaji,
            description: media.description
        })
    });

    try{
        Anime.sync()
        .then(() => Anime.bulkCreate(animeArray))
        .then(() => res.status(201).json({message: 'save in bdd ok'}))
        .catch((error) => res.status(400).json({error: error}))
    } catch(error) {
        return res.status(400).json({error: error})
    }
    
}