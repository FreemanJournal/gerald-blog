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
    const uri = `http://localhost:5000/blog/${id}`
    fetch(uri, {
      method: "DELETE"
    })
      .then(res => res.json())
      .then(() => {
        toast.info(`"${article?.title}" is deleted.`);
        setGlobalData(prev => prev?.filter(item => item._id !== id))
      })
  }
  return (
    <>
      <ToastContainer />
      <div className="flex gap-2 mt-10">
        {<UpdateModal isOpen={isOpen} setIsOpen={setIsOpen} />}
        <button type="button" onClick={() => setIsOpen(prev => !prev)} className="py-1 px-6  bg-transparent text-emerald-400 font-medium text-sm leading-tight uppercase rounded border border-emerald-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center">
          Edit
        </button>
        <button type="button" onClick={deleteArticleHandler} className="py-1 px-6  bg-transparent text-pink-400 font-medium text-sm leading-tight uppercase rounded border border-pink-400 focus:outline-none focus:ring-0 transition duration-150 ease-in-out flex items-center justify-center" >
          Delete
        </button>
      </div>

      {/* <div className="fixed inset-0 z-10 overflow-y-auto">
        <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setState(false)}></div>
        <div className="flex items-center min-h-screen px-4 py-8">
          <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-between p-4 border-b">
              <h4 className="text-lg font-medium text-gray-800">
                Terms and agreements
              </h4>
              <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                onClick={() => setState(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
              <p>
                Commodo eget a et dignissim dignissim morbi vitae, mi. Mi aliquam sit ultrices enim cursus. Leo sapien, pretium duis est eu volutpat interdum eu non. Odio eget nullam elit laoreet. Libero at felis nam at orci venenatis rutrum nunc. Etiam mattis ornare pellentesque iaculis enim.
              </p>
              <p>
                Felis eu non in aliquam egestas placerat. Eget maecenas ornare venenatis lacus nunc, sit arcu. Nam pharetra faucibus eget facilisis pulvinar eu sapien turpis at. Nec aliquam aliquam blandit eu ipsum.
              </p>
            </div>
            <div className="flex items-center gap-3 p-4 mt-5 border-t">
              <button className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => setState(false)}
              >
                Accept
              </button>
              <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                onClick={() => setState(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div> */}

    </>
  )
}
