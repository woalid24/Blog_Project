import React from 'react';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
import HomePage from './Pages/HomePage';
import DetailsPage from './Pages/DetailsPage';
import ByCategoryPage from './Pages/ByCategoryPage';



const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/byCategory/:categoryId' element={<ByCategoryPage/>}/>
          <Route path='/details/:id' element={<DetailsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;