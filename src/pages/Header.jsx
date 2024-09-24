// import React from 'react';
// import userImg  from '../images/pic1.png'
// function Header({ toggleActive }) {
//   return (
    
//     <header className='absolute top-0 left-0 w-[100%] flex justify-between items-center py-[20px] px-[30px] z-[1000]  '> 
//         <a href="" className='text-white text-[1.8rem]' onClick={toggleActive}>
//             <i class="bi bi-sliders"></i> 
//             </a>
//         <div className='text-white inline-flex items-center gap-[20px]'> 
//             <a href="" className='relative text-[1.5 rem] w-[50px] h-[50px] rounded-[10px] flex  justify-center items-center decoration-none  shadow-custom-shadow' >
//                 <i className="bi bi-heart-fill"></i>
//                 <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%]  flex justify-center items-center '  style={{ background: '#0998a8' }} >0</span>
//             </a>
//             <a href="" className='relative text-[1.5 rem] w-[50px] h-[50px] rounded-[10px] flex shadow-custom-shadow justify-center items-center decoration-none'>
//                 <i className="bi bi-cart-fill"></i>
//                 <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%]  flex justify-center items-center'  style={{ background: '#0998a8' }}>0</span>
//             </a>
//             <div className="avatar w-[150px] h-[50] py-[10px] px-[20px] flex items-center gap-[15px] rounded-[10px]  shadow-custom-shadow text-[1.8rem]" >
//                 <a href="" className='w-[35px] h-[35px] rounded-[50%] overflow-hidden'> <img src={userImg} alt="User Image" className='w-[100%] h-[100%] ' /></a>
//                 <div className='flex flex-col'>
//                     <span className='text-[0.7rem]'>Kunal</span>
//                     <a className='text-[0.6rem]' href="#"> View profile</a>
//                 </div>
//             </div>
//         </div>
//     </header>
//   )
// }

// export default Header





// import React ,{useContext} from 'react';
// import userImg from '../images/pic1.png';
// import { AppContext } from '../App';

// function Header({ toggleActive }) {
//     const {library, bag} = useContext(AppContext);
//     return (
//         <header className='absolute top-0 left-0 w-[100%] flex justify-between items-center py-[20px] px-[30px] z-[1000]'>
//             <a href="#" className='text-white text-[1.8rem]' onClick={toggleActive}>
//                 <i className="bi bi-sliders"></i>
//             </a>
//             <div className='text-white inline-flex items-center gap-[20px]'>
//                 <a href="#" className='relative text-[1.5rem] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center shadow-custom-shadow'>
//                     <i className="bi bi-heart-fill"></i>
//                     <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%] flex justify-center items-center' style={{ background: '#0998a8' }}>{library.length}</span>
//                 </a>
//                 <a href="#" className='relative text-[1.5rem] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center shadow-custom-shadow'>
//                     <i className="bi bi-cart-fill"></i>
//                     <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%] flex justify-center items-center' style={{ background: '#0998a8' }}>{bag.length}</span>
//                 </a>
//                 <div className="avatar w-[150px] h-[50px] py-[10px] px-[20px] flex items-center gap-[15px] rounded-[10px] shadow-custom-shadow text-[1.8rem]">
//                     <a href="#" className='w-[35px] h-[35px] rounded-[50%] overflow-hidden'>
//                         <img src={userImg} alt="User Image" className='w-[100%] h-[100%]' />
//                     </a>
//                     <div className='flex flex-col'>
//                         <span className='text-[0.7rem]'>Kunal</span>
//                         <a className='text-[0.6rem]' href="#"> View profile</a>
//                     </div>
//                 </div>
//             </div>
//         </header>
//     );
// }

// export default Header;





import React, { useContext, useEffect } from 'react';
import userImg from '../images/pic1.png';
import { AppContext } from '../App';

function Header({ toggleActive }) {
    const { library, bag } = useContext(AppContext);

    // Store the library and bag values in localStorage whenever they change
    useEffect(() => {
        localStorage.setItem('library', JSON.stringify(library));
        localStorage.setItem('bag', JSON.stringify(bag));
    }, [library, bag]);

    // Retrieve the stored values from localStorage when the component mounts
    useEffect(() => {
        const storedLibrary = localStorage.getItem('library');
        const storedBag = localStorage.getItem('bag');

        // If there are stored values, update the context with them
        if (storedLibrary) {
            const parsedLibrary = JSON.parse(storedLibrary);
            // You can update the AppContext's library value here if necessary
        }
        if (storedBag) {
            const parsedBag = JSON.parse(storedBag);
            // You can update the AppContext's bag value here if necessary
        }
    }, []);

    return (
        <header className='absolute top-0 left-0 w-[100%] flex justify-between items-center py-[20px] px-[30px] z-[1000]'>
            <a href="#" className='text-white text-[1.8rem]' onClick={toggleActive}>
                <i className="bi bi-sliders"></i>
            </a>
            <div className='text-white inline-flex items-center gap-[20px]'>
                {/* Heart (library) icon */}
                <a href="#" className='relative text-[1.5rem] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center shadow-custom-shadow'>
                    <i className="bi bi-heart-fill"></i>
                    <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%] flex justify-center items-center' style={{ background: '#0998a8' }}>
                        {library.length}
                    </span>
                </a>

                {/* Cart (bag) icon */}
                <a href="#" className='relative text-[1.5rem] w-[50px] h-[50px] rounded-[10px] flex justify-center items-center shadow-custom-shadow'>
                    <i className="bi bi-cart-fill"></i>
                    <span className='absolute right-0 bottom-[10px] text-[0.8rem] font-extrabold h-[20px] w-[20px] bg-[var(--second)] rounded-[50%] flex justify-center items-center' style={{ background: '#0998a8' }}>
                        {bag.length}
                    </span>
                </a>

                {/* User avatar */}
                <div className="avatar w-[150px] h-[50px] py-[10px] px-[20px] flex items-center gap-[15px] rounded-[10px] shadow-custom-shadow text-[1.8rem]">
                    <a href="#" className='w-[35px] h-[35px] rounded-[50%] overflow-hidden'>
                        <img src={userImg} alt="User Image" className='w-[100%] h-[100%]' />
                    </a>
                    <div className='flex flex-col'>
                        <span className='text-[0.7rem]'>Kunal</span>
                        <a className='text-[0.6rem]' href="#"> View profile</a>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
