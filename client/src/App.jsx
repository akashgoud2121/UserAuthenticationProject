import {BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './pages/About';
import Profile from './pages/Profile';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import Home from './pages/Home';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
export default function App() {
  return (
  
  <BrowserRouter>
{/* header */}
<Header/>


  <Routes>
    <Route path="/" element= {<Home/>}/>
    <Route path="/about" element= {<About/>}/>

    <Route element ={<PrivateRoute/>}>

    <Route path="/profile" element= {<Profile/>}/>
    </Route>

    <Route path="/signin" element= {<Signin/>}/>
    <Route path="/signup" element= {<Signup/>}/>

  </Routes>
  </BrowserRouter>);
}
