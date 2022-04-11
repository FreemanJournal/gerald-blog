import React from 'react'

export default function Tags() {
  return (
    <div className="popular_tag bg-slate-200 p-4 rounded-lg my-16">
    <h1 className='font-semibold text-slate-500 text-2xl border-b-2 border-slate-300 py-3'>Popular Tags</h1>
    <div className="flex  gap-4 mt-4">
    <p className="px-3 w-fit py-1 bg-slate-500  rounded-full flex items-center text-white border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">welcome</p>
    <p className="px-3 py-1  w-fit bg-slate-500 rounded-full flex items-center text-white border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">introduction</p>
    <p className="px-3 py-1  w-fit bg-slate-500  rounded-full flex items-center text-white border border-slate-300  text-sm  cursor-pointer active:bg-gray-300 transition duration-300 ease">Hello</p>
    </div>
  </div>
  )
}
