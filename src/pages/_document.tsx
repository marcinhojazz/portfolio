import Document, { Html, Head, NextScript, Main } from 'next/document'
import { ServerStyleSheet } from 'styled-components'
import { Nav } from '../components/Nav'

import { GA_TRACKING_ID } from '../lib/gtag'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render() {
    return (
      <Html lang="pt" data-theme="dark">
        <Head>
          <meta />
          <link rel="icon" type="image/x-icon" href='https://raw.githubusercontent.com/marcinhojazz/portfolio/main/public/favicon.ico'/>

          <script 
            async 
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} 
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `
            }}
          />
        </Head>
        <body>
			    <Nav />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}