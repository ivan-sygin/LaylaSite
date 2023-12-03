import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material'
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined'
import StoreOutlinedIcon from '@mui/icons-material/StoreOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined'
import { useNavigate } from 'react-router-dom'

export const AdminSideMenu = () => {
  const navigate = useNavigate()

  return (
    <div className='AdminSideMenu'>
      <nav aria-label='main mailbox folders'>
        <List sx={{ bgcolor: 'background.paper' }}>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/admin-panel/')}>
              <ListItemIcon>
                <DashboardOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Dashboard' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/admin-panel/inventory')}>
              <ListItemIcon>
                <StoreOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Inventory' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/admin-panel/orders')}>
              <ListItemIcon>
                <ShoppingCartOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Orders' />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/admin-panel/customers')}>
              <ListItemIcon>
                <PersonOutlineOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary='Customers' />
            </ListItemButton>
          </ListItem>
        </List>
      </nav>
    </div>
  )
}
