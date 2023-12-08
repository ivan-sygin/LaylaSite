import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/MainPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import NotFoundPage from './pages/system/NotFoundPage'
import { MyAdmin } from './admin/MyAdmin'
import { Dashboard } from './admin/AdminPageContent/contentComponents/Dashboard'
import { Inventory } from './admin/AdminPageContent/contentComponents/Inventory'
import { OrdersPage } from './admin/AdminPageContent/contentComponents/Orders'
import { Users } from './admin/AdminPageContent/contentComponents/Users'
import { SignIn } from './admin/AdminLogIn/AdminLogIn'
import ProfilePage from './pages/profile/ProfilePage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />

        <Route path='/admin-login' element={<SignIn />}></Route>
        <Route path='/admin-panel' element={<MyAdmin />}>
          <Route path='' element={<Dashboard />}></Route>
          <Route path='inventory' element={<Inventory />}></Route>
          <Route path='orders' element={<OrdersPage />}></Route>
          <Route path='users' element={<Users />}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
