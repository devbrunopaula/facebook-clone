import NavBar from './NavBar/NavBar'
import {makeStyles} from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import Testbar from './NavBar/Testbar'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  main: {
    margin: 20,
    // border: 'solid red',
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}))

const Layout = ({children}) => {
  const classes = useStyles()
  return (
    <Grid className={classes.root}>
      {/* <NavBar /> */}
      <Testbar />
      <Grid item className={classes.main}>
        {children}
      </Grid>
    </Grid>
  )
}

export default Layout
