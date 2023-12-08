import { Box } from '@mui/material'
import { HeaderMainPage } from '../main_page/components/header'
import { LectionComments1, TextLection1 } from './fishtext'
import { flexbox } from '@mui/system'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate, useParams } from 'react-router'
import { useEffect, useState } from 'react'
import { ServerAdress2 } from '../../components/ApiVavilin'
import { TOKEN } from '../../components/TokenController'

const LectionHeader = ({ title }) => {
  return (
    <Box fontSize={48} textAlign={'center'} marginTop={'20px'}>
      {title}
    </Box>
  )
}

const LectionBody = ({ text }) => {
  const inner = { __html: text }
  return (
    <Box
      fontSize={20}
      fontFamily={'Inter'}
      marginTop={'10px'}
      dangerouslySetInnerHTML={inner}
    ></Box>
  )
}

const CommentBlock = ({ comment }) => {
  return (
    <Box
      minHeight={50}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'start'}
      //border={1}
      padding={2}
      borderRadius={'10px'}
      borderColor={'var(--banner-color1)'}
    >
      <Box
        maxHeight={100}
        maxWidth={100}
        borderRadius={'50%'}
        overflow={'hidden'}
        marginRight={3}
      >
        <img src={comment?.owner_photo} alt='' width={'100%'} height={'auto'} />
      </Box>
      <Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'left'}
          alignItems={'center'}
          gap={'20px'}
        >
          <Box fontFamily={'Inter'}>{comment?.owner_name}</Box>
          <Box fontFamily={'Inter'} fontSize={'10px'}>
            {comment?.time}
          </Box>
        </Box>
        <Box>{comment.message}</Box>
      </Box>
    </Box>
  )
}

const LectionComments = ({ comments }) => {
  return (
    <>
      <Box paddingBottom={'40px'}>
        <Box fontSize={45} marginTop={3}>
          Комментарии
        </Box>
        <Box
          marginTop={3}
          minHeight={200}
          display={'flex'}
          flexDirection={'column'}
          gap={'5px'}
        >
          {comments?.map((_) => {
            return <CommentBlock comment={_} />
          })}
        </Box>
      </Box>
    </>
  )
}

const handleClick = (id, fetchData) => {
  const json = {
    topic_id: +id,
    message: document.getElementById('textarea_comment').value
  }
  fetch(ServerAdress2 + '/topics/sendComment', {
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + TOKEN,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(json)
  })
    .then((response) => response.json())
    .then((json) => {
      fetchData(id)
      console.log(json)
    })
}

const WriteCommentSection = ({ id, fetchData }) => {
  let navigate = useNavigate()
  return (
    <Box paddingBottom={'50px'} display={'flex'} flexDirection={'row'}>
      <Box
        component={'textarea'}
        type='text'
        id='textarea_comment'
        padding={2}
        borderRadius={'20px 0 0 20px'}
        minHeight={'100px'}
        flex={85}
        border={0}
      ></Box>
      <Box
        component={'button'}
        type='submit'
        flex={15}
        minHeight={'100px'}
        borderRadius={'0 20px 20px 0'}
        border={0}
        sx={{ cursor: 'pointer' }}
        onClick={() => {
          handleClick(id, fetchData)

          //window.location.reload()
        }}
      >
        <FaArrowRight size={'40px'} />
      </Box>
    </Box>
  )
}

export const MaterialPage = () => {
  const { id_page } = useParams()
  const [data, setData] = useState()

  const fetchData = (id) => {
    fetch(ServerAdress2 + '/topics/getById?id=' + id)
      .then((response) => response.json())
      .then((json) => {
        setData(json.topic[0])
      })
  }

  useEffect(() => {
    fetchData(id_page)
  }, [])
  return (
    <Box width={'90%'} margin={'auto'}>
      <HeaderMainPage />
      <LectionHeader title={data?.title} />
      <LectionBody text={data?.text} />
      <LectionComments comments={data?.comments} />
      <WriteCommentSection id={id_page} fetchData={fetchData} />
    </Box>
  )
}
