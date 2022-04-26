import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { useForm } from 'react-hook-form';
export default function UpdateModal({ isOpen, setIsOpen, id }) {
    function closeModal() {
        setIsOpen(false)
    }
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
  
    const onUpdateHandler = (data) => {
        setIsOpen(false);
        const uri = `${process.env.REACT_APP_uri}/blog/${id}`
        fetch(uri, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => console.log('result', result))
    };

    return (
        isOpen ? (
            <>
                <Transition appear show={isOpen} as={Fragment}>
                    <Dialog
                        as="div"
                        className="fixed inset-0 z-10 overflow-y-auto"
                        onClose={closeModal}
                    >
                        <div className="min-h-screen px-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0"
                                enterTo="opacity-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100"
                                leaveTo="opacity-0"
                            >
                                <Dialog.Overlay className="fixed inset-0" />
                            </Transition.Child>

                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <div className="flex items-center min-h-screen px-4 py-8">
                                    <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                                        <div className="flex items-center justify-between p-4 border-b">
                                            <h4 className="text-lg font-medium text-gray-800">
                                                Update Article
                                            </h4>
                                            <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>
                                        <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                                            <form className="" onSubmit={handleSubmit(onUpdateHandler)}>
                                                <input type="hidden" name="remember" defaultValue="true" />
                                                <div className=" flex flex-col gap-5">
                                                    <div>
                                                        <label htmlFor="title" className="sr-only">
                                                            Title
                                                        </label>
                                                        <input
                                                            id="title"
                                                            name="title"
                                                            type="text"
                                                            autoComplete="title"
                                                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                            placeholder="Blog Title"
                                                            {...register("title", { required: true, maxLength: 100 })}
                                                        />
                                                    </div>

                                                    <div>
                                                        <label htmlFor="blog" className="sr-only">
                                                            Blog
                                                        </label>
                                                        <textarea
                                                            id="blog"
                                                            name="blog"
                                                            type="textarea"              
                                                            className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
                                                            placeholder="Write your blog..."
                                                            {...register("description", { required: true, maxLength: 20000 })}
                                                        />
                                                    </div>



                                                </div>
                                                <div className="flex items-center justify-end gap-3 p-4 mt-5 border-t">
                                                    <button type='submit' className="px-6 py-2 text-white bg-emerald-400 rounded-md outline-none"
                                                    
                                                    >
                                                        Update
                                                    </button>
                                                    <button className="px-6 py-2 text-gray-800 border rounded-md outline-none"
                                                        onClick={() => setIsOpen(false)}
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>

                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </Transition.Child>
                        </div>
                    </Dialog>
                </Transition></>
        ) : ''
    )
}
