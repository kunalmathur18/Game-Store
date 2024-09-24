// import React,{useContext} from 'react'
// import GameRating from './GameRating'
// import './gameCard.css'
// import { AppContext } from '../App'

// function GameCard({game}) {
//     const {library,setLibrary,bag ,setBag}=useContext(AppContext);
//     const handleAddToLibrary =game =>{
//         setLibrary([...library,game]);
//     };
//     const handleRemoveFromLibrary = game =>{
//         setLibrary(library.filter(item=>item._id !==game._id))
//     };
//     const handleAddToBag = game =>{
//         if(bag.includes(game)) return;
//         setBag([...bag,game]);
//     };
//   return (
//     <div className='col-xl-3 col-lg-4 col-md -6'>
//         <div className="gameCard relative py-[25px] px-[20px] mb-[25px] w-auto h-[400px] border-solid border-[1px] border-[rgba(255,255,255,0.1)] rounded-[20px] bg-[var(--bgColor)] " >
//         <img src={game.img} alt="" className='object-contain rounded-[20px] mb-[15px] object-cover object-center h-[50%] w-full' />
//         <a href="#" className= {`text-white  absolute top-[24px] right-[19px] w-[40px] h-[40px] bg-[var(--bgColor)] p-[5px] rounded-bl-[20px] flex justify-center items-center transition-[0.3s] likes ${ library.includes(game) ? 'active' :undefined}`} 
        
//         onClick={
//            library.includes(game) ? ()=> handleRemoveFromLibrary(game) : () =>handleAddToLibrary(game)
//         }> 
//             <i className="bi bi-suit-heart-fill"></i>
//         </a>
//         <div className="gameFeature flex justify-between">
//             <span className='gameType bg-[var(--secondary)] py-[5px] px-[10px] rounded-[10px] font-normal tracking-[1px]'>{game.level}</span>
//             <GameRating rating={game.rating}/>

//         </div>
//         <div className="gameTitle mt-[10px] uppercase text-[1.3rem] mb-3  text-[white]">
//             {game.title}
//         </div>
//         <div className="gamePrice flex items-center justify-between flex-wrap">
//             {
//                 game.discount != 0 && (
//                     <>
//                     <span className='discount bg-[#ff0000] py-[2px] px-[5px] rounded-[10px] text-[1.2rem] font-extrabold'>
//                         <i>{game.discount *100}%</i>
//                     </span>
//                     <span className='prevPrice line-through decoration-[#ff0000] decoration-2 text-[0.8rem]' >
//                         Rs{game.price.toFixed(2)}

//                     </span>
//                     </>
//                 )
//             }
//             <span className="currentPrice">
//                 Rs{((1-game.discount)*game.price).toFixed(2)}
//             </span>
//         </div>
//         <a href="#" className="addBag " onClick={()=> handleAddToBag(game)}>
//         <i class="bi bi-bag-fill"></i>
//         </a>
//         </div>
//     </div>
    
//   )
// }

// export default GameCard




// import React, { useContext } from 'react';
// import GameRating from './GameRating';
// import './gameCard.css';
// import { AppContext } from '../App';

// function GameCard({ game }) {
//     const { library, setLibrary, bag, setBag } = useContext(AppContext);

//     const handleAddToLibrary = (game) => {
//         setLibrary([...library, game]);
//     };

//     const handleRemoveFromLibrary = (game) => {
//         setLibrary(library.filter(item => item._id !== game._id));
//     };

//     const handleAddToBag = (game) => {
//         if (bag.includes(game)) return;
//         const updatedBag = [...bag, game];
//         setBag(updatedBag);
//         localStorage.setItem('bag', JSON.stringify(updatedBag)); // Store in localStorage
//     };

//     return (
//         <div className='col-xl-3 col-lg-4 col-md-6'>
//             <div className="gameCard relative py-[25px] px-[20px] mb-[25px] w-auto h-[400px] border-solid border-[1px] border-[rgba(255,255,255,0.1)] rounded-[20px] bg-[var(--bgColor)]">
//                 <img src={game.img} alt={game.title} className='object-contain rounded-[20px] mb-[15px] object-cover object-center h-[50%] w-full' />
//                 <a href="#" className={`text-white absolute top-[24px] right-[19px] w-[40px] h-[40px] bg-[var(--bgColor)] p-[5px] rounded-bl-[20px] flex justify-center items-center transition-[0.3s] likes ${library.includes(game) ? 'active' : undefined}`}
//                     onClick={
//                         library.includes(game) ? () => handleRemoveFromLibrary(game) : () => handleAddToLibrary(game)
//                     }>
//                     <i className="bi bi-suit-heart-fill"></i>
//                 </a>
//                 <div className="gameFeature flex justify-between">
//                     <span className='gameType bg-[var(--secondary)] py-[5px] px-[10px] rounded-[10px] font-normal tracking-[1px]'>{game.level}</span>
//                     <GameRating rating={game.rating} />
//                 </div>
//                 <div className="gameTitle mt-[10px] uppercase text-[1.3rem] mb-3 text-[white]">
//                     {game.title}
//                 </div>
//                 <div className="gamePrice flex items-center justify-between flex-wrap">
//                     {game.discount !== 0 && (
//                         <>
//                             <span className='discount bg-[#ff0000] py-[2px] px-[5px] rounded-[10px] text-[1.2rem] font-extrabold'>
//                                 <i>{game.discount * 100}%</i>
//                             </span>
//                             <span className='prevPrice line-through decoration-[#ff0000] decoration-2 text-[0.8rem]'>
//                                 Rs{game.price.toFixed(2)}
//                             </span>
//                         </>
//                     )}
//                     <span className="currentPrice">
//                         Rs{((1 - game.discount) * game.price).toFixed(2)}
//                     </span>
//                 </div>
//                 <a href="#" className="addBag" onClick={() => handleAddToBag(game)}>
//                     <i className="bi bi-bag-fill"></i>
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default GameCard;




// import React, { useContext } from 'react';
// import GameRating from './GameRating';
// import './gameCard.css';
// import { AppContext } from '../App';

// function GameCard({ game }) {
//     const { library, setLibrary, bag, setBag } = useContext(AppContext);

//     const handleAddToLibrary = (game) => {
//         setLibrary([...library, game]);
//     };

//     const handleRemoveFromLibrary = (game) => {
//         setLibrary(library.filter(item => item._id !== game._id));
//     };

//     const handleAddToBag = (game) => {
//         if (bag.includes(game)) return;
//         const updatedBag = [...bag, game];
//         setBag(updatedBag);
//         localStorage.setItem('bag', JSON.stringify(updatedBag)); // Store in localStorage
//     };

//     return (
//         <div className='col-xl-3 col-lg-4 col-md-6'>
//             <div className="gameCard relative py-[25px] px-[20px] mb-[25px] w-auto h-[400px] border-solid border-[1px] border-[rgba(255,255,255,0.1)] rounded-[20px] bg-[var(--bgColor)]">
//                 <img src={game.img} alt={game.title} className='object-contain rounded-[20px] mb-[15px] object-cover object-center h-[50%] w-full' />
                
//                 {/* Like Icon */}
//                 <a href="#" 
//                    className={`text-white absolute top-[24px] right-[19px] w-[40px] h-[40px] bg-[var(--bgColor)] p-[5px] rounded-bl-[20px] flex justify-center items-center transition-[0.3s] likes ${library.includes(game) ? 'active' : ''}`}
//                    onClick={
//                         library.includes(game) 
//                             ? () => handleRemoveFromLibrary(game) 
//                             : () => handleAddToLibrary(game)
//                     }>
//                     {/* Icon changes to red when active */}
//                     <i className="bi bi-suit-heart-fill"></i>
//                 </a>

//                 <div className="gameFeature flex justify-between">
//                     <span className='gameType bg-[var(--secondary)] py-[5px] px-[10px] rounded-[10px] font-normal tracking-[1px]'>{game.level}</span>
//                     <GameRating rating={game.rating} />
//                 </div>
//                 <div className="gameTitle mt-[10px] uppercase text-[1.3rem] mb-3 text-[white]">
//                     {game.title}
//                 </div>
//                 <div className="gamePrice flex items-center justify-between flex-wrap">
//                     {game.discount !== 0 && (
//                         <>
//                             <span className='discount bg-[#ff0000] py-[2px] px-[5px] rounded-[10px] text-[1.2rem] font-extrabold'>
//                                 <i>{game.discount * 100}%</i>
//                             </span>
//                             <span className='prevPrice line-through decoration-[#ff0000] decoration-2 text-[0.8rem]'>
//                                 Rs{game.price.toFixed(2)}
//                             </span>
//                         </>
//                     )}
//                     <span className="currentPrice">
//                         Rs{((1 - game.discount) * game.price).toFixed(2)}
//                     </span>
//                 </div>
//                 <a href="#" className="addBag" onClick={() => handleAddToBag(game)}>
//                     <i className="bi bi-bag-fill"></i>
//                 </a>
//             </div>
//         </div>
//     );
// }

// export default GameCard;














import React, { useContext, useState } from 'react';
import GameRating from './GameRating';
import './gameCard.css';
import { AppContext } from '../App';

function GameCard({ game }) {
    const { library, setLibrary, bag, setBag } = useContext(AppContext);
    const [message, setMessage] = useState(''); // State to handle messages
    const [showMessage, setShowMessage] = useState(false); // To show/hide message

    const handleAddToLibrary = (game) => {
        setLibrary([...library, game]);
        displayMessage('Added to Wishlist');
    };

    const handleRemoveFromLibrary = (game) => {
        setLibrary(library.filter(item => item._id !== game._id));
        displayMessage('Removed from Wishlist');
    };

    const handleAddToBag = (game) => {
        if (bag.includes(game)) return;
        const updatedBag = [...bag, game];
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag)); // Store in localStorage
        displayMessage('Added to Cart');
    };

    const handleRemoveFromBag = (game) => {
        const updatedBag = bag.filter(item => item._id !== game._id);
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag)); // Update localStorage
        displayMessage('Removed from Cart');
    };

    const displayMessage = (msg) => {
        setMessage(msg);
        setShowMessage(true);
        setTimeout(() => {
            setShowMessage(false); // Hide the message after 3 seconds
        }, 3000);
    };

    return (
        <div className='col-xl-3 col-lg-4 col-md-6'>
            <div className="gameCard relative py-[25px] px-[20px] mb-[25px] w-auto h-[400px] border-solid border-[1px] border-[rgba(255,255,255,0.1)] rounded-[20px] ">
                <img src={game.img} alt={game.title} className='object-contain rounded-[20px] mb-[15px] object-cover object-center h-[50%] w-full' />

                {/* Like Icon */}
                <a href="#"
                   className={`text-white absolute top-[24px] right-[19px] w-[40px] h-[40px] bg-[var(--bgColor)] p-[5px] rounded-bl-[20px] flex justify-center items-center transition-[0.3s] likes ${library.includes(game) ? 'active' : ''}`}
                   onClick={
                        library.includes(game) 
                            ? () => handleRemoveFromLibrary(game) 
                            : () => handleAddToLibrary(game)
                    }>
                    <i className="bi bi-suit-heart-fill"></i>
                </a>

                <div className="gameFeature flex justify-between">
                    <span className='gameType bg-[var(--secondary)] py-[5px] px-[10px] rounded-[10px] font-normal tracking-[1px]'>{game.level}</span>
                    <GameRating rating={game.rating} />
                </div>
                <div className="gameTitle mt-[10px] uppercase text-[1.3rem] mb-3 text-[white]">
                    {game.title}
                </div>
                <div className="gamePrice flex items-center justify-between flex-wrap">
                    {game.discount !== 0 && (
                        <>
                            <span className='discount bg-[#ff0000] py-[2px] px-[5px] rounded-[10px] text-[1.2rem] font-extrabold'>
                                <i>{game.discount * 100}%</i>
                            </span>
                            <span className='prevPrice line-through decoration-[#ff0000] decoration-2 text-[0.8rem]'>
                                Rs{game.price.toFixed(2)}
                            </span>
                        </>
                    )}
                    <span className="currentPrice">
                        Rs{((1 - game.discount) * game.price).toFixed(2)}
                    </span>
                </div>

                {/* Cart Icon */}
                <a href="#" className="addBag" onClick={() => {
                    bag.includes(game) ? handleRemoveFromBag(game) : handleAddToBag(game);
                }}>
                    <i className="bi bi-bag-fill"></i>
                </a>

                {/* Notification Message */}
                {showMessage && (
                    <div className="notification">
                        {message}
                    </div>
                )}
            </div>
        </div>
    );
}

export default GameCard;
