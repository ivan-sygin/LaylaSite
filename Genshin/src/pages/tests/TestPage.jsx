import { Box } from '@mui/material'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ServerAdress2 } from '../../components/ApiVavilin'

export const TestPage = () => {
  const { id_test } = useParams()

  const [testFromApi, setTestFromApi] = useState()
  const [currStage, setCurrStage] = useState(0)
  const [countStages, setCountStages] = useState(0)

  const fetchTestData = () => {
    fetch(ServerAdress2 + `/tests/getById?test_id=${id_test}`)
      .then((response) => response.json())
      .then((json) => {
        setTestFromApi(json.test)
      })
  }
  useEffect(() => {
    fetchTestData()
  }, [])

  return (
    <Box width={'90%'} margin={'auto'} marginTop={10}>
      <div className='white_divs'>
        <HeadOfComponent radius={20} height={40} />
        <Title name={testFromApi?.title} />
        <TestForm test={testFromApi} id_question={currStage} />
        <BottomCircles
          lenght={Object.keys(testFromApi?.questions).length}
          current={currStage}
          sCS={setCurrStage}
        />
        <EndOfComponent radius={20} height={40} />
      </div>
    </Box>
  )
}

const FormTask = ({ title, text_task }) => {
  return (
    <Box>
      <Box fontSize={24} fontWeight={700}>
        {title}
      </Box>
      <Box paddingLeft={'20px'} paddingTop={'5px'}>
        {text_task}
      </Box>
      <Box
        onClick={(e) => {
          console.log('da')
          e.currentTarget.innerHTML = 'gay'
        }}
      >
        {text_task}
      </Box>
    </Box>
  )
}

const TestForm = ({ test, id_question }) => {
  if (test)
    return (
      <Box
        display={'flex'}
        paddingX={'20px'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'left'}
        bgcolor={'white'}
      >
        <FormTask
          title={test.questions[id_question].text_question}
          text_task={test.description}
        />
      </Box>
    )
}

const HeadOfComponent = ({ radius, height }) => {
  return (
    <Box
      borderRadius={`${radius}px ${radius}px 0 0`}
      height={height + 'px'}
      bgcolor={'white'}
    />
  )
}
const EndOfComponent = ({ radius, height }) => {
  return (
    <Box
      borderRadius={`0 0 ${radius}px ${radius}px`}
      height={height + 'px'}
      bgcolor={'white'}
    />
  )
}

const Title = ({ name }) => {
  if (name)
    return (
      <Box
        textAlign={'center'}
        fontFamily={'Inter'}
        fontWeight={700}
        fontSize={'40px'}
        bgcolor={'white'}
      >
        {name}
      </Box>
    )
}
const Circles = ({ count, selected, sCS }) => {
  return Array(count)
    .fill(0)
    .map((_, i) => {
      if (i == selected)
        return (
          <Box
            key={i}
            borderRadius={'50%'}
            bgcolor={'lightgreen'}
            height={10}
            width={10}
          ></Box>
        )

      return (
        <Box
          key={i}
          borderRadius={'50%'}
          bgcolor={'gray'}
          height={10}
          width={10}
          sx={{ cursor: 'pointer' }}
          onClick={() => {
            sCS(i)
          }}
        ></Box>
      )
    })
}
const BottomCircles = ({ lenght, current, sCS }) => {
  if (lenght)
    return (
      <Box
        height={20}
        display={'flex'}
        flexDirection={'row'}
        justifyContent={'center'}
        alignItems={'center'}
        bgcolor={'white'}
      >
        <Box
          display={'flex'}
          width={'100%'}
          flexDirection={'row'}
          justifyContent={'center'}
          alignItems={'center'}
          gap={'20px'}
        >
          <Circles count={lenght} selected={current} sCS={sCS} />
        </Box>
      </Box>
    )
}
