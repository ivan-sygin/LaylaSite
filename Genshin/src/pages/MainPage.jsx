import { FaUser, FaPlus, FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import Button from '@mui/material/Button'
import './css/colors.css'
import './css/MainPage.css'
import { useState } from 'react'
import { ChangeColor } from '../components/colors'
import { useEffect } from 'react'

const MainPage = () => {
  const [character, setCharacter] = useState('Layla')
  const [fade, setFade] = useState(true)
  const characters = {
    Layla: {
      name: 'Лайла',
      description: 'Лайла — Крио саппорт, предоставляет отряду защиту.',
      img: 'https://genshinpedia.ru/wp-content/uploads/2023/04/1680785407_e67792d0779f602044795c14c525dc57-2048x1199.png',
      color: 'Layla'
    },
    Diluc: {
      name: 'Дилюк',
      description: 'Дилюк — Пиро дамагер, предоставляет отряду урон.',
      img: 'https://i.playground.ru/i/pix/3089903/image.jpg',
      color: 'Diluc'
    },
    Xiao: {
      name: 'Сяо',
      description: 'Сяо — Анемо дамагер, предоставляет отряду анемо-урон.',
      img: 'https://images5.alphacoders.com/110/thumb-1920-1109816.png',
      color: 'Xiao'
    }
  }
  const SetCharacter = (character) => {
    setCharacter(character)
    ChangeColor(character)
    setFade(true)
  }
  const changeCharacter = (direction) => {
    let allKeys = Object.keys(characters)
    let currentCharacterIndex = allKeys.indexOf(character)
    console.log(currentCharacterIndex)
    if (direction == 1)
      if (allKeys.length - 1 == currentCharacterIndex) {
        SetCharacter(allKeys[0])
      } else {
        SetCharacter(allKeys[currentCharacterIndex + 1])
      }
    else {
      if (0 == currentCharacterIndex) {
        SetCharacter(allKeys[allKeys.length - 1])
      } else {
        SetCharacter(allKeys[currentCharacterIndex - 1])
      }
    }
  }
  useEffect(() => {
    ChangeColor('Layla')
  }, [])
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
        <div
          className='arrowLeftMainPage'
          onClick={() => {
            changeCharacter(-1)
          }}
        >
          <FaArrowLeft />
        </div>
        <div
          className={
            'bannerContainerMainPage ' + character + 'bannerContainerMainPage'
          }
        >
          <div className='leftSideBannerMainPage '>
            <div
              className={
                'headerLeftSideContainerPage' + (fade ? ' TextFadeIn' : '')
              }
            >
              {characters[character].name}
            </div>
            <div
              className={
                'descriptionLeftSideContainerPage' + (fade ? ' TextFadeIn' : '')
              }
              onAnimationEnd={() => setFade(false)}
            >
              {characters[character].description}
            </div>
          </div>
          <div className='rightSideBannerMainPage'>
            <div className='imageInBannerMainPage'>
              <img
                src={characters[character].img}
                alt=''
                className={fade ? 'FadeInImg' : ''}
                onAnimationEnd={() => setFade(false)}
              />
            </div>
          </div>
        </div>
        <div
          className='arrowRightMainPage'
          onClick={() => {
            changeCharacter(1)
          }}
        >
          <FaArrowRight />
        </div>
      </div>
    </>
  )
}

export default MainPage
