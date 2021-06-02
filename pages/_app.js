import '../styles/main.scss'
import Layout from '../components/Layout'
import {ThemeProvider} from '@material-ui/styles'
import theme from '../components/ui/theme'
function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
