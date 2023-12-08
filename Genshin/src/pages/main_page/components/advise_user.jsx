import { useEffect, useState } from 'react'
import { TOKEN } from '../../../components/TokenController'
import { ServerAdress } from '../../../components/ApiVavilin'
import { Box } from '@mui/material'
import { FaAdversal, FaInfo } from 'react-icons/fa'

const default_advise = {
  title: 'Фишинг',
  content: {
    __html:
      'Если вы все же попали на фишинговый сайт и ввели свои данные, сразу же смените пароли для <b>всех</b> учетных записей, которые могли быть скомпрометированы.'
  }
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
  if (advise)
    return (
      <Box
        width={'90%'}
        margin={'auto'}
        marginTop={'20px'}
        borderRadius={'20px'}
        border={1}
        borderColor={'var(--banner-color1)'}
        boxShadow={'3px 4px 8px 0px rgba(34, 60, 80, 0.1);'}
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
          <Box paddingLeft={'5px'}>
            <Box fontSize={'24px'} fontFamily={'Inter'} fontWeight={500}>
              {advise.title}
            </Box>
            <Box
              fontSize={'18px'}
              fontFamily={'Inter'}
              fontWeight={300}
              marginTop={'10px'}
              dangerouslySetInnerHTML={advise.content}
            ></Box>
          </Box>
        </Box>
      </Box>
    )
}
