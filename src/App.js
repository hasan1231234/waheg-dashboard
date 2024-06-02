import './App.css';
import {BrowserRouter , Routes , Route}  from 'react-router-dom'
import Login from './pages/Login';
import Home from './pages/Home';
import Students from './pages/Students';
import Teacher from './pages/Teacher';
import Corsat from './pages/Corsat';
import Lecs from './pages/Lecs';
import Subsecribe from './pages/Subscribe';
import Contact from './pages/Contact';
import Sections from './pages/Sections';
import Chapter from './pages/Chapter';
function App() {
  return (
    <div className="App">
       <BrowserRouter>
         <Routes>
           <Route path='/' element={<Login/>}/>
           <Route path='/home' element={<Home/>}/>
           <Route path='/students' element={<Students/>}/>
           <Route path='/teacher' element={<Teacher/>}/>
           <Route path='/corsat' element={<Corsat/>}/>
           <Route path='/lecs' element={<Lecs/>}/>
           <Route path='/subscribe' element={<Subsecribe/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/sections' element={<Sections/>}/>
           <Route path='/chapter' element={<Chapter/>}/>
         </Routes>
       </BrowserRouter>
    </div>
  );
}

export default App;
