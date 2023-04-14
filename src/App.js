import './App.css'
import Cards from './components/Cards.jsx'
import Nav from './components/Nav'
import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import About from "./components/About"
import Detail from './components/Detail'
import Form from './components/Form'
import { useLocation, useNavigate } from 'react-router-dom'

function App () {

  const [characters, setCharacters] = useState([])
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();
  
  useEffect(() => {
    !access && navigate('/')
  }, [access]);

  const username = 'altairconnor12@gmail.com';
  const password = 'kazekage17';

  const onSearch = (id) => {
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    /*if(characters.find((char) => char(id) === id)){
      return alert("No se puede ingresar un personaje más de una vez");
    }*/

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
       .then((response) => response.json())
       .then((data) => {
          if (data.name) {
             setCharacters((oldChars) => [...oldChars, data]);
          } else {
             alert('No hay personajes con ese ID');
          }
       });
 }
    
 const onClose = (id) => {
  setCharacters(
    characters.filter((char) => char.id !== id));
 }

 const login = (userData) => {
  if(userData.username === username && userData.password === password) {
    setAccess(true);
    navigate('/home');
  } else {
    alert('Credencuales inválidas');
  }
 };

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
      </Routes>
      </div>
      <div>
      
      </div>
    </div>
  )
}

export default App
