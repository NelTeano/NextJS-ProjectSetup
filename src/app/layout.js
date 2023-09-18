import '@/app/globals.css'
import { Inter } from 'next/font/google'

// PROVIDERS.JSX PROVIDE MANY DIFFERENT LIBRARIES
import { Providers } from "./providers";



const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (

      <html lang="en">
        <body className={inter.className}>
          
            <Providers>
              {children}
            </Providers>
          
        </body>
      </html>
    
  )
}
