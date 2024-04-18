import React from 'react'
import { FileUploader } from 'react-drag-drop-files'

type FileType = "jpeg" | "pdf" | "png" | "JPEG" | "jpg" | "PDF" | "PNG" | "JPG"

interface FileUploaderProps {
    name: string
    fileTypes: FileType[]
}

const FileDragDropUploader:React.FC<FileUploaderProps> = ({ name, fileTypes}) => {
    return (
        <div className='w-full flex flex-col gap-3'>
            <h1> رفع الملف </h1>
            <div className='flex justify-center w-[100%]'>
                 <FileUploader name={name} types={fileTypes} classes="w-full"  />
            </div>
        </div>
  )
}

export default FileDragDropUploader