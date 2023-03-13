import React from 'react'
import Footer from '../Footer/Footer'
import './NewsCard.css'
const NewsCard = () => {
    return (
        <>
            <div className="newsContainer" id='#News'>
                <div className="news">
                    <h1 className='headings'>News</h1>
                    <div className="newsCardWrapper">

                        <div className="newsCard mx-3">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/45/Rural_nightime_lightning_strike.png" className='cardImg' alt="" />
                            <p>Thunder Strike Delhi</p>
                            <button className='readMore btn btn-dark'>Read More..</button>
                        </div>
                        <div className="newsCard mx-3">
                            <img src="https://images.unsplash.com/photo-1541539924877-6dc3d2adf8d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGJlYXV0aWZ1bCUyMHdlYXRoZXJ8ZW58MHx8MHx8&w=1000&q=80" className='cardImg' alt="" />
                            <p>Clean Weather in Kota</p>
                        </div>
                        <div className="newsCard mx-3">
                            <img src="https://media.9news.com/assets/KUSA/images/adcfd173-dd79-480b-9f78-f26b2fa254c1/adcfd173-dd79-480b-9f78-f26b2fa254c1_1920x1080.jpg" className='cardImg' alt="" />
                            <p>Smoky Weather in Manali</p>
                        </div>
                    </div>

                </div>
            </div>
            
                <Footer/>
           
            
        </>
    )
}

export default NewsCard
