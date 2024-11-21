import React from 'react';
import { Link } from 'react-router-dom';
import { useTeacher } from '../information/TeacherContext';

export default function SidebarTeacher(props) {
  const teacherInfo = useTeacher();
  
  return (
    <>
      {/* Sidebar */}
      <div
        className="fixed top-0 left-0 h-screen text-secondary p-10 shadow-2xl"
      >

        <img src="logo.png" alt="" className='w-40'/>

        <Link to="/teacherprofile">
          <div className='flex flex-col items-center my-20'>
            <img 
              src="/images/home/profpict.jpg" 
              alt="" 
              className='w-16 rounded-full object-cover'
            />
            <h1 className='font-bold mt-10'>{teacherInfo.name}</h1>
            <p className='text-xs'>{teacherInfo.dom}</p>
            <p className='text-xs'>{teacherInfo.country}</p>
          </div>
        </Link>

        <ul>
          <li className="mb-4 duration-300 ease-out hover:text-cyan-500">
            <Link to="/salestats" className="flex items-center">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="1.2em"
              width="1.2em"
              {...props}
            >
              <path d="M6 13H2c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h4c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1zm16-4h-4c-.6 0-1 .4-1 1v12c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V10c0-.6-.4-1-1-1zm-8-8h-4c-.6 0-1 .4-1 1v20c0 .6.4 1 1 1h4c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z" />
            </svg>
              <span className="ml-2">Statistik Penjualan</span>
            </Link>
          </li>

          <li className="mb-4 duration-300 ease-out hover:text-cyan-500">
            <Link to="/managecourse" className="flex items-center">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.2em"
              width="1.2em"
              {...props}
            >
              <path d="M64 480h384c35.3 0 64-28.7 64-64V160c0-35.3-28.7-64-64-64H298.5c-17 0-33.3-6.7-45.3-18.7l-26.5-26.6c-12-12-28.3-18.7-45.3-18.7H64C28.7 32 0 60.7 0 96v320c0 35.3 28.7 64 64 64z" />
            </svg>
              <span className="ml-2">Kelola Kursus</span>
            </Link>
          </li>

          <li className="duration-300 ease-out hover:text-cyan-500">
            <Link to="/uploadcourse" className="flex items-center">
            <svg
              viewBox="0 0 512 512"
              fill="currentColor"
              height="1.2em"
              width="1.2em"
              {...props}
            >
              <path d="M512 416c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V96c0-35.3 28.7-64 64-64h117.5c17 0 33.3 6.7 45.3 18.7l26.5 26.5c12 12 28.3 18.7 45.3 18.7H448c35.3 0 64 28.7 64 64V416zm-280-40c0 13.3 10.7 24 24 24s24-10.7 24-24v-64h64c13.3 0 24-10.7 24-24s-10.7-24-24-24h-64v-64c0-13.3-10.7-24-24-24s-24 10.7-24 24v64h-64c-13.3 0-24 10.7-24 24s10.7 24 24 24h64v64z" />
            </svg>
              <span className="ml-2">Unggah Kursus</span>
            </Link>
          </li>
        </ul>
        <Link to='/'>
          <button 
            className="flex justify-start gap-2 duration-300 ease-out hover:text-red-500 mt-40"
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
      </div>
    </>
  );
}