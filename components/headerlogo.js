import React from 'react'
import Image from 'next/image'
const HeaderLogo = () => {
  return (
    <div>
        <Image src="/logo.png" alt="gogoclothing" width={180} height={140}></Image>
    </div>
  )
}

export default HeaderLogo