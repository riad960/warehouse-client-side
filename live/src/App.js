import { Route, Routes } from 'react-router-dom';
import Additem from './Components/AddItem/Additem';
import RequireAuth from './Components/Auth/RequireAuth/RequireAuth';
import Blogs from './Components/Blogs/Blogs';
import Home from './Components/Home/Home';
import Inventory from './Components/Inventory/Inventory';
import ManageItem from './Components/ManageItem/ManageItem';
import ManageWatch from './Components/ManageWatch/ManageWatch';
import MyItem from './Components/MyItem/MyItem';
import Login from './Components/RegistationAndLogin/Login/Login';
import Signup from './Components/RegistationAndLogin/Sugnup/Signup';
import Footer from './Components/Shared/Footer/Footer';
import Header from './Components/Shared/Heder/Header';
import Notfound from './Components/Shared/Notfound';
import './App.css';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <div className='app'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/watch/:watchId" element={
          <RequireAuth>
            <ManageWatch />
          </RequireAuth>}
        />
        <Route path="/manage" element={
          <RequireAuth>
            <ManageItem />
          </RequireAuth>
        } />
        <Route path="/addItem" element={
          <RequireAuth>
            <Additem />
          </RequireAuth>
        } />
        <Route path="/myItem" element={
          <RequireAuth>
            <MyItem />
          </RequireAuth>
        } />
        {/* not found */}
        <Route path="*" element={<Notfound />} />
      </Routes>
      <Footer />
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
