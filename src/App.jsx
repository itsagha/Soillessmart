import { useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Komunitas from './pages/Komunitas';
import Kursus from './pages/Kursus';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyCourse from './pages/MyCourse';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LayoutDetailKursus from './components/LayoutDetailKursus';
import LayoutDetailKomunitas from './components/LayoutDetailKomunitas';

function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

  return (
    <>
      {!isAuthPage && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='kursus' element={<Kursus />} />
        <Route path='komunitas' element={<Komunitas />} />
        <Route path='blog' element={<Blog />} />
        <Route path='mycourse' element={<MyCourse />} />
        <Route path='dashboard' element={<Dashboard />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
        <Route path='detailkursus' element={<LayoutDetailKursus />} />
        <Route path='detailkomunitas' element={<LayoutDetailKomunitas />} />
      </Routes>
      {!isAuthPage && <Footer />}
    </>
  );
}

export default App;
