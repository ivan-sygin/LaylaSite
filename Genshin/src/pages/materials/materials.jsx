import { Box } from '@mui/material'
import { HeaderMainPage } from '../main_page/components/header'
import { LectionComments1, TextLection1 } from './fishtext'
import { flexbox } from '@mui/system'
import { FaArrowRight } from 'react-icons/fa'
import { useNavigate } from 'react-router'

const LectionHeader = ({ title }) => {
  return (
    <Box fontSize={48} textAlign={'center'} marginTop={'20px'}>
      {title}
    </Box>
  )
}

const LectionBody = ({ text }) => {
  return (
    <Box
      fontSize={20}
      fontFamily={'Inter'}
      marginTop={'10px'}
      dangerouslySetInnerHTML={text}
    ></Box>
  )
}

const CommentBlock = ({ comment }) => {
  return (
    <Box
      minHeight={100}
      display={'flex'}
      flexDirection={'row'}
      alignItems={'start'}
      border={1}
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
        <img src={comment.owner_photo} alt='' width={'100%'} height={'auto'} />
      </Box>
      <Box>
        <Box
          display={'flex'}
          flexDirection={'row'}
          justifyContent={'left'}
          alignItems={'center'}
          gap={'20px'}
        >
          <Box fontFamily={'Inter'}>{comment.owner_name}</Box>
          <Box fontFamily={'Inter'} fontSize={'10px'}>
            {comment.time}
          </Box>
        </Box>
        <Box>{comment.comment_text}</Box>
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
          gap={'20px'}
        >
          {comments.map((_) => {
            return <CommentBlock comment={_} />
          })}
        </Box>
      </Box>
    </>
  )
}

const WriteCommentSection = () => {
  let navigate = useNavigate()
  return (
    <Box paddingBottom={'50px'} display={'flex'} flexDirection={'row'}>
      <Box
        component={'textarea'}
        type='text'
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
          window.location.reload()
        }}
      >
        <FaArrowRight size={'40px'} />
      </Box>
    </Box>
  )
}

export const MaterialPage = () => {
  return (
    <Box width={'90%'} margin={'auto'}>
      <HeaderMainPage />
      <LectionHeader title={'Лекция 1'} />
      <LectionBody text={TextLection1} />
      <LectionComments comments={LectionComments1.comments} />
      <WriteCommentSection />
    </Box>
  )
}
