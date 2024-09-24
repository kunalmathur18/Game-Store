import React ,{useState ,useEffect}from 'react'

function GameRating({rating}) {
    const [stars,setStars] =useState([])
    const generateStars=()=>{
        let stars =[]
        if(rating>5 || rating<1){
            return
        }
        for(let i=0;i<rating;i++){
            stars.push(i)
        }
        return stars;
    }
    useEffect(()=>{
        setStars(generateStars());

    },[])
  return (
    <div className='gameRating text-[1.3rem] text-[var(--secondary)]'>
        {
            stars.map((star,index)=>(
                <i key={index} className="bi bi-star-fill ml-1"></i>


            ))
        }
        
    </div>
  )
}

export default GameRating
