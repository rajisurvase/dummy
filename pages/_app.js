import LayoutComponent from '../component/layout/LayoutComponent'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <LayoutComponent>
       <Component {...pageProps} />
     </LayoutComponent>
  )
}

export default MyApp
