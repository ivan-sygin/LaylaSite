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

export const AdminHeader = () => {
  const navigate = useNavigate()

  return (
    <Box sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.15)' }}>
      <Container maxWidth='lg'>
        <div className='AdminHeader'>
          <Avatar
            alt='Admin'
            src='https://sun9-59.userapi.com/impg/lc00dwrgbxu4BMGmjfFFTHiPLnqvtrrFRp1d8w/6nPlNlsd9cs.jpg?size=145x184&quality=96&sign=bc6fc388ef81a6ddc7653f5d51f1565b&type=album'
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
