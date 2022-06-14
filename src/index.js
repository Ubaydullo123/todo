import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter ,Routes ,Route} from 'react-router-dom'

import Header from './components/Header'
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';

import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/todo' element={<Todo/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
