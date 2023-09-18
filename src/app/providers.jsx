'use client'

// NEXTUI AND NEXTAUTH PROVIDERS
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from "next-auth/react"

//REDUX PROVIDER
import { Provider } from 'react-redux';
import { store } from './GlobalRedux/store'


export function Providers({children}) {
  return (
    <Provider store={store}>
      <SessionProvider>
        <NextUIProvider>
          {children}
        </NextUIProvider>
      </SessionProvider>
    </Provider>
  )
}