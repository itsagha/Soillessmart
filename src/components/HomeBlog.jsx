import React from 'react'

export default function HomeBlog() {
    const boxes = [
        { id:1, title: 'Apa sih Pengertian Hidroponik?', date:'3 Februari 2024', imgUrl:'/images/home/blog1.jpg' },
        { id:2, title: 'Bagaimana Sejarah Hidroponik?', date:'3 Februari 2024',imgUrl:'/images/home/blog2.jpg' },
        { id:3, title: 'Mengapa PH Sangat Penting dalam Hidroponik?', date:'3 Februari 2024',imgUrl:'/images/home/blog3.png' },
    ];
    return (
        <div className="flex flex-wrap justify-between pb-40 mx-32 ">
            {boxes.map((box) => (
                <div
                    key={box.id} 
                    className="rounded-xl shadow-2xl w-[30rem]"
                    >
                    <img 
                        src={box.imgUrl} 
                        className="rounded-t-lg object-cover w-[30rem] h-60" 
                    />
                        <div className="p-4">
                            <p className="text-xs text-tertiary pb-2">{box.date}</p>
                            <h3 className="text-secondary text-sm">{box.title}</h3>
                        </div>
                </div>
            ))}
        </div>
    )
}
