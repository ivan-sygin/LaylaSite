import { Box, autocompleteClasses } from '@mui/material'
import { useParams } from 'react-router-dom'
import { HeaderMainPage } from '../MainPage'
import { useEffect, useState } from 'react'
import { ServerAdress, ServerAdress2 } from '../../components/ApiVavilin'

const GradientBox = () => {
  return (
    <Box
      height={200}
      borderRadius={'30px 30px 0px 0px'}
      position={'relative'}
      zIndex={4}
      sx={{ background: 'var(--gradient)' }}
    ></Box>
  )
}
const ImageAndTextBox = ({ user }) => {
  const styleTextContainer = {
    position: { xs: 'relative', sm: 'relative' },
    top: { xs: -90, sm: 0 },
    marginBottom: { xs: '-90px', sm: 0 },
    bgcolor: { xs: 'white', sm: '' },
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: { xs: 'center', sm: 'start' }
  }
  const styleImageAndText = {
    width: '150px',
    height: 150,
    borderRadius: '50%',
    zIndex: 4,
    position: { xs: 'relative', sm: 'absolute' },
    top: { sm: -80, xs: 0 },
    left: { sm: 30, xs: 0 },
    backgroundColor: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
  return (
    <Box position={'relative'}>
      <Box sx={styleTextContainer}>
        <Box sx={styleImageAndText}>
          <Box
            width={35}
            height={35}
            zIndex={9}
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            bgcolor={'white'}
            borderRadius={'50%'}
            position={'absolute'}
            bottom={0}
            right={10}
          >
            <Box
              width={25}
              height={25}
              borderRadius={'50%'}
              backgroundColor='#A2F2A2'
              sx={{
                boxShadow: '0 0 20px #8FD68F',
                animation: 'Shine 1s ease-out infinite'
              }}
              zIndex={10}
            ></Box>
          </Box>
          <Box
            width={140}
            height={140}
            borderRadius={'50%'}
            position={'absolute'}
            overflow={'hidden'}
          >
            <img
              width={'100%'}
              height={'100%'}
              src={
                user?.photo ||
                'https://sun9-14.userapi.com/impg/Xdv9rwUVcJEDHOwQMs_z12BLmOdj81gbMBchxg/gPIDNOe0YXk.jpg?size=1280x1280&quality=95&sign=55d35aa73db5e1f0d9ca39779fe6cf74&type=album'
              }
              style={{ objectFit: 'cover' }}
              alt=''
            />
          </Box>
        </Box>
        <Box
          paddingLeft={'190px'}
          paddingTop={'10px'}
          fontSize={36}
          fontWeight={1000}
          sx={{ paddingLeft: { xs: '0px', sm: '190px' } }}
        >
          {user?.first_name} {user?.last_name}
        </Box>
        <Box
          paddingLeft={'190px'}
          fontSize={20}
          fontWeight={100}
          sx={{ paddingLeft: { xs: '0px', sm: '190px' } }}
        >
          программист
        </Box>
      </Box>
    </Box>
  )
}
export default function ProfilePage() {
  const [userInfo, setUserInfo] = useState()

  const FetchUserInfo = (id) => {
    fetch(ServerAdress2 + '/users/get?id=' + id)
      .then((response) => response.json())
      .then((data) => {
        if (data.status) setUserInfo(data.user)
      })
  }

  const { id } = useParams()
  useEffect(() => {
    FetchUserInfo(id)
  }, [])
  return (
    <>
      <Box maxWidth={1200} margin={'auto'}>
        <HeaderMainPage />
        <Box height={20} />
        <GradientBox />
        <ImageAndTextBox user={userInfo} />
        <Box
          bgcolor={'white'}
          borderRadius={'0px 0px 30px 30px'}
          height={30}
        ></Box>
      </Box>
    </>
  )
}
