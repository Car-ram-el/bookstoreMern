import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { BiUserCircle } from "react-icons/bi";
import {PiBookOpenTextLight} from 'react-icons/pi';

const BookModal = ({book,onClose}) => {
  return (
    // onClick={onClose}: click in that div or element that setShowModal(false) according to BookSingleCard. Helpful for the feature that clicking anywhere except the modal or on cross will close it.
    <div className=' fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center' onClick={onClose}>
      <div onClick={(event)=>event.stopPropagation()} className=' w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative'>
        <AiOutlineClose className=' absolute top-6 right-6 text-3xl text-red-600 cursor-pointer' onClick={onClose}/>
        <h2 className=' w-fit px-4 py-1 bg-red-300 rounded-lg'>{book.publishYear}</h2>
        <h4 className=' my-2 text-gray-500'>{book._id}</h4>
        <div className=' flex justify-start items-center gap-x-2'>
          <PiBookOpenTextLight className=' text-red-300 text-2xl'/>
          <h2 className=' my-1'>{book.title}</h2>
        </div>
        <div className=' flex justify-start items-center gap-x-2'>
          <BiUserCircle className=' text-red-300 text-2xl'/>
          <h2 className=' my-1'>{book.author}</h2>
        </div>
        <p className=' mt-4'>Description</p>
        <p className='my-2'>I need to move, <i>sicced</i> on me;<br/>
          Dogs on the loose, soiled knees;<br/>
          My brain's been bruised, I can't see<br/>
          the signs tell me to turn back, can't hesitate to learn<br/>
          I'm 'bout to be another <b>Bandit</b>, nothing to lose;<br/>
          Swimming through sand, the desert's candid, the <i>dunes will rule</i><br/>
          and I can't say they'll find my body, the buzzards brew<br/>
          forming a halo 'bove my slaughter, I'm wilting without water.</p>
      </div>
    </div>
  )
}

export default BookModal