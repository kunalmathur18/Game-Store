import React from 'react'
import {  SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';
import './GameSwiper.css'

function GameSlider({game,active,toggleVideo}) {
  return (
    
                    <div className="gameSlider relative w-[100%] h-[100%] bg-center bg-cover p-[30px] overflow-hidden">
                        
                        <img className=' absolute left-0 top-0 w-full h-full object-cover object-center rounded-[30px]' src={game.img} alt="game Image"  />
                        <div className={`video ${active? 'active':undefined}`}>
                            <iframe 
                              width="1280"
                              height="1720"
                              src={game.trailer}
                              title={game.title}
                              allowed="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                              allowFullScreen
                            >  

                            </iframe>
                        </div>
                        
                    <div className="content absolute bottom-[20px] z-[1000] w-[60%]">
                            <h2 className='text-[3.5rem]'>{game.title}</h2>
                            <p className='text-current text-[0.8rem]'>{game.description}</p>
                            <div className="buttons inline-flex items-center gap-[20px]">
                                <a href="#" className='orderBtn '>Order Now</a>
                                <a
                                    href="#"
                                    className={`playBtn ${active ? 'active' : ''}`}
                                    onClick={toggleVideo}
                                >
                                    <span className='pause'>
                                        <i className="bi bi-pause-fill"></i>
                                    </span>
                                    <span className='play'>
                                        <i className="bi bi-play-fill"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                
  )
}

export default GameSlider
