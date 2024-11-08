import React, { useState } from 'react';

export default function Dashboard() {
  const [profilePicture, setProfilePicture] = useState('/images/home/profpict.jpg'); // default img

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePicture(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  let userInfo = [
    { label: 'Name', value: 'John Doe' },
    { label: 'Email', value: 'johndoe000@gmail.com' },
    { label: 'Password', value: 'admin1234' },
  ];

  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='font-bold text-secondary text-3xl pt-24 pb-20'>Akun Saya</h1>

        <div className="relative">
          <img
            src={profilePicture}
            alt="Profile"
            className='w-20 h-20 rounded-full object-cover mb-4 cursor-pointer'
            onClick={() => document.getElementById('fileInput').click()}
          />
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            id="fileInput"
            className="hidden"
          />
        </div>
      </div>

      {/* Informasi user */}
      <div className='flex flex-col justify-start mx-32 pt-10 pb-60 gap-3'>
        <p className='text-sm text-tertiary pb-9'>
          <i>Klik foto profil anda untuk mengubah foto profil</i>
        </p>
        {userInfo.map((info, index) => (
          <div key={index}>
            <p className='text-tertiary text-sm pt-4'>{info.label} <br />
              <span className='text-secondary text-base'>{info.value}</span>
            </p>
            <div className='w-full h-px rounded-md bg-tertiary opacity-50'></div>
          </div>
        ))}
      </div>
    </>
  );
}
