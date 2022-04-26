import axios from 'axios';
import React, { useContext, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import swal from 'sweetalert';
import { GlobalContext } from '../../context/GlobalContext';
import UpdateModal from './UpdateModal';
export default function ManageBlog({ id }) {
  const { globalData, setGlobalData } = useContext(GlobalContext);
  let [isOpen, setIsOpen] = useState(false)
  const article = globalData?.find(item => item._id === id)

  const deleteArticleHandler = async () => {
    const value = await swal(`Do you want to DELETE "${article?.title}"?`, {
      buttons: true,
      dangerMode: true,
    })
    if (!value) return;
    const uri = `${process.env.REACT_APP_uri}/blog/${id}`
    axios.delete(uri)
      .then(() => {
        toast.info(`"${article?.title}" is deleted.`);
        setGlobalData(prev => prev?.filter(item => item._id !== id))
      })
  }
  return (
    <>
      <ToastContainer />
      <div className="flex gap-2 mt-10">
        {<UpdateModal isOpen={isOpen} setIsOpen={setIsOpen} id={id} />}
        <button type="button" onClick={() => setIsOpen(prev => !prev)} className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 hover:bg-emerald-400 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
          Edit
        </button>
        <button type="button" onClick={deleteArticleHandler} className="py-1 px-6  bg-transparent text-pink-400 font-medium text-sm leading-tight uppercase rounded border border-pink-400 hover:bg-pink-400 hover:text-white focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center" >
          Delete
        </button>
      </div>

    </>
  )
}
