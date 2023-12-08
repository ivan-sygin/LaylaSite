import { useNavigate } from 'react-router-dom'
import { FaUser, FaPlus } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { ServerAdress } from '../../../components/ApiVavilin'
export const HeaderMainPage = () => {
  const navigate = useNavigate()
  const LoginButtons = () => {
    const [userInfo, setUserInfo] = useState()
    const FetchUserData = () => {
      fetch(ServerAdress + '/auth/users/me', {
        mode: 'cors',
        method: 'GET',
        headers: {
          Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
        }
      })
        .then((response) => response.json())
        .then((data) => {
          setUserInfo(data)
        })
    }
    useEffect(() => {
      if (sessionStorage.getItem('access_token')) FetchUserData()
    }, [])
    if (userInfo)
      return (
        <div className='login_buttonsMainPage'>
          <div
            className='loginbutton_buttonsMainPage'
            onClick={() => {
              navigate('/profile/' + userInfo.user.id)
            }}
          >
            Привет, {userInfo && userInfo.user.first_name}
          </div>
          <div
            className='signinbutton_buttonsMainPage'
            onClick={() => {
              sessionStorage.clear()
              navigate('/')
            }}
          >
            Выйти
          </div>
        </div>
      )
    else
      return (
        <div className='login_buttonsMainPage'>
          <div
            className='loginbutton_buttonsMainPage'
            onClick={() => navigate('/login')}
          >
            Войти
          </div>
          <div
            className='signinbutton_buttonsMainPage'
            onClick={() => navigate('/register')}
          >
            Регистрация
          </div>
        </div>
      )
  }
  return (
    <header className='headerMainPage'>
      <div className='iconsMainPage'>
        <div className='iconMainPage icon_profileMainPage'>
          <FaUser />
        </div>
        <div className='iconMainPage icon_addMainPage'>
          <FaPlus />
        </div>
      </div>
      <div className='buttonsMainPage'>
        <div
          className='button_centerMainPage activeMainPage'
          onClick={() => navigate('/')}
        >
          Главная
        </div>
        <div className='button_centerMainPage'>Поиск</div>
        <div className='button_centerMainPage'>Сообщение</div>
      </div>
      <LoginButtons />
    </header>
  )
}
