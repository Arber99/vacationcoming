import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { getPICTUREs, getGPIcountry, getCLIcountry } from '../../api/index'
import './Country.css'

const Country = () => {

    const {country} = useParams()

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
            const con = await getPICTUREs(country)
            setImage(con.data.photos[0].src.medium)
            setPhotographerURL(con.data.photos[0].photographer_url)
            setPhotographer(con.data.photos[0].photographer)
            setImageURL(con.data.photos[0].url)

            const stats = await getGPIcountry(country)
            setGpiscore(Math.round((100 - (stats.data - 1.2)/0.03075)))
            setGpi(stats.data)

            const stat = await getCLIcountry(country)
            setCliscore(Math.round((100 - (stat.data - 21.88)/1.2563)))
            setCli(stat.data)
        }
        fetchdata()
    }, []
    )

    return (
        <div className='info'>
            <div className='info_body'>
                <div className='image_wrapper'>
                    <img className='info_image' alt='Country' src={image} />
                    <div className='text_wrapper'>
                        <p><a href={imageURL}>Photo</a> taken by <a href={photographerURL}>{photographer}</a> on Pexels</p>
                    </div>
                </div>
                <h2 className='info_title'>{country}</h2>
                <p className='info_description'>GPI: {gpi}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{gpiscore} out of 100</p>
                <p className='info_description'>CLI: {cli}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{cliscore} out of 100</p>
                <div className='info_button_wrapper'>
                    <a href={`https://www.alltrails.com/${country}`}><button className='info_button_green'>Show Trails</button></a>
                </div>
            </div>
        </div>
    )
}

export default Country
