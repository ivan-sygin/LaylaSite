import './css/colors.css'
import './css/MainPage.css'
import { HeaderMainPage } from './components/header'
import { ContentMainPage } from './components/content'

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

export default MainPage
