import { Container, Grid, Paper, Typography } from '@mui/material'
import Chart from './Chart'
import Deposits from './Deposits'
import AllOrders from './Orders'

export const Dashboard = () => {
  return (
    <div>
      <Container maxWidth='lg' sx={{ mt: 1 }}>
        <Typography variant='h4' gutterBottom>
          Dashboard
        </Typography>
        <Grid container spacing={3}>
          {/* Chart */}
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
          {/* Recent Deposits */}
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
          {/* Recent Orders */}
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <AllOrders />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}
