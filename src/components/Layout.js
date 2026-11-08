import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Drawer from '@material-ui/core/Drawer'
import Typography from '@material-ui/core/Typography'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Avatar from '@material-ui/core/Avatar'
import SubjectOutlined from '@material-ui/icons/SubjectOutlined'
import AddCircleOutlineOutlined from '@material-ui/icons/AddCircleOutlineOutlined'
import { useHistory, useLocation } from 'react-router-dom'

const drawerWidth = 240

const useStyles = makeStyles((theme) => ({
  page: {
    background: '#f9f9f9',
    width: '100%',
    minHeight: '100vh',
    padding: theme.spacing(3)
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth,
    borderRight: '1px solid #e0e0e0'
  },
  root: {
    display: 'flex'
  },
  active: {
    background: '#f4f4f4'
  },
  title: {
    padding: theme.spacing(2)
  },
  appbar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    backgroundColor: '#ffffff',
    color: '#333333',
    boxShadow: 'none',
    borderBottom: '1px solid #e0e0e0'
  },
  toolbar: theme.mixins.toolbar,
  date: {
    flexGrow: 1
  },
  avatar: {
    marginLeft: theme.spacing(2)
  }
}))

export default function Layout({ children }) {
  const classes = useStyles()
  const history = useHistory()
  const location = useLocation()

  const menuItems = [
    {
      text: 'My Notes',
      icon: <SubjectOutlined color="secondary" />,
      path: '/'
    },
    {
      text: 'Create Note',
      icon: <AddCircleOutlineOutlined color="secondary" />,
      path: '/create'
    }
  ]

  return (
    <div className={classes.root}>
      {/* Top App Bar */}
      <AppBar className={classes.appbar} elevation={0}>
        <Toolbar>
          <Typography className={classes.date}>
            Today is the 19th February 2021
          </Typography>
          <Typography>Mario</Typography>
          <Avatar src="/mario-av.png" className={classes.avatar}>
            M
          </Avatar>
        </Toolbar>
      </AppBar>

      {/* Side Drawer */}
      <Drawer
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
      >
        <div>
          <Typography variant="h5" className={classes.title}>
            Ninja Notes
          </Typography>
        </div>

        {/* Links / List items */}
        <List>
          {menuItems.map((item) => (
            <ListItem
              button
              key={item.text}
              onClick={() => history.push(item.path)}
              className={location.pathname === item.path ? classes.active : null}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>

      {/* Main Content Area */}
      <div className={classes.page}>
        <div className={classes.toolbar}></div>
        {children}
      </div>
    </div>
  )
}
