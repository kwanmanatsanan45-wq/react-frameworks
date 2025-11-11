import React from 'react'

const Header = () => {
  return (
    <>
    <header className='bg-fuchsia-300 text-black shadow-lg'>
        <div className='comtainer mx-auto px-4 py-6'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='text-3xl font-bold'>My website</h1>
                    <p className='text-blue-950 text-sm mt-1'>Sawatdee kaaa</p>
                </div>
                <nav>
                    <ul className='flex space x-6'>
                        <li><a href="#home" className='hover:text-gray-800'>Home</a></li>
                        <li><a href="#about" className='hover:text-gray-800'>About</a></li>
                        <li><a href="#contact" className='hover:text-gray-800'>Contact</a></li>
                    </ul>
                </nav>
            </div>

        </div>

    </header>
    </>
  )
}

export default Header