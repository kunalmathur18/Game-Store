// import React from 'react'

// function ShopBagItem({game,index}) {
//   return (
//     <div>
//       <tr className='shopBagItem w-full'>
//         <th scope='row'>{index+1}</th>
//         <td>
//             <img src={game.img} alt="" className='img-fluid' />
//         </td>
//         <td>{game.title}</td>
//         <td>Rs{ game.price.toFixed(2)}</td>
//         <td>{game.discount *100}%</td>
//         <td>Rs{(game.price*(1-game.discount)).toFixed(2)}</td>
//         <td><a href="#">
//         <i class="bi bi-trash3-fill"></i></a></td>
//       </tr>
//     </div>
//   )
// }

// export default ShopBagItem




// import React, { useContext } from 'react';
// import { AppContext } from '../App';

// function ShopBagItem({ game, index }) {
//     const {bag,setBag} =useContext(AppContext);
//     const handleRemoveFromBag=()=>{
//         setBag(bag.filter(item=>item._id !== game._id));
//     }
//   return (
//     <tr className="shopBagItem w-full text-center border-b border-gray-700 mb-[20px]">
//       <th scope="row" className="py-4 text-[1.2rem] text-white ">{index + 1}</th>
//       <td className="py-4 text-[1.2rem] text-white">
//         <img src={game.img} alt={game.title} className="img-fluid w-[120px] h-[70px] object-cover object-center  rounded-md " />
//       </td>
//       <td className="py-4">{game.title}</td>
//       <td className="py-4">Rs {game.price.toFixed(2)}</td>
//       <td className="py-4">{(game.discount * 100).toFixed(0)}%</td>
//       <td className="py-4">Rs {(game.price * (1 - game.discount)).toFixed(2)}</td>
//       <td className="py-4">
//         <a href="#" className="text-red-500 hover:text-red-700  text-[1.6rem] " onClick={()=> handleRemoveFromBag(game)}>
//           <i className="bi bi-trash3-fill"></i>
//         </a>
//       </td>
//     </tr>
//   );
// }

// export default ShopBagItem;





import React, { useContext } from 'react';
import { AppContext } from '../App';

function ShopBagItem({ game, index }) {
    const { bag, setBag } = useContext(AppContext);

    const handleRemoveFromBag = () => {
        const updatedBag = bag.filter(item => item._id !== game._id);
        setBag(updatedBag);
        localStorage.setItem('bag', JSON.stringify(updatedBag));  // Save to localStorage
    };

    return (
        <tr className="shopBagItem w-full text-center border-b border-gray-700 mb-[20px]">
            <th scope="row" className="py-4 text-[1.2rem] text-white">{index + 1}</th>
            <td className="py-4 text-[1.2rem] text-white">
                <img src={game.img} alt={game.title} className="img-fluid w-[120px] h-[70px] object-cover object-center rounded-md" />
            </td>
            <td className="py-4">{game.title}</td>
            <td className="py-4">Rs {game.price.toFixed(2)}</td>
            <td className="py-4">{(game.discount * 100).toFixed(0)}%</td>
            <td className="py-4">Rs {(game.price * (1 - game.discount)).toFixed(2)}</td>
            <td className="py-4">
                <a href="#" className="text-red-500 hover:text-red-700 text-[1.6rem]" onClick={handleRemoveFromBag}>
                    <i className="bi bi-trash3-fill"></i>
                </a>
            </td>
        </tr>
    );
}

export default ShopBagItem;
