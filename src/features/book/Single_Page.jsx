import React, { useEffect, useState } from 'react'
import AxiosClent from '../../plugins/AxiosClent'
import Menu from '../../SideBar/Menu'
import { Link } from 'react-router-dom'

export default function Single_Page() {
    const [singleBook, setSingleBook] = useState("")
    let url = window.location.href.split('/')[4]
    useEffect(() => {
        AxiosClent.get(`/book/${url}`).then((res) => {
            setSingleBook(res?.data)
        })
    }, [])
    return (
        <div className='bg-[#bfc6c4] w-[100%] h-[100vh] flex flex-col justify-center items-center'>
            <div>
                <div className='mb-[5px]'>
                    <Link to="/books"><button className='bg-[#2fe43b] px-[20px] py-[5px] rounded-[10px] text-[#fff]'>books</button></Link>
                </div>
                <div className='flex gap-[20px] justify-center items-center p-[15px] bg-[#fff] w-[700px] h-[400px]'>
                    <div className='w-[50%] h-[100%]'>
                        <img src={singleBook.image} alt="img" className='w-[100%] h-[100%] object-cover' />
                    </div>
                    <div className='w-[50%] h-[100%] flex justify-center  flex-col'>

                        <h5>Name: <span className=' text-orange-700'>{singleBook?.name}</span></h5>
                        <h5>Full Name: <span className=' text-orange-700'> {singleBook?.author?.full_name}</span></h5>
                        <h5>Price: <span className=' text-orange-700'>{singleBook?.price}</span></h5>
                        <h5> Code: <span className=' text-orange-700'>{singleBook?.code}</span></h5>
                        <h5>Janr: <span className=' text-orange-700'> {singleBook?.janr?.name}</span></h5>
                        <h5>Description:</h5>
                        <hr />
                        <p>{singleBook.description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
