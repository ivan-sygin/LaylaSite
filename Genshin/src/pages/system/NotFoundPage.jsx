import { Box } from '@mui/material'
import Alert from '../images/alert_denied.jpg'
export default function NotFoundPage() {
  return (
    <>
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        width={'100%'}
        height={'95vh'}
      >
        <Box>
          <Box>
            <img src={Alert} alt='' style={{ height: '90vh' }} />
          </Box>
        </Box>
      </Box>
    </>
  )
}
