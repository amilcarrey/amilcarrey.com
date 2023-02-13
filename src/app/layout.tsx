import { Montserrat } from '@next/font/google'
import Cocogoose from '@next/font/local'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const montserrat =  Montserrat({
   subsets: ["latin"],
   variable: "--montserrat-font",
})


const cocogoogse =  Cocogoose({
   src: '../../public/fonts/cocogoose.ttf',
   variable: "--cocogoogse-font",
})

export default function RootLayout({
   children,
}: {
   children: React.ReactNode
}) {
   return (
      <html lang="en" className={`${montserrat.variable} ${cocogoogse.variable}`}>
         {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
         <head />

         <body className='bg-dark'>{children}</body>
         <Analytics />
      </html>
   )
}
