import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import Footer from '../components/Footer'
import NavBar from '../components/NavBar'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  return < >
  <Head>
        <title>Tailwindly</title>
        <meta name="description" content="Tailwindly is a powerful frontend library of tailwind components enhanced by vanilla js. It helps you build interfaces with advanced interactions and animations." />
        <link rel="icon" type="image/png" sizes="512x512" href="/logo/android-chrome-512x512.png" />
    <link rel="icon" type="image/png" sizes="192x192" href="/logo/android-chrome-192x192.png" />
    <link rel="apple-touch-icon" sizes="180x180" href="/logo/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/logo/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/logo/favicon-16x16.png" />
    <link rel="shortcut icon" href="/logo/favicon.ico" type="image/x-icon" />
    <link rel="manifest" href="/logo/site.webmanifest" />
      </Head>
  <ThemeProvider attribute="class">
    
  <NavBar/>
  < Component {...pageProps} /> 
  <Footer/>
  </ThemeProvider>
  </>
}

    export default MyApp