import { useEffect } from 'react';
import { useRouter } from 'next/router';
import * as gtag from '../lib/gtag'
import Analytics from '../components/Analytics';

import type { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '../styles/global';
import '../styles/globals.css';
import { theme } from '../styles/theme';
import Script from 'next/script';



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
        <Script 
          strategy='lazyOnload'
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
        />
        
        <Script strategy='lazyOnload'>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', ${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS});
          `}
        </Script>
        
        <GlobalStyle />
        <Component {...pageProps} />
        {/* <Analytics /> */}
      </ThemeProvider>
    </>
  )
}

export default MyApp