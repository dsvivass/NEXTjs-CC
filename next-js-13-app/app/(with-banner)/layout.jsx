import React from 'react'

function WithBannerLayout({children}) {
  return (
    <div>
        <marquee>By DVS</marquee>
        {children}
    </div>
  )
}

export default WithBannerLayout