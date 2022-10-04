import React from 'react';
// import Popular from './Popular';
import { Routes, Route, Link } from 'react-router-dom';
import American from './American';
import Chinese from './Chinese';
import French from './French';
import Italian from './Italian';
import Korean from './Korean';
import Thai from './Thai';


// import SearchForm from './SearchForm';
// import SearchResults from './SearchResults';


const Main = () =>{
    return (
        <>
         <nav>
        <div className = "header">
			<Link to="/"><h1>Foodie</h1></Link>
           </div>
                <ul>
                    <Link to="/american"><li>American</li></Link>
                    <Link to="/chinese"><li>Chinese</li></Link>
                    <Link to="/french"><li>French</li></Link>
                    <Link to="/italian"><li>Italian</li></Link>
                    <Link to="/korean"><li>Korean</li></Link>
                    <Link to="/thai"><li>Thai</li></Link>

                </ul>
            </nav>
            
        <div className="searchbox">
			<input type='text' placeholder='Search Recipe' /> 
            <button>🍳</button>
        </div>
        {/* <SearchForm />
        <SearchResults images={images}/> */}
        
        {/* <Popular/> */}
     
        
        
        <main>
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/american" element={<American />} />
            <Route path="/chinese" element={<Chinese />} />
            <Route path="/french" element={<French />} />
            <Route path="/italian" element={<Italian />} />
            <Route path="/korean" element={<Korean />} />
            <Route path="/thai" element={<Thai />} />
            
        </Routes>
        </main>
        </>

    );
}

export default Main;