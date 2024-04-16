import AddButton from '@/components/Buttons/AddButton'
import DataTable from '@/components/Tables/DataTable'
import React from 'react'

function Users() {
  return (
    <div className='w-full h-full  px-5 py-5 border border-black'>
          <AddButton resource='مستخدم' />
          <DataTable/>
    </div>
  )
}

export default Users