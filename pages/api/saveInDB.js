import db from "../../models"
import Media from "../../models/media";

export default async (req, res) => {
    const mediaArray = req.body.medias
    Media.create(mediaArray[0])
    .then(() => { return res.status(201).json({message: 'succès sauvegarde médias'})})
    .catch(() => { return res.status(400).json({error: error})})
    /*for(let i =0; i < 10; i++){
        Media.create(mediaArray[i])
        .catch(error =>  {return res.status(500).json({error: error})} )
    };*/
    return res.status(201).json({message: 'succès sauvegarde médias'})
}