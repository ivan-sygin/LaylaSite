import { Box } from '@mui/material'
import { ServerAdress2 } from '../../../components/ApiVavilin'

const handleClick = () => {
  const name = document.getElementById('name_lection').value
  const text = document.getElementById('text_lection').value
  console.log(name, text)
}

export const Lections = () => {
  return (
    <Box display={'flex'} gap={'20px'} flexDirection={'column'}>
      <Box display={'flex'} flexDirection={'row'} gap={2}>
        <Box component={'label'}>Введите название лекции</Box>
        <Box component={'input'} type='text' id='name_lection'></Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={2}>
        <Box component={'label'}>Введите текст лекции</Box>
        <Box component={'textarea'} type='text' id='text_lection'></Box>
      </Box>
      <Box display={'flex'} flexDirection={'row'} gap={2}>
        <Box
          component={'button'}
          onClick={() => {
            handleClick()
          }}
        >
          Отправить
        </Box>
      </Box>
    </Box>
  )
}
