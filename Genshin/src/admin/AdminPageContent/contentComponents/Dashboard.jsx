import { Container, Grid, Paper, Typography } from '@mui/material'
import Chart from './Chart'
import Deposits from './Deposits'
import { AllOrders } from './Dangers'

export const Dashboard = () => {
  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 1 }}>
        <Typography variant='h4' gutterBottom>
          Статистика тем
        </Typography>
        {/* <Grid container spacing={3}>
          <Grid item xs={12} md={8} lg={9}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              }}
            >
              <Chart />
            </Paper>
          </Grid>
          <Grid item xs={12} md={4} lg={3}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                height: 240
              }}
            >
              <Deposits />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <AllOrders />
            </Paper>
          </Grid>
        </Grid> */}
      </Container>
    </div>
  )
}
