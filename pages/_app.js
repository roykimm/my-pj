import { Provider } from 'next-auth/client';
import '../styles/globals.css';
import '../styles/ol.css';
import dynamic from "next/dynamic";

const Map1 = dynamic(() => import('../context/map'), {ssr : false});

function MyApp({ Component, pageProps }) {

  console.log(pageProps.session)
  return (
    <Provider session={pageProps.session}>
      <Map1>
        <Component {...pageProps} />
      </Map1>
    </Provider>
  )
}

export default MyApp
