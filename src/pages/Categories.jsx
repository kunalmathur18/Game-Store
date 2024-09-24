import React ,{useState}from 'react'
import './categories.css'
import filterListData from '../data/filterlistData'
import GameCard from '../components/GameCard';

function Categories({games,reference}) {
  const [data,setData] = useState(games);
  const [filters, setFilters]= useState (filterListData);
  const handleFilterGames=(category)=>{
    
    setFilters(
      filters.map(filter=>{
        filter.active =false;
        if(filter.name===category){
          filter.active= true
        }
        return filter;
  
      })
    );
    if(category==='All'){
      setData(games)
      return;
    }
    setData(games.filter(game=>game.category===category));
  };
  const[text,setText] = useState('');
  const handleSearchGames= e=>{
    setData(games.filter(game=>game.title.toLowerCase().includes(e.target.value.toLowerCase())));
    setText(e.target.value);
  };
  return (
    <section id="categories" className="categories" ref={reference} >
      <div className="container mt-2">
        <div className="flex  gap-6 row-span-1">
          <div className="lg:col-span-8 flex justify-start items-center ">
            <ul className='filters flex flex-wrap list-none gap-[15px] my-20px '>
              {
                filters.map(filter=>(
                  
                  <li 
                  key={filter._id}
                   className={`${filter.active ? 'active' :undefined}` }  
                   onClick={()=>handleFilterGames(filter.name)}>
                    {filter.name}
                    </li>
                ))
              }


            </ul>
          </div>
          <div className="lg:col-span-4 flex justify-end items-center">
            <div className="search">
               <i class="bi bi-search text-white"></i>
              <input type="text" name='search' placeholder='Search' value={text} onChange={handleSearchGames} />
            </div>
          </div>
        </div>
        <div className="row">
          {data.map((game)=>(
            <GameCard key={game._id} game={game}/>

          ))}
        </div>

      </div>

    </section>
  )
}

export default Categories
