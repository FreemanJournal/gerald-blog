import React, { useCallback, useRef } from 'react';
export default function BlogForm() {

  // Form Data
  const blogTitle = useRef();
  const blogAbout = useRef();
  const blogBody = useRef();
  const blogTags = useRef();


  const onSubmitHandler = useCallback((e) => {
    e.preventDefault();
    const formData = {
      title: blogTitle.current?.value,
      about: blogAbout.current?.value,
      body: blogBody.current?.value,
      tags: blogTags.current?.value,

    }
    
  }, []);






  return (
    <div className=' mx-auto'>
    
      <form className="" onSubmit={onSubmitHandler}>
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
              ref={blogTitle}
            />
          </div>
          <div>
            <label htmlFor="about" className="sr-only">
              About
            </label>
            <input
              id="about"
              name="about"
              type="text"
              autoComplete="about"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="What is you writing about ?"
              ref={blogAbout}
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

              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Write your blog..."
              ref={blogBody}
            />
          </div>
          <div>
            <label htmlFor="tags" className="sr-only">
              Tags
            </label>
            <input
              id="tags"
              name="tags"
              type="text"
              autoComplete="tags"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 focus:z-10 sm:text-sm"
              placeholder="Enter Tags"
              ref={blogTags}
            />
          </div>


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
