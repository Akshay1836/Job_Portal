import React from 'react'
import Header from "../Header/index"
function CommonLayout({children}) {
  return (
    <div className="mx-auto max-w-7xl p-6 lg:px-8">
        {/* Hedaer section */}
        <Header/>
        <main>{children}</main>
    </div>
  )
}

export default CommonLayout