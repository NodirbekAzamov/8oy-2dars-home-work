import React from 'react'
import { Modal, ModalBody } from 'reactstrap'
import AxiosClent from '../../plugins/AxiosClent';
import { Notification } from '../../Notification/Notification';

export default function ModalJanr({ open, toggle, item, setItem, required }) {
    const addJanr = (e) => {
        e.preventDefault();
        let name = e.target[0].value;
        if (item !== "") {
            AxiosClent.patch(`/category/update/${item.id}`, {
                name: name,
            }).then((res) => {
                if (res.status === 200) {
                    window.location.reload();
                }
            }).catch((err) => {
                Notification({ text: err.response?.data?.message[0], type: "error" })
            })
        } else {
            AxiosClent.post("/category/create", {
                name: name,
            }).then((res) => {
                if (res.status === 201) {
                    window.location.reload();
                    toggle()
                }
            }).catch((err) => {
                Notification({ text: err.response?.data?.message[0], type: "error" })
            })
        }
        setItem("")
    }

    return (
        <div>
            <Modal isOpen={open} toggle={toggle}>
                <ModalBody>
                    <form onSubmit={addJanr}>
                        <input type="text" placeholder='name' required={required} defaultValue={item.name} className='w-[100%] border py-[8px] px-[10px] rounded-[8px] my-1' />
                        <button type='submit' className='px-[15px] py-[8px] rounded-[10px] bg-[#4882e7]'>save</button>
                    </form>
                </ModalBody>
            </Modal>
        </div>
    )
}
