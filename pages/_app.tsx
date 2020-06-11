import { AppProps } from 'next/app'
import Router from "next/router";
import withGA from "next-ga";
import '../styles.css'

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default withGA("UA-169222209-1", Router)(MyApp);

