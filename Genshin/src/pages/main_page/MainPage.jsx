import {
  FaUser,
  FaPlus,
  FaArrowLeft,
  FaArrowRight,
  FaSearch,
  FaTimes
} from 'react-icons/fa'
import './css/colors.css'
import './css/MainPage.css'
import { useState } from 'react'
import { ChangeColor } from '../../components/colors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ServerAdress } from '../../components/ApiVavilin'
import { banner_info } from './components/banner_info'
import { Bubble } from './components/bubble'

const MainPage = () => {
  return (
    <>
      <div className='wrapper'>
        <HeaderMainPage />
        <ContentMainPage />
      </div>
    </>
  )
}

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
const ContentMainPage = () => {
  const [character, setCharacter] = useState('Layla')
  const SetCharacter = (character) => {
    setCharacter(character)
    ChangeColor(character)
  }
  const changeCharacter = (direction) => {
    let allKeys = Object.keys(banner_info)
    let currentCharacterIndex = allKeys.indexOf(character)
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
    SetCharacter('Layla')
  }, [])
  const Banner = () => {
    const [fade, setFade] = useState(true)
    return (
      <>
        <div className='leftSideBannerMainPage'>
          <div
            className={
              'headerLeftSideContainerPage' + (fade ? ' TextFadeIn' : '')
            }
          >
            {banner_info[character].name}
          </div>
          <div
            className={
              'descriptionLeftSideContainerPage' + (fade ? ' TextFadeIn' : '')
            }
            onAnimationEnd={() => setFade(false)}
          >
            {banner_info[character].description}
          </div>
        </div>
        <div className='rightSideBannerMainPage'>
          <div className='imageInBannerMainPage'>
            <img
              src={banner_info[character].img}
              alt=''
              className={fade ? 'FadeInImg' : ''}
              onAnimationEnd={() => setFade(false)}
            />
          </div>
        </div>
      </>
    )
  }
  return (
    <>
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
          <div className='bubbles'>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
            <Bubble></Bubble>
          </div>
          <Banner />
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
      <div className='bottomLayerMainPage'>
        <div className='firstSection'>
          <div className='wrapperFirst'>
            <div className='NameFirstSection'>
              Арты <FaArrowRight />
            </div>
            <div className='ObjectsInFirstSection'>
              <div className='ObjectsFirstSession'>
                <img src={banner_info[character].art1} alt='' />
                <div className='TextObjectFirstSession'>by @begem0t1k</div>
              </div>
              <div className='ObjectsFirstSession'>
                <img src={banner_info[character].art2} alt='' />
                <div className='TextObjectFirstSession'>by @dan.kis</div>
              </div>
            </div>

            <div className='buttonShowMore'>Больше...</div>
          </div>
        </div>
        <div className='secondSection'>
          <div className='NameFirstSection'>Последние запросы</div>
          <div className='ObjectsInSecondSection'>
            <div className='ObjectInSecondSection'>
              <FaSearch size={20}></FaSearch>
              <div className='TextObjectSecondSession'>
                {' '}
                {banner_info[character].searchRequest[0]}
              </div>
            </div>
            <div className='ObjectInSecondSection'>
              <FaSearch size={20}></FaSearch>
              <div className='TextObjectSecondSession'>
                {' '}
                {banner_info[character].searchRequest[1]}
              </div>
            </div>
            <div className='ObjectInSecondSection'>
              <FaSearch size={20}></FaSearch>
              <div className='TextObjectSecondSession'>
                {' '}
                {banner_info[character].searchRequest[2]}
              </div>
            </div>
          </div>
        </div>
        <div className='thirdSection'>
          <div className='ObjectsInThirdSection'>
            <div className='ObjectInThirdSection'>
              <img src={banner_info[character].stkr1} alt='' />
              <div className='closeButton'>
                <FaTimes size={'40px'} />
              </div>
            </div>
            <div className='ObjectInThirdSection'>
              <img src={banner_info[character].stkr2} alt='' />
              <div className='closeButton'>
                <FaTimes size={'40px'} />
              </div>
            </div>
          </div>
        </div>
        <div className='fourthSection'>
          <div className='ObjectsInFourthSection'>
            <div className='ObjectInFourthSection'></div>
            <div className='ObjectInFourthSection'></div>
            <div className='ObjectInFourthSection'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPage
