import { banner_info } from './banner_info'
import { Bubble } from './bubble'
import { useState, useEffect } from 'react'
import { ChangeColor } from '../../../components/colors'
import { FaArrowLeft, FaArrowRight, FaSearch, FaTimes } from 'react-icons/fa'
export const ContentMainPage = () => {
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
