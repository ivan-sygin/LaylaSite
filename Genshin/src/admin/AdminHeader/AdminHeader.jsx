import {
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Typography
} from '@mui/material'
import { deepOrange } from '@mui/material/colors'
import EmailIcon from '@mui/icons-material/Email'
import NotificationsIcon from '@mui/icons-material/Notifications'
import ExitToAppIcon from '@mui/icons-material/ExitToApp'
import { useNavigate } from 'react-router-dom'
import { ServerAdress2 } from '../../components/ApiVavilin'
import { useEffect, useState } from 'react'

export const AdminHeader = () => {
  const [userPhoto, setUserPhoto] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    async function fetchUserPhoto() {
      try {
        const response = await fetch(
          `${ServerAdress2}/users/get?id=${sessionStorage.getItem('id')}`,
          {
            method: 'GET',
            headers: {
              Authorization: 'Bearer ' + sessionStorage.getItem('access_token')
            }
          }
        )
        console.log(sessionStorage.getItem('access_token'))
        if (response.ok) {
          const json = await response.json()
          setUserPhoto(JSON.stringify(json.user?.photo))
        } else {
          console.log('WRONG DATA')
        }
      } catch (error) {
        console.log('Ошибки сети или чё-то такое')
      }
    }
    fetchUserPhoto()
  }, [])

  return (
    <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)' }}>
      <Container maxWidth='lg'>
        <div className='AdminHeader'>
          <Avatar
            alt='Admin'
            src={userPhoto}
            sx={{ bgcolor: deepOrange[500], width: '50px', height: '50px' }}
          />
          <Typography
            variant='h5'
            sx={{
              fontSize: {
                lg: 30,
                md: 30,
                sm: 15,
                xs: 15
              }
            }}
          >
            E-notGPT Administration
          </Typography>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '6px'
            }}
          >
            <IconButton aria-label='email' color='inherit'>
              <Badge badgeContent={0} color='error' max={99} variant='dot'>
                <EmailIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label='notifications' color='inherit'>
              <Badge badgeContent={4} color='error' max={99}>
                <NotificationsIcon />
              </Badge>
            </IconButton>

            <IconButton
              aria-label='logout'
              color='inherit'
              onClick={() => {
                sessionStorage.removeItem('access_token')
                sessionStorage.removeItem('id')
                navigate('/admin-login')
              }}
            >
              <ExitToAppIcon />
            </IconButton>
          </Box>
        </div>
      </Container>
    </Box>
  )
}
