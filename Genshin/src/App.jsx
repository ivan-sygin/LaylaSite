import { BrowserRouter, Routes, Route } from 'react-router-dom'
import MainPage from './pages/main_page/MainPage'
import LoginPage from './pages/login/LoginPage'
import RegisterPage from './pages/register/RegisterPage'
import NotFoundPage from './pages/system/NotFoundPage'
import { MyAdmin } from './admin/MyAdmin'
import { Dashboard } from './admin/AdminPageContent/contentComponents/Dashboard'
import { Questions } from './admin/AdminPageContent/contentComponents/Questions'
import { OrdersPage } from './admin/AdminPageContent/contentComponents/Dangers'
import { Users } from './admin/AdminPageContent/contentComponents/Users'
import { SignIn } from './admin/AdminLogIn/AdminLogIn'
import ProfilePage from './pages/profile/ProfilePage'
import { TestPage } from './pages/tests/TestPage'
import { Lections } from './admin/AdminPageContent/contentComponents/Lection'
import { MaterialPage } from './pages/materials/materials'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/profile/:id' element={<ProfilePage />} />
        <Route path='/test/:id_test' element={<TestPage />} />
        <Route path='/materials/:id_page' element={<MaterialPage />}>
          <Route path='' element={<Dashboard />}></Route>
        </Route>

        <Route path='/admin-login' element={<SignIn />}></Route>
        <Route path='/admin-panel' element={<MyAdmin />}>
          <Route path='' element={<Dashboard />}></Route>
          <Route path='questions' element={<Questions />}></Route>
          <Route path='dangers' element={<OrdersPage />}></Route>
          <Route path='users' element={<Users />}></Route>
          <Route path='lections' element={<Lections />}></Route>
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
