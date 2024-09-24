// import React,{useState} from 'react'
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/navigation';

// import { Navigation, Autoplay, EffectCoverflow} from 'swiper/modules';


// function GameSwiper({games}) {
//     const [active,setActive] = useState(false);
//     const handleToggleVideo =()=>{
//         setActive(!active);
//     }
//   return (
//     <Swiper
//     effect={'coverflow'}
//     grabCursor={true}
//     navigation={true}
//     loop={true}
//     centerdSlider={true}
//     slidersPerView={'auto'}
//     coverflowEffect={{
//         rotate: 35,
//         stretch:200,
//         depth:250,
//         modifier:1,
//         slideShadows:true,
//     }}
//     // autoplay={{
//     //     delay:2500,
//     //     disableOnInteraction:false,
//     // }}
//     modules={[EffectCoverflow,Navigation,Autoplay]}
//     className='gameSwiper'
//     >
//         {
//             games.map(game => ( 
//                 <SwiperSlide key={game._id}>
//                     <div className="gameSlider">
//                         <img src={game.img} alt="game Image" />
//                         <div className="content">
//                             <h2>{game.title}</h2>
//                             <p>{game.description}</p>
//                             <div className="buttons">
//                                 <a href="#" className='orderBtn'>Order Now</a>
//                                 <a href="#" className={`playBtn ${active?'active':undefined}`} onClick={handleToggleVideo}>
//                                     <span className='pause'>
//                                       <i className="bi bi-pause-fill"></i>

//                                     </span>
//                                     <span className='play'>
//                                       <i class="bi bi-play-fill"></i>

//                                     </span>
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </SwiperSlide>

//             ))
//         }

        
//     </Swiper>
//   );
// }

// export default GameSwiper



import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/navigation';

import { Navigation, Autoplay, EffectCoverflow } from 'swiper/modules';
import GameSlider from './GameSlider';
import './GameSwiper.css'

function GameSwiper({ games }) {
    const [active, setActive] = useState(false);

    const handleToggleVideo = () => {
        setActive(!active);
    };

    
    useEffect(() => {
        console.log(games);  
    }, [games]);

    return (
        <Swiper 
            effect={'coverflow'}
            grabCursor={true}
            navigation={true}
            loop={true}
            centeredSlides={true}     
            slidesPerView={'auto'}    
            coverflowEffect={{
                rotate: 35,
                stretch: 200,
                depth: 250,
                modifier: 1,
                slideShadows: true,
            }}
            // autoplay={{
            //     delay: 2500,
            //     disableOnInteraction: false,
            // }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className='gameSwiper w-[90%] pb-[30px]'
        >
            {games.map(game => (
                <SwiperSlide className='w-[550px] h-[350px]' key={game._id}>
               <GameSlider 
               game={game}
               active={active}
                toggleVideo={handleToggleVideo} />
                </SwiperSlide>
            ))}
        </Swiper>
    );
}

export default GameSwiper;
