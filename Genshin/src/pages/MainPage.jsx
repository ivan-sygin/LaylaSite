import { FaUser, FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from '@mui/material/Button'
import './css/colors.css'
import './css/MainPage.css'

const MainPage = () => {
  return (
    <>
      <div className='headerMainPage'>
        <div className='iconsMainPage'>
          <div className='iconMainPage icon_profileMainPage'>
            <FaUser />
          </div>
          <div className='iconMainPage icon_addMainPage'>
            <FaPlus />
          </div>
        </div>
        <div className='buttonsMainPage'>
          <div className='button_centerMainPage activeMainPage'>Главная</div>
          <div className='button_centerMainPage'>Поиск</div>
          <div className='button_centerMainPage'>Сообщение</div>
        </div>
        <div className='login_buttonsMainPage'>
          <div className='loginbutton_buttonsMainPage'>Войти</div>
          <div className='signinbutton_buttonsMainPage'>Регистрация</div>
        </div>
      </div>
      <div className='bannerMainPage'>
        <div className='arrowLeftMainPage'>
          <FaArrowLeft />
        </div>
        <div className='bannerContainerMainPage'>
          <div className='leftSideBannerMainPage'>
            <div className='headerLeftSideContainerPage'>Лайла</div>
            <div className='descriptionLeftSideContainerPage'>
              Лайла — Крио саппорт, предоставляет отряду защиту.
            </div>
          </div>
          <div className='rightSideBannerMainPage'>
            <img
              src='https://genshinpedia.ru/wp-content/uploads/2023/04/1680785407_e67792d0779f602044795c14c525dc57-2048x1199.png'
              alt=''
            />
          </div>
        </div>
        <div className='arrowRightMainPage'>
          <FaArrowRight />
        </div>
      </div>
    </>
  )
}

export default MainPage
