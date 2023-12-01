import { FaUser, FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from '@mui/material/Button'
import './css/colors.css'
import './css/MainPage.css'
import { useState } from 'react'
import {ChangeColor} from '../components/colors'
import { useEffect } from 'react'

class Layla{
  name = "Лайла"
  description = "Лайла — Крио саппорт, предоставляет отряду защиту."
  img="https://genshinpedia.ru/wp-content/uploads/2023/04/1680785407_e67792d0779f602044795c14c525dc57-2048x1199.png"
  color="Layla"
}
class Diluc{
  name = "Дилюк"
  description = "Дилюк — Пиро дамагер, предоставляет отряду урон."
  img="https://i.playground.ru/i/pix/3089903/image.jpg"
  color="Diluc"
}

const MainPage = () => {
  const [character, setCharacter] = useState("Layla");
  const characters = {"Layla":new Layla(),'Diluc':new Diluc()}
  useEffect(()=>{
    ChangeColor('Layla');
  },[])
  return (
    <>
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
          <div className='button_centerMainPage activeMainPage'>Главная</div>
          <div className='button_centerMainPage'>Поиск</div>
          <div className='button_centerMainPage'>Сообщение</div>
        </div>
        <div className='login_buttonsMainPage'>
          <div className='loginbutton_buttonsMainPage'>Войти</div>
          <div className='signinbutton_buttonsMainPage'>Регистрация</div>
        </div>
      </header>
      <div className='bannerMainPage'>
        <div className='arrowLeftMainPage'  onClick={() => { setCharacter("Layla"); ChangeColor('Layla'); }}>
          <FaArrowLeft />
        </div>
        <div className={'bannerContainerMainPage '+character+"bannerContainerMainPage"}>
          <div className='leftSideBannerMainPage '>
            <div className='headerLeftSideContainerPage'>{characters[character].name}</div>
            <div className='descriptionLeftSideContainerPage'>
              {characters[character].description}
            </div>
          </div>
          <div className='rightSideBannerMainPage'>
            <div className="imageInBannerMainPage">
              <img
                src={characters[character].img}
                alt=''
              />
            </div>
          </div>
        </div>
        <div className='arrowRightMainPage' onClick={() => { setCharacter("Diluc"); ChangeColor('Diluc'); }}>
          <FaArrowRight />
        </div>
      </div>

    </>
  )
}

export default MainPage;
