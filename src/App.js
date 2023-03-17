import { useEffect,useState } from 'react'
import './App.css'
import Cards from './components/Cards/Cards.jsx'
import Nav from "./components/Nav/Nav.jsx"
import { Route,Routes, useLocation, useNavigate } from 'react-router-dom'
import About from './components/About/About'
import Detail from './components/Detail/Detail'
import Form from './components/Form/Form'

function App () {
  const[characters, setCharacters] = useState([])
  const {pathname} = useLocation();
  const[access, setAccess] = useState(false)
  const navigate = useNavigate();
  useEffect(() => {
    !access && navigate('/');
 }, [access]);

  // Datos Login
  const username = "mariottimatias@gmail.com";
  const password = "clave123";
  
  const onSearch = (id)=>{

  if(characters.find((char)=>char.id === id)){
    return alert("personaje repetido")
  }
   fetch(`https://rickandmortyapi.com/api/character/${id}`)
  .then((response) => response.json())
  .then((data) => {
   if (data.id) {
      setCharacters((oldChars) => [...oldChars, data]);
   } else {
      window.alert('No hay personajes con ese ID');
   }
});

  };
  const onClose = (id)=>{
  let Delete = [...characters] 
   Delete = Delete.filter(character=>(character.id)!== id)

   setCharacters([...Delete])
   };

  const login = (userData)=>{
    if(userData.username===username && userData.password === password){
      setAccess (true);
      navigate("/home"); 
    } else{
      alert('usuario o contraseña incorrectos');
    }
  };
  
  return (
    <>
    <div className='App' style={{ padding: '25px' }}>
    
    <div>
      
    { pathname !== "/" && <Nav
      onSearch={onSearch}
      />}
    </div>
    <Routes>
      <Route path='/' element={<Form login={login}/>}></Route>
      <Route path='/about'element={<About/>}></Route>
      <Route path='/home'element={<Cards characters={characters} onClose={onClose} />}></Route>
      <Route path='/detail/:detailId'element={<Detail/>}></Route> 
    </Routes>
    </div>
    </>
  )
}

export default App
