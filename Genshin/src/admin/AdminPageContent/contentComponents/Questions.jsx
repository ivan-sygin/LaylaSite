import { Container, Typography } from '@mui/material'

export const Questions = () => {
  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 1 }}>
        <Typography variant='h4' gutterBottom>
          Список вопросов и их добавление
        </Typography>
      </Container>
    </div>
  )
}
