import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex-center wrapper flex-between flex flex-col gap-4 p-5 text-center sm:flex-row">
        <Link href="/" className="w-36 flex items-center">
          <Image
            src="/assets/images/logo1.png" width={30} height={20}
            alt="Evently logo"
          />
          <h1 className='font-bold text-2xl lg:pl-3 pl-2'>Deadlines</h1>
        </Link>

        <p>2024 Deadlines. All Rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer