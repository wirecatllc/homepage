import React from "react"
import Head from '@components/Head'
import Navbar from '@components/Navbar/index.js'

export default function Layout({ children }) {
  return (
    <>
    <Head/>
    <Navbar/>
    <div className="bx--grid bx--grid--full-width">
       { children }
    </div>
    </>
  )
}