import React from "react";
import { Link } from "react-router-dom";
const BookCard = ({ item, BookEdit, removeBook }) => {
  return (
    <div>
      <div className='border w-[270px] bg-white h-[420px] rounded-[20px] p-[15px] hover:scale-[1.1] transition-[0.5s] '>
        <img src={item.image} alt="img" className='w-[100%] h-[50%] rounded-[20px]  ' />
        <h6 className='text-[20px] pt-[10px] max-w-[120px]'>Name: {item.name}</h6>
        <h6 className='text-[18px] py-[5px]'>Price: ${item.price}</h6>
        <Link to={`/single__book/${item.id}`} className=' text-[#fff]'><button className='bg-[#21589b] mx-auto rounded-[10px]   py-[8px] w-[100%]'>More</button></Link>
        <div className='flex gap-[8px] mt-[15px]'>
          <button onClick={() => BookEdit(item)} className='bg-[#21589b] mt-[5px] mx-auto rounded-[10px] text-[#fff] py-[8px] w-[50%]'>edit</button>
          <button onClick={() => removeBook(item.id)} className='bg-[#ff2525] mt-[5px] mx-auto rounded-[10px] text-[#fff] py-[8px] w-[50%]'>delete</button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
