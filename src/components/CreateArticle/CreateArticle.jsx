import axios from 'axios';
import moment from 'moment';
import React, { useRef, useState } from 'react';
import { Editor } from "react-draft-wysiwyg";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../utilities/firebase.init';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
export default function CreateArticle() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();

  const [user, loading, error] = useAuthState(auth);
  const [editorState, setEditorState] = useState();

  let date = moment(new Date()).format('MMMM DD,YYYY')

  const myEditorRef = useRef("");



  const onSubmitHandler = (data) => {
    console.log('data', data)
    console.log('editorRef', myEditorRef.current);
    // const newArticle = {
    //   ...data,
    //   img: user?.photoURL || "/images/profile.jpg",
    //   userId: user?.uid,
    //   blogWriter: user?.displayName,
    //   date: date,
    //   commentCount: 0,
    //   likeCount: 0
    // }

    // const uri = `${process.env.REACT_APP_uri}/blog`
    // axios.post(uri, newArticle)
    //   .then(() => {
    //     reset();
    //     toast.success("New article is posted!!!")
    //   })
  };

  const onEditorChangeHandler = (value) =>{
    console.log('value',value);
  }






  return (
    <div className=' mx-auto'>
      <ToastContainer />
      <form className="" onSubmit={handleSubmit(onSubmitHandler)}>
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
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Blog Title"
              {...register("title", { required: true, maxLength: 100 })}
            />
          </div>



          <div className='rounded-md relative block w-full overflow-scroll h-96 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm'>
            <label htmlFor="blog" className="sr-only">
              Blog
            </label>
            <Editor
              // onChange={editorState}

              editorRef={myEditorRef}
              toolbarClassName="toolbarClassName"
              wrapperClassName="wrapperClassName"
              editorClassName="editorClassName"
             
              // wrapperStyle={<wrapperStyleObject>}
              // editorStyle={<editorStyleObject>}
              // toolbarStyle={<toolbarStyleObject>}
              // onEditorStateChange={setEditorState}
            // {...register("description", { required: true, maxLength: 20000 })}

            />;
          </div>
          {/* <div>
            <label htmlFor="blog" className="sr-only">
              Blog
            </label>
            <textarea
              id="blog"
              name="blog"
              type="textarea"
              required
              className="appearance-none rounded-md relative block w-full h-96 px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Write your blog..."
              {...register("description", { required: true, maxLength: 20000 })}
            />
          </div> */}
          {/* <div>
            <label htmlFor="tags" className="sr-only">
              Tags
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              autoComplete="tags"
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Enter Tags"
              {...register("tags", { required: false, maxLength: 20 })}
            />
          </div> */}


        </div>
        <div className='mt-10'>
          <button
            type="submit"
            className="w-32 group relative flex justify-center ml-auto py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-emerald-400 hover:bg-emerald-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Publish Blog
          </button>
        </div>
      </form>

    </div>
  )
}
