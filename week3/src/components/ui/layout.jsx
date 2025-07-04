import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout({ children, navbarLinks = [], footerLinks = [] }) {
  return (
    <>
      <Navbar links={navbarLinks} />
      <main className="min-h-[80vh] px-4 py-6">{children}</main>
      <Footer links={footerLinks} />
    </>
  )
}
