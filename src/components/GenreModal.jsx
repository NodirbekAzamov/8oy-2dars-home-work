import React, { useState } from "react";
import { Modal, ModalBody } from "reactstrap";
import useGenreStore from "../store/Genre/GenreStore";

const GenreModal = ({ open, toggle, editJanr, required }) => {
  const { postGenre, updateGenre, getGenre } = useGenreStore();
  const addJanr = async (e) => {
    e.preventDefault();
    let payload = {
      name: e.target[0].value ? e.target[0].value : editJanr.name,
    };
    if (editJanr !== "") {
      await updateGenre({ ...payload, id: editJanr.id })
      getGenre()
      toggle()
    } else {
      await postGenre({ ...payload })
      getGenre()
      toggle()
    }
  };
  return (
    <div>
      <Modal isOpen={open} toggle={toggle}>
        <ModalBody>
          <div className="w-[100%] flex flex-col items-center">
            <h1 className="text-[28px] text-center my-[20px]">
              {editJanr ? "Edit Genre" : "Add Genre"}
            </h1>
            <form onSubmit={addJanr}>
              <input type="text" placeholder='name' required={required} defaultValue={editJanr.name} className='w-[100%] border py-[8px] px-[10px] rounded-[8px] my-1' />
              <button type='submit' className='px-[15px] py-[8px] rounded-[10px] bg-[#4882e7]'>save</button>
            </form>
          </div>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default GenreModal;
