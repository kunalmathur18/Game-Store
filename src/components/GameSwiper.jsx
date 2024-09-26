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
