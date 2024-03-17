import './App.css';
import HomePage from './components/HomePage.js';
import './components/HomePage.css';
import AdminLogin from './components/AdminLogin';
import AdminSignup from './components/AdminSignup';
import OwnerLogin from './components/OwnerLogin';
import OwnerSignup from './components/OwnerSignup';
import UserLogin from './components/UserLogin';
import UserSignup from './components/UserSignup';
import UserDashboard from './components/UserDashboard';
import OwnerDashboard from './components/OwnerDashboard';
import AdminDashboard from './components/AdminDashboard';
import ViewCars from './components/ViewCars';
import ListCar from './components/ListCar';
import Payment from './components/Payment';
import Wallet from './components/Wallet';
import userService from './services/userService';
import ownerService from './services/ownerService';
import adminService from './services/adminService';

function App() {
  return(
    <HomePage/>
  )
  
}

export default App;
