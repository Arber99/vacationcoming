import React, {useState, useEffect} from 'react'
import './Card.css'
import { getPICTUREs, getGPIcountry, getCLIcountry } from '../../../api/index'
import { Link } from 'react-router-dom'

const Card = (props) => {

    const [image, setImage] = useState(null)
    const [imageURL, setImageURL] = useState(null)
    const [photographer, setPhotographer] = useState(null)
    const [photographerURL, setPhotographerURL] = useState(null)

    const [gpi, setGpi] = useState(0)
    const [gpiscore, setGpiscore] = useState(0)
    const [cli, setCli] = useState(0)
    const [cliscore, setCliscore] = useState(0)

    useEffect(() => {

        const fetchdata = async() => {
            var con = null
            try {
                con = await getPICTUREs(props.country)
                setImage(con.data.photos[0].src.large)
                setPhotographerURL(con.data.photos[0].photographer_url)
                setPhotographer(con.data.photos[0].photographer)
                setImageURL(con.data.photos[0].url)
            } catch (err) {
            }

            var stats = null
            try {
                stats = await getGPIcountry(props.country)
                setGpiscore(Math.round((100 - (stats.data - 1.2)/0.03075)))
                setGpi(stats.data)
            } catch (err) {
            }

            var stat = null
            try {
                stat = await getCLIcountry(props.country)
                setCliscore(Math.round((100 - (stat.data - 21.88)/1.2563)))
                setCli(stat.data)
            } catch (err) {
            }
        }
        fetchdata()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    )

    return (
        <div className='card'>
            <div className='card_body'>
                <div className='image_wrapper'>
                    <img className='card_image' alt='Country' src={image} />
                    <div className='text_wrapper'>
                        <p><a href={imageURL}>Photo</a> taken by <a href={photographerURL}>{photographer}</a> on Pexels</p>
                    </div>
                </div>
                <h2 className='card_title'>{props.country}</h2>
                <p className='card_description'>GPI: {gpi}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gpiscore} out of 100</p>
                <p className='card_description'>CLI: {cli}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cliscore} out of 100</p>
                <div className='card_button_wrapper'>
                    <Link to={`/info/${props.country}`}><button className='button_info'>More Info</button></Link>
                </div>
            </div>
        </div>
    )
}

export default Card
