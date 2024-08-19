import { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Script src="https://aframe.io/releases/1.6.0/aframe.min.js" strategy="beforeInteractive" />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
