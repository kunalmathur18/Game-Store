import React from 'react'
import GameSwiper from '../components/GameSwiper'
import GameCard from '../components/GameCard'

function Home({games,reference}) {
  return (
   <section id='home' className='home active' ref={reference} >
    <div className='container'>
        <div className='row'> 
            <GameSwiper games={games}/>
        </div>
        <div className="row mb-4 mt-4">
          <div className='col-lg-6'>
            <h2 className="sectionTitle uppercase text-[2rem]" >Games On promotion</h2>
          </div>
          <div className='col-lg-6 text-white flex justify-end items-center' >
            <a href="#" className='viewMore text-[1.2rem] transition-[0.3s] no-underline hover:text-[var(--secondary)]'>
              view more games <i className="bi bi-arrow-right"></i>
            </a>
          </div>

        </div>
        <div className="row">
          {
            games.slice(0,4).map(game =>(
              <GameCard key={game._id} game={game}/>

            ))
          }

        </div>

    </div>

   </section>
  )
}

export default Home
