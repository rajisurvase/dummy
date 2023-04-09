import LayoutComponent from '../component/layout/LayoutComponent'
import '../styles/globals.css'
import { SessionProvider, useSession } from "next-auth/react";

function MyApp({ Component, pageProps }) {

  return (
    <SessionProvider session={pageProps.session}>
       <LayoutComponent>
       <Component {...pageProps} />
      </LayoutComponent>
     </SessionProvider>
  )
}

export default MyApp
