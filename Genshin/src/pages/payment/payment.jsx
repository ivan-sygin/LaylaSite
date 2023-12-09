import { Box } from '@mui/material'
import { HeaderMainPage } from '../main_page/components/header'

import * as React from 'react'

import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

const DropDown = ({ age, handleChange }) => {
  return (
    <Box width={'300px'}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Тариф</InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={age}
          label='Age'
          onChange={handleChange}
        >
          <MenuItem value={1}>до 50</MenuItem>
          <MenuItem value={2.5}>до 150</MenuItem>
          <MenuItem value={7}>до 500</MenuItem>
          <MenuItem value={12.5}>до 1000</MenuItem>
          <MenuItem value={17.5}>безлимит</MenuItem>
        </Select>
      </FormControl>
    </Box>
  )
}
export const PaymentPage = () => {
  const [age, setAge] = React.useState(1)

  const handleChange = (event) => {
    setAge(event.target.value)
  }
  return (
    <>
      <Box maxWidth={1200} margin={'auto'}>
        <HeaderMainPage />
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          flexDirection={'column'}
          gap={'20px'}
          marginTop={5}
          paddingY={10}
          borderRadius={5}
          bgcolor={'white'}
        >
          <Box fontFamily={'inter'} fontSize={48}>
            Кайфовая оплата
          </Box>
          <Box paddingTop={3}>
            <DropDown age={age} handleChange={handleChange} />
          </Box>
          <acquiring-widget
            api-key='mOeX6TjHMJprD6TMSGDdh7X6JDej8EK5'
            amount={+age * 100000}
            button-text={'Цена ' + +age * 100000 + ' р.'}
            lang='ru'
            description='Оплата подписки для сайта'
            view='button'
            source='Покупка подписки'
            currency='RUB'
          ></acquiring-widget>
        </Box>
      </Box>
    </>
  )
}
