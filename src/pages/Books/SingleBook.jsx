import React, { useEffect, useState } from "react";
import useBookStore from "../../store/Books/BookStore";

const SingleBook = () => {
  const id = window.location.href.split("/")[4];
  const { singleBook, getSingleBook } = useBookStore()
  useEffect(() => {
    getSingleBook(id)
  }, []);
  return (
    <div className='bg-[#bfc6c4] w-[100%] h-[100vh] flex flex-col justify-center items-center'>
      <div>
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
  );
};

export default SingleBook;
