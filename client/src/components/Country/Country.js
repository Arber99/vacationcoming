import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getPICTUREs, getGPIcountry, getCLIcountry } from '../../api/index'
import {findFlagUrlByCountryName} from 'country-flags-svg'
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

    const [gpitext, setGpitext] = useState('(No GPI text available)')
    const [clitext, setClitext] = useState('(No CLI text available)')

    useEffect(() => {

        const fetchdata = async() => {
            const con = await getPICTUREs(country)
            setImage(con.data.photos[0].src.large)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []
    )

    useEffect(() => {
        const setTexts = async() => {
            if(gpiscore > 80) {
                setGpitext(`${country} has a translated GPI score of ${gpiscore} out of 100 in the Global Peace Index.
                This marks ${country} as a very safe country, making it safe to travel to.`)
            }
            else if(gpiscore > 60) {
                setGpitext(`${country} has a translated GPI score of ${gpiscore} out of 100 in the Global Peace Index.
                This marks ${country} as a moderately safe country, making it likely safe to travel to.`)
            }
            else if(gpiscore > 40) {
                setGpitext(`${country} has a translated GPI score of ${gpiscore} out of 100 in the Global Peace Index.
                This marks ${country} as a country with some risks. We recommend you to always be aware of your surroundings
                and to not travel alone, if avoidable.`)
            }
            else if(gpiscore > 20) {
                setGpitext(`${country} has a translated GPI score of ${gpiscore} out of 100 in the Global Peace Index.
                This marks ${country} as a unsafe country with multiple risks. We do not recommend to travel into ${country}
                if you are risk averse. For adventurous travellers, we recommend you to always be aware of your surroundings
                and to not travel alone, if avoidable.`)
            }
            else {
                setGpitext(`${country} has a translated GPI score of ${gpiscore} out of 100 in the Global Peace Index.
                As the GPI score indicates, it is absolutely unsafe to travel into ${country}. For your own safety, we would 
                encourage you to reconsider your choice on ${country}.`)
            }


            if(cliscore > 80) {
                setClitext(`${country} is also very cheap. With a CLI score of ${cliscore}, financing a trip to ${country} should be
                very easy.`)
            }
            else if(cliscore > 60) {
                setClitext(`${country} is also cheap. With a CLI score of ${cliscore}, financing a trip to ${country} should be manageable
                with a normal budget.`)
            }
            else if(cliscore > 40) {
                setClitext(`${country} has an average score in the Cost of Living Index. With a CLI score of ${cliscore}, financing a trip to ${country} should be manageable
                if you plan ahead.`)
            }
            else if(cliscore > 20) {
                setClitext(`${country} is an expensive country. With a CLI score of ${cliscore}, financing a trip to ${country} should be difficult
                and drain your money fast if uncautious.`)
            }
            else {
                setClitext(`However, the Cost of Living Index has a score of ${cliscore}, ranking it on lower end out of all countries in the
                Cost of Living Index. This makes ${country} a relatively expensive country, so you need to plan your budget ahead.`)
            }
        }

        setTexts()
    })

    const flagUrl = findFlagUrlByCountryName(country);

    return (
        <div className='title'>
            <h1>Information for {country}</h1>
            <div className='info'>
                <div>
                    <div className='image_wrapper'>
                        <img className='info_image' alt='Country' src={image} />
                        <div className='text_wrapper'>
                            <p><a href={imageURL}>Photo</a> taken by <a href={photographerURL}>{photographer}</a> on Pexels</p>
                        </div>
                    </div>
                    <div className='info_button_wrapper'>
                        <a href={`https://www.google.com/maps/place/${country}`}><button className='info_button_blue'>Google Maps</button></a>
                        <a href={`https://www.alltrails.com/${country}`}><button className='info_button_green'>Show Trails</button></a>
                    </div>
                </div>
                <div>
                    <div className='inline'>
                        <img alt='Flag of Country' className='country-flag' src={flagUrl} />
                        <h2 className='info_title'>{country}</h2>
                    </div>
                    <div className='description_title'>
                        <p>Safety and Costs</p>
                    </div>
                    <div className='description'>
                        <p>{gpitext} {clitext}</p>
                    </div>
                    <br />
                    <table className='info_description'>
                        <tr>
                            <th>Topic</th>
                            <th>Score</th>
                        </tr>
                        <tr>
                            <td>GPI: {gpi}</td>
                            <td>{gpiscore} out of 100</td>
                        </tr>
                        <tr>
                            <td>CLI: {cli}</td>
                            <td>{cliscore} out of 100</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Country
