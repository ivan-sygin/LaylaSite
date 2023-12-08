import './css/colors.css'
import './css/MainPage.css'
import { HeaderMainPage } from './components/header'
import { ContentMainPage } from './components/content'
import { AdvisesToUser } from './components/advise_user'

const MainPage = () => {
  return (
    <>
      <div className='wrapper'>
        <HeaderMainPage />
        <ContentMainPage />
        <AdvisesToUser />
      </div>
    </>
  )
}

export default MainPage
