import React from 'react'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'

const RootLayout = () => {
  return (
    <>
        <header>
            <Header />
        </header>
        <main>
            <Outlet />
        </main>
    </>
  )
}

export default RootLayout