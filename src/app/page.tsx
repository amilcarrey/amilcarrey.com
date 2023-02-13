import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
const socials = [
   {
      name: 'Github',
      link: 'https://github.com/amilcarrey',
      icon: '/icons/gh.svg',
   },
   {
      name: 'Linkedin',
      link: 'https://www.linkedin.com/in/amilcarrey/',
      icon: '/icons/in.svg',
   },
   {
      name: 'Twitter',
      link: 'https://twitter.com/amilcarrey',
      icon: '/icons/tw.svg',
   },
   {
      name: 'Mail',
      link: 'mailto:amilcarrey.ar@gmail.com',
      icon: '/icons/mail.svg',
   },
]

export default function Home() {
   return (
      <main className="h-screen w-screen">
         <div className="flex h-full flex-col items-center justify-center gap-8">
            {/* a rounded full countainer using tailwind with Image component inside with /me.jpeg  */}
            <div className="h-64 w-64 overflow-hidden rounded-full border border-white">
               <Image
                  src="/me.jpeg"
                  alt="Picture of the author"
                  width={256}
                  height={256}
               />
            </div>
            {/* image component (next13) calling /logos/white/logo.svg  */}
            <Image
               src="/logos/white/logo.svg"
               alt="Logo of the author"
               width={256}
               height={256}
            />
            
         </div>
      </main>
   )
}
