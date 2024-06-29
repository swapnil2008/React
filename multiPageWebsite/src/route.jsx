import React from 'react'
import Header from './components/Header/header'
import Footer from './components/Footer/footer'
import { Outlet } from 'react-router-dom'


export function Route() {
    

    return (
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
