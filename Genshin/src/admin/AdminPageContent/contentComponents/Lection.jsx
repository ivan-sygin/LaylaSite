import { Box } from '@mui/material'
import { ServerAdress2 } from '../../../components/ApiVavilin'
import { TOKEN } from '../../../components/TokenController'

const handleClick = () => {
  const name = document.getElementById('name_lection').value
  const text = document.getElementById('text_lection').value
  fetch(ServerAdress2 + '/topics/create', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: name, text: text })
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
    })
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
