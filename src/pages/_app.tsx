import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import '../styles/globals.css';
import { theme } from '../styles/theme';



function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = url => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routerChangeComplete', handleRouteChange)
    }
  }, [router.events])
    
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
        <Analytics />
      </ThemeProvider>
    </>
  )
}

export default MyApp