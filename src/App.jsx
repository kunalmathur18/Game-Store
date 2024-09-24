// import React ,{ useState } from 'react'

// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import Main from './pages/Main';

// export const AppContext = React.createContext();
// function App() {
//   // const [count, setCount] = useState(0)
//   const[library,setLibrary] = useState([])
//   const [bag,setBag] = useState([])

//   return (
//     <>
//     <AppContext.Provider value={{library,setLibrary,bag,setBag}}>
//     <Main/>

//     </AppContext.Provider>
      
//     </>
//   )
// }

// export default App



import React, { useState, useEffect } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import Main from './pages/Main';

export const AppContext = React.createContext();

function App() {
  // Load initial state from localStorage
  const [library, setLibrary] = useState(() => {
    const savedLibrary = localStorage.getItem('library');
    return savedLibrary ? JSON.parse(savedLibrary) : [];
  });

  const [bag, setBag] = useState(() => {
    const savedBag = localStorage.getItem('bag');
    return savedBag ? JSON.parse(savedBag) : [];
  });

  // Update localStorage whenever `library` changes
  useEffect(() => {
    localStorage.setItem('library', JSON.stringify(library));
  }, [library]);

  // Update localStorage whenever `bag` changes
  useEffect(() => {
    localStorage.setItem('bag', JSON.stringify(bag));
  }, [bag]);

  return (
    <>
      <AppContext.Provider value={{ library, setLibrary, bag, setBag }}>
        <Main />
      </AppContext.Provider>
    </>
  );
}

export default App;
