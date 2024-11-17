import { useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Komunitas from './pages/Komunitas';
import Kursus from './pages/Kursus';
import MyCourse from './pages/MyCourse';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import LayoutDetailKursus from './components/LayoutDetailKursus';
import LayoutDetailKomunitas from './components/LayoutDetailKomunitas';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SidebarAdmin from './components-admin/SidebarAdmin';
import ManageCourse from './pages-admin/ManageCourse';
import SaleStats from './pages-admin/SaleStats';
import UploadCourse from './pages-admin/UploadCourse';
import ProfileAdmin from './pages-admin/ProfileAdmin';
import { AdminProvider } from './information/AdminContext';
import LayoutEditKursus from './components-admin/LayoutEditKursus';
import { UserProvider } from './information/UserContext';
import { CourseProvider } from './information/CourseContext';


function App() {
  const location = useLocation();
  const isAuthPage = location.pathname === '/login' || location.pathname === '/register';
  const isAdminPage = location.pathname === '/managecourse' || location.pathname === '/salestats' || location.pathname === '/uploadcourse' || location.pathname === '/profileadmin' || location.pathname === '/editkursus';

  return (
    <AdminProvider>
      <CourseProvider>
        <UserProvider>
          {!isAuthPage && !isAdminPage && <Navbar />}
          {isAdminPage && <SidebarAdmin />}
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
            <Route path='managecourse' element={<ManageCourse />} />
            <Route path='salestats' element={<SaleStats />} />
            <Route path='uploadcourse' element={<UploadCourse />} />
            <Route path='profileadmin' element={<ProfileAdmin />} />
            <Route path='editkursus' element={<LayoutEditKursus />} />
          </Routes>
          {!isAuthPage && !isAdminPage && <Footer />}
        </UserProvider>
      </CourseProvider>
    </AdminProvider>
  );
}

export default App;
