import React, {useState, useEffect} from 'react'
import './Card.css'
import { getPICTUREs } from '../../../api/index'

const Card = (props) => {

    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null)
    const [photographer, setPhotographer] = useState(null)
    const [photographerURL, setPhotographerURL] = useState(null)

    useEffect(() => {

        const fetchdata = async() => {
            const con = await getPICTUREs(props.country)
            setImage(con.data.photos[0].src.medium)
            setPhotographerURL(con.data.photos[0].photographer_url)
            setPhotographer(con.data.photos[0].photographer)
            setImageURL(con.data.photos[0].url)
        }
        fetchdata()
    }, []
    )

    return (
        <div className='card'>
            <div className='card_body'>
                <div className='image_wrapper'>
                    <img className='card_image' src={image} />
                    <div className='text_wrapper'>
                        <p><a href={imageURL}>Photo</a> taken by <a href={photographerURL}>{photographer}</a> on Pexels</p>
                    </div>
                </div>
                <h2 className='card_title'>{props.country}</h2>
                <p className='card_description'>Basic Country Description</p>
                <div className='card_button_wrapper'>
                    <button className='card_button'>More Info</button>
                </div>
            </div>
        </div>
    )
}

export default Card
