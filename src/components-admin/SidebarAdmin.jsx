import React from 'react'
import { Link } from 'react-router-dom';

export default function SidebarAdmin(props) {
  return (
    <div className='fixed top-0 left-0 h-screen text-secondary p-10 shadow-2xl'>
        <img src="logo.png" alt="" className='w-40'/>

        <Link to='/homeadmin' className='flex flex-col items-center my-20'>
            <svg
                viewBox="0 0 512 512"
                fill="currentColor"
                height="2.5em"
                width="2.5em"
                className='text-secondary'
                {...props}
                >
                <path d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208 208-93.31 208-208S370.69 48 256 48zm2 96a72 72 0 11-72 72 72 72 0 0172-72zm-2 288a175.55 175.55 0 01-129.18-56.6C135.66 329.62 215.06 320 256 320s120.34 9.62 129.18 55.39A175.52 175.52 0 01256 432z" />
            </svg>
            <h1 className='font-bold pt-2'>Admin</h1>
        </Link>

        <ul>
            {/* button tambah berita */}
            <li className="mb-4 duration-300 ease-out hover:text-cyan-500">
                <Link to="/addnews" className="flex items-center">
                    <svg
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        height="1.2em"
                        width="1.2em"
                        {...props}
                    >
                        <path d="M20 3H4c-1.11 0-2 .89-2 2v14c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2M5 7h5v6H5V7m14 10H5v-2h14v2m0-4h-7v-2h7v2m0-4h-7V7h7v2z" />
                    </svg>
                    <span className="ml-2">Tambah Berita</span>
                </Link>
            </li>

            {/* button logout */}
            <li>
                <Link to='/'>
                    <button 
                        className="flex justify-start gap-2 duration-300 ease-out hover:text-red-500"
                    >
                        <svg
                            viewBox="0 0 512 512"
                            fill="currentColor"
                            height="1.2em"
                            width="1.2em"
                        >
                            <path d="M336 376V272H191a16 16 0 010-32h145V136a56.06 56.06 0 00-56-56H88a56.06 56.06 0 00-56 56v240a56.06 56.06 0 0056 56h192a56.06 56.06 0 0056-56zM425.37 272l-52.68 52.69a16 16 0 0022.62 22.62l80-80a16 16 0 000-22.62l-80-80a16 16 0 00-22.62 22.62L425.37 240H336v32z" />
                        </svg>
                        Log Out
                    </button>
                </Link>
            </li>   
        </ul>        
    </div>
  )
}
