import React from 'react';
import NewComments from './NewComments';
import UserComments from './UserComments';
export default function Comments() {


  return (
    <div className='mx-auto '>
      <NewComments/>
      <UserComments />
    </div >
  )
}
