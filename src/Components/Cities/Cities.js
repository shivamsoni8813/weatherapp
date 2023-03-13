import React, { useContext } from 'react'
import NewsCard from '../NewsComponent/NewsCard'
import './Cities.css'
import { SearchContext } from '../Context/Context'
const Cities = () => {
    let {search, setSearch} = useContext(SearchContext)
 
    return (
        <div>
            <div className="city" id='cities'>
                <h1 className='text-center my-4'>Cities</h1>
                <div className="cityWrapper">
                    <div className="card text-center mx-4">
                        <img src="https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg" className='cityWeatherImg' alt="" />
                        <p className='weaterType'>Thunder</p>
                        <div className="otherInfo">

                            <div className="tempOfCity">
                                <h1>34&#8451;</h1>
                            </div>
                            <div className="placeAndDate">
                                <span className='placeName'>Delhi</span>
                                <span className='dateOfDay'>9/03/23</span>
                            </div>
                        </div>

                    </div>
                    <div className="card text-center mx-4">
                        <img src="https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg" className='cityWeatherImg' alt="" />
                        <p className='weaterType'>Thunder</p>
                        <div className="otherInfo">

                            <div className="tempOfCity">
                                <h1>34&#8451;</h1>
                            </div>
                            <div className="placeAndDate">
                                <span className='placeName'>Delhi</span>
                                <span className='dateOfDay'>9/03/23</span>
                            </div>
                        </div>

                    </div>
                    <div className="card text-center mx-4">
                        <img src="https://t3.ftcdn.net/jpg/03/26/19/12/360_F_326191234_Q12utSZ0vmxV6tKQXogktU7e3dmZ2JLI.jpg" className='cityWeatherImg' alt="" />
                        <p className='weaterType'>Thunder</p>
                        <div className="otherInfo">

                            <div className="tempOfCity">
                                <h1>34&#8451;</h1>
                            </div>
                            <div className="placeAndDate">
                                <span className='placeName'>Delhi</span>
                                <span className='dateOfDay'>9/03/23</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="search">
                    <div className="searchWrapper">
                        <input type="text" className='searchInput' value={search} onChange={(e)=>setSearch(e.target.value)}  placeholder='Search City' />
                        <span><i className="serachIcon fas fa-search"></i></span>
                    </div>
                </div>
                <div className="globeContainer">

                    <div className="globe">
                        <img src="https://www.maxpixel.net/static/photo/640/Blue-Planet-Space-Earth-Planet-All-Universe-Globe-11008.jpg"  className='globeImg' alt="" />
                    <div className="nameOfCities d-flex">
                        <ul>
                            <li className='my-4'>27&#8451; Delhi +</li>
                            <li className='my-4'>27&#8451; Mumbai +</li>
                            <li className='my-4'>27&#8451; Pune +</li>
                        </ul>
                        <ul>
                            <li className='my-4'>27&#8451; kota +</li>
                            <li className='my-4'>27&#8451; jaipur +</li>
                            <li className='my-4'>27&#8451; gujrat +</li>
                        </ul>
                    </div>
                    </div>
                </div>
                <div className="newsComponent">
                    <NewsCard/>
                </div>
            </div>
        </div>
    )
}

export default Cities
