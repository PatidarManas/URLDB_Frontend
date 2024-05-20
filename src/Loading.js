import React from 'react'

const Loading = () => {
  const URL = "https://urldb-backend.vercel.app";
  return (
    <div class="bg-gray-200 w-full min-h-screen flex flex-col justify-center items-center">
  <div class="flex flex-col min-h-screen w-full items-center justify-center bg-gray-200">
    <div class="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 animate-spin">
      <div class="h-9 w-9 rounded-full bg-gray-200"></div>
    </div>
  <div className='flex flex-col text-center gap-1 mt-2'>
    <h1 className='text-2xl font-semibold'>Please Wait Loading...</h1>
    <h1 className='text-xl font-normal'>In case of server scale down it might take upto 1-2 Minutes to scale up and start working</h1>
    <h1 className='text-xl font-normal'>Still facing same issue Please visit <a target='_blank' href={URL} className='text-blue-600'>Backend</a> and come back here! </h1>
    <h1 className='text-xl font-light'>Thank You!!</h1>
  </div>
  </div>
</div>
  )
}

export default Loading