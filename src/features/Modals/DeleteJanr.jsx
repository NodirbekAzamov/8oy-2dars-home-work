import React from 'react'
import { Modal, ModalBody, ModalFooter } from 'reactstrap'
import AxiosClent from '../../plugins/AxiosClent'
import img from "../../assets/delete_img.jpg"
export default function DeleteJanr({ open, toggle, item }) {
    const deleteJanr = () => {
        AxiosClent.delete(`/category/delete/${item}`).then((res) => {
            if (res.status === 200) {
                window.location.reload()
            }
        })
    }
    return (
        <Modal isOpen={open} toggle={toggle}>
            <ModalBody>
                <div className='flex justify-center items-center flex-col text-center'>
                    <img src={img} alt="img" />
                    <h5 className='text-center my-[5px]'>Are you sure you want to delete it?</h5>
                </div>
            </ModalBody>
            <ModalFooter>
                <button onClick={toggle} className='bg-[#3ca1ff] mx-[5px] text-[#fff] rounded-[10px] py-[8px] px-[15px]'>No</button>
                <button onClick={deleteJanr} className='bg-[#ff2d2d]  text-[#fff]  rounded-[10px] py-[8px] px-[15px]'>Yes</button>
            </ModalFooter>
        </Modal>
    )
}
