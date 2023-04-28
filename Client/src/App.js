import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from "./components/About"
import Detail from './components/Detail'
import Form from './components/Form'
import Favorites from './components/Favorites'
import { useLocation, useNavigate } from 'react-router-dom'

const URL = 'http://localhost:3001/rickandmorty/login/';

function App () {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    !access && navigate('/')
  }, [access, navigate]);

  const username = 'altairconnor12@gmail.com';
  const password = 'kazekage17';

  const onSearch = async (id) => {
    // const URL_BASE = "https://be-a-rym.up.railway.app/api";
    // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    /*if(characters.find((char) => char(id) === id)){
      return alert("No se puede ingresar un personaje más de una vez");
    }*/

    try {

      const { data } = await fetch(`http://localhost:3001/rickandmorty/character/${id}` 
      /*`${URL_BASE}/character/${id}?key=${KEY}`*/)
           
      if (data.name) {
         setCharacters((oldChars) => [...oldChars, data]);
      }
      
    } catch (error) {
      alert('No hay personajes con ese ID');
    }
 }
    
 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== id));
 }

 const login = async (userData) => {

   try {
    const { email, password } = userData;
    const { data } = await axios(URL + `?email=${email}&password=${password}`);
    const { access } = data;

    setAccess(access);
    access && navigate('/home');

    
  } catch (error) {
    console.log(error.message)
  }
}

 const {pathname} = useLocation();

  return (
    <div className='App' style={{ padding: '25px' }}>
      <div>
      {pathname !== "/" && <Nav onSearch={onSearch}/>}
      <Routes>
        <Route path="/" element={<Form login={login} />}/>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />}/>
        <Route path="/about" element={<About />} />
        <Route path="/detail/:detailId" element={<Detail/>} />
        <Route path='/favorites' element={<Favorites/>} />
      </Routes>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default App
