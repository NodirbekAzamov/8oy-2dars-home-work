import React, { useEffect, useState } from 'react'
import AxiosClent from '../../plugins/AxiosClent'
import { Link } from 'react-router-dom'

export default function Single_Author() {
  const [data, setData] = useState([])
  const [createdAt, setCreatedAt] = useState([])
  const [updatedAt, setUpdatedAt] = useState([])
  const [author, setAuthor] = useState("")
  let url = window.location.href.split('/')[4]
  useEffect(() => {
    AxiosClent.get(`/author/${url}`).then((res) => {
      setAuthor(res?.data)
      setData(res.data.birthdate.slice(0, 10))
      setCreatedAt(res.data.createdAt.slice(0, 10))
      setUpdatedAt(res.data.updatedAt.slice(0, 10))
    })
  }, [])
  return (
    <div className='bg-[#bfc6c4] w-[100%] h-[100vh] flex flex-col justify-center items-center'>
      <div>
        <div className='mb-[5px]'>
          <Link to="/books"><button className='bg-[#2fe43b] px-[20px] py-[5px] rounded-[10px] text-[#fff]'>books</button></Link>
        </div>
        <div style={{ boxShadow: '10px 14px 16px 15px rgba(255, 255, 255)' }} className='flex gap-[50px] p-[20px] bg-slate-700 justify-center items-center' >
          <div>
            <img src={author.image} alt="img" className='w-[350px] h-[350px] object-cover' />
          </div>
          <div className='flex flex-col gap-[15px]'>
            <h6 className='text-[#fff]'>Full Name: {author.full_name}</h6>
            <h6 className='text-[#fff]'>Country: <span className=' text-[blue] font-[700]'>{author.country}</span></h6>
            <h6 className='text-[#fff]'>Birthdate: <span className=' text-[blue] font-[700]'>{data}</span></h6>
            <h6 className='text-[#fff]'>CreatedAt: <span className=' text-[blue] font-[700]'>{createdAt}</span></h6>
            <h6 className='text-[#fff]'>UpdatedAt: <span className=' text-[blue] font-[700]'>{updatedAt}</span></h6>
          </div>
        </div>
      </div>
    </div>
  )
}
