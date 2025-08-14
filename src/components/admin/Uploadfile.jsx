import React, { useState } from 'react'
import { toast } from 'react-toastify'
import Resize from 'react-image-file-resizer'
import { removeFiles, uploadFiles } from '../../api/product'
import useEcomStore from '../../store/econ-store'
import { Loader } from 'lucide-react';


const Uploadfile = ({form,setForm}) => {
  const token = useEcomStore((state)=>state.token)
  const [isLoading,setIsLoading] = useState(false)
  const handleOnChange = (e)=>{
    setIsLoading(true)
    const files = e.target.files
    if(files){
      setIsLoading(true)
      let allFiles = form.images
      for(let i = 0;i<files.length;i++){

        console.log(files[i])
        const file = files[i]
        if(!file.type.startsWith('image/')){
          toast.error(`File ${file.name} no image`)
          continue
        }
        Resize.imageFileResizer(
          files[i],720,720,"JPEG",100,0,(data)=>{
            uploadFiles(token,data)
            .then((res)=>{
              console.log(res)
              allFiles.push(res.data)
              setForm({
                ...form,
                images:allFiles
              })
              setIsLoading(false)
              toast.success('upload image success')
            })
            .catch((err)=>{
              console.log(err)
              setIsLoading(false)
            })
          },
          "base64"
        )
      }
    }
  }
  const handleDelete = (public_id)=>{
    const images = form.images
    // console.log(public_id)
    removeFiles(token,public_id).then((res)=>{
    const filterImages = images.filter((item,index)=>{
      return item.public_id !== public_id
    })
    setForm({
      ...form,
      images: filterImages
    })
    toast.error(res.data)}).catch((err)=>{console.log(err)})
  }
  return (
    <div className='my-4'>
      <div className='flex mx-4 gap-4 my-4'>
            {
              isLoading &&  <Loader className='animate-spin w-16 h-16'/>
            }
          
          {
            form.images.map((item,index)=>
              <div className='relative' key={index}>
                  <img className='w-24 h-24 hover:scale-105' src={item.url} alt="" />
                  <span onClick={()=>handleDelete(item.public_id)} className='absolute top-0 right-0 bg-red-500 p-1 rounded-md'>x</span>
              </div>
            )
          }
      </div>
      <div>
      <input onChange={handleOnChange} type="file" name='images' multiple/>
      </div>
    </div>
  )
}

export default Uploadfile