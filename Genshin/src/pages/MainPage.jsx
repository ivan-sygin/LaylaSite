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
import { ChangeColor } from '../components/colors'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ServerAdress } from '../components/ApiVavilin'

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

const Bubble = () => {
  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
  }
  let posX = getRandomArbitrary(1, 1090)
  let size = getRandomArbitrary(40, 60)
  let speed = getRandomArbitrary(5000, 20000)
  return (
    <>
      <div
        className='bubble'
        style={{
          position: 'absolute',
          bottom: -size,
          left: posX,
          width: size + 'px',
          height: size + 'px',
          animation: 'goUp ' + speed + 'ms infinite '
        }}
        onAnimationEnd={(event) => {
          event.currentTarget.style.backgroundColor = 'black'
        }}
      ></div>
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
          <div className='loginbutton_buttonsMainPage' onClick={()=>{navigate("/profile/"+userInfo.user.id)}}>
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
        <div className='button_centerMainPage activeMainPage'>Главная</div>
        <div className='button_centerMainPage'>Поиск</div>
        <div className='button_centerMainPage'>Сообщение</div>
      </div>
      <LoginButtons />
    </header>
  )
}
const ContentMainPage = () => {
  const [character, setCharacter] = useState('Layla')

  const characters = {
    Layla: {
      name: 'Лайла',
      description: 'Лайла — Крио саппорт, предоставляет отряду защиту.',
      img: 'http://fileserver-bxwzgfn0.b4a.run/photos/fcd241325eb8790e0c16fe2b814765bceebf6270.png',
      color: 'Layla',
      art1: 'https://i.ytimg.com/vi/dGsOQSYhRyw/hqdefault.jpg',
      art2: 'https://cdn.shazoo.ru/c1400x625/644620_CBTft3k_26-genshin.jpg',
      stkr1:
        'https://static.wikia.nocookie.net/bf340caf-30c4-4084-8add-3bd1e625f774/scale-to-width/755',
      stkr2:
        'https://i.pinimg.com/originals/89/7a/4c/897a4c49f3d474cf6986a92fa280f65c.png',
      searchRequest: ['Лайла саппорт', 'Лайла гайд', 'Когда Лайла спала?']
    },
    Diluc: {
      name: 'Дилюк',
      description: 'Дилюк — Пиро дамагер, предоставляет отряду урон.',
      img: 'https://i.playground.ru/i/pix/3089903/image.jpg',
      color: 'Diluc',
      art1: 'https://www.themebeta.com/media/cache/400x225/files/windows/images/202203/24/5443bdd2ce72e7a68df777e7077cf107.jpeg',
      art2: 'https://s3.zerochan.net/240/43/19/3178493.jpg',
      stkr1:
        'https://upload-bbs.mihoyo.com/upload/2022/03/28/6860e244437b2228002b4dcb05fe1542_3797615015828919351.png',
      stkr2:
        'https://act.hoyoverse.com/hk4e/e20200928calculate/item_icon_u587xe/c9ee551ffaa509a26f143fc5a7ac1480.png',
      searchRequest: ['Дилюк билд', 'Дилюк винокурня', 'Кэйа и Дилюк']
    },
    Xiao: {
      name: 'Сяо',
      description: 'Сяо — Анемо дамагер, предоставляет отряду анемо-урон.',
      img: 'https://images5.alphacoders.com/110/thumb-1920-1109816.png',
      color: 'Xiao',
      art1: 'https://static.wikia.nocookie.net/0ec66e09-3f5c-411f-b782-c13cd3c95128/scale-to-width/370',
      art2: 'https://i.pinimg.com/originals/16/2c/dd/162cdd3859fba632b16682998d3b1c9c.jpg',
      stkr1:
        'https://i.pinimg.com/originals/8c/53/1f/8c531fdcd9fc224c5df6cf6d7ba49552.png',
      stkr2:
        'https://upload-bbs.mihoyo.com/upload/2022/02/23/069c8e521150c000675450aab191d584_7316112639016562625.png',
      searchRequest: ['Сяо мейнеры', 'Как стать Сяо?', 'Я влюбился в Сяо']
    }
  }
  const SetCharacter = (character) => {
    setCharacter(character)
    ChangeColor(character)
  }
  const changeCharacter = (direction) => {
    let allKeys = Object.keys(characters)
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
                <img src={characters[character].art1} alt='' />
                <div className='TextObjectFirstSession'>by @begem0t1k</div>
              </div>
              <div className='ObjectsFirstSession'>
                <img src={characters[character].art2} alt='' />
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
                {characters[character].searchRequest[0]}
              </div>
            </div>
            <div className='ObjectInSecondSection'>
              <FaSearch size={20}></FaSearch>
              <div className='TextObjectSecondSession'>
                {' '}
                {characters[character].searchRequest[1]}
              </div>
            </div>
            <div className='ObjectInSecondSection'>
              <FaSearch size={20}></FaSearch>
              <div className='TextObjectSecondSession'>
                {' '}
                {characters[character].searchRequest[2]}
              </div>
            </div>
          </div>
        </div>
        <div className='thirdSection'>
          <div className='ObjectsInThirdSection'>
            <div className='ObjectInThirdSection'>
              <img src={characters[character].stkr1} alt='' />
              <div className='closeButton'>
                <FaTimes size={'40px'} />
              </div>
            </div>
            <div className='ObjectInThirdSection'>
              <img src={characters[character].stkr2} alt='' />
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
