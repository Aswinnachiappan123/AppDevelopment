import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './assets/css/App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import ProfilePage from '../src/pages/ProfilePage';
import EditProfilePage from './pages/EditProfilePage';
import CartPage from './pages/CartPage';
import UserDashboard from './pages/Dashboard';
import TermsAndConditions from './pages/Terms';
import PrivacyPolicy from './pages/Privacy';
import Faq from './pages/Faq';
import Exercises from './pages/Exercises';
import ContactUs from './pages/Contact';
function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Login/>}/>
      <Route exact path='/Register' element={<Register/>}/>
      <Route exact path='/Home' element={<Home/>}/>
      <Route exact path='/ProfilePage' element={<ProfilePage/>}/>
      <Route exact path='/EditProfilePage' element={<EditProfilePage/>}/>
      <Route exact path='/Trainers' element={<CartPage/>}/>
      <Route exact path='/Dashboard' element={<UserDashboard/>}/>
      <Route exact path='/terms' element={<TermsAndConditions/>}/>
      <Route exact path='/privacy' element={<PrivacyPolicy/>}/>
      <Route exact path='/faq' element={<Faq/>}/>
      <Route exact path='/Contact us' element={<ContactUs/>}/>
      
      <Route exact path='/Exercises' element={<Exercises/>}/>
      


    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;