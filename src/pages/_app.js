import localFont from 'next/font/local'

import '@/styles/global.scss'

const neutralFace = localFont({
  src: [
    {
      path: './fonts/NeutralFace-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/NeutralFace-Bold.woff2',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-neutralFace'
})

const helveticaNeue = localFont({
  src: [
    {
      path: './fonts/HelveticaNeue-Light.woff2',
      weight: '300',
      style: 'normal'
    },
    {
      path: './fonts/HelveticaNeue-Regular.woff2',
      weight: '400',
      style: 'normal'
    },
    {
      path: './fonts/HelveticaNeue-Medium.woff2',
      weight: '500',
      style: 'normal'
    }
  ],
  variable: '--font-helveticaNeue'
})

export default function App({Component, pageProps}) {
  return (
    <div className={`${neutralFace.variable} ${helveticaNeue.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
