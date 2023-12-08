import { useEffect, useState } from 'react'
import { TOKEN } from '../../../components/TokenController'
import { ServerAdress } from '../../../components/ApiVavilin'
import { Box } from '@mui/material'
import { FaAdversal, FaInfo } from 'react-icons/fa'

const default_advise = {
  title: 'Это рыба-текст',
  content:
    'Данные текст вы видите, пока Мишина апишка мне не вернёт нормальный Вам совет'
}

export const AdvisesToUser = () => {
  const [advise, setAdvise] = useState('')
  const FetchAdvises = (token) => {
    fetch(ServerAdress + '/user/getAdvises/', {
      headers: {
        Authorization: 'Bearer ' + TOKEN
      }
    })
      .then((response) => {
        if (response.ok)
          response.json().then((json) => {
            setAdvise(json)
          })
        else throw ''
      })
      .catch(() => {
        setAdvise(default_advise)
      })
  }

  useEffect(() => {
    if (TOKEN) FetchAdvises()
  }, [])

  return (
    <Box
      width={'90%'}
      margin={'auto'}
      marginTop={'20px'}
      borderRadius={'20px'}
      border={1}
    >
      <Box paddingX={'20px'} paddingY={'20px'}>
        <Box
          fontSize={'36px'}
          fontFamily={'RussoOne'}
          color={'var(--banner-color1)'}
          display={'flex'}
          flexDirection={'row'}
        >
          <FaInfo />
          {' Рекомендац'}
          <Box color={'var(--banner-color2)'}>{'ИИ '}</Box>
        </Box>
        <Box fontSize={'24px'} fontFamily={'Arial Black'}>
          {advise.title}
        </Box>
        <Box fontSize={'18px'} fontFamily={'Arial'} marginTop={'10px'}>
          {advise.content}
        </Box>
      </Box>
    </Box>
  )
}
