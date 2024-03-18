import NavBar from '@/components/Departement/NavBar'
import React from 'react'

function Layout({children}: any) {
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-6">قسم الاعلام الآلي</h1>
        <NavBar/>
        {children}
    </div>
  )
}

export default Layout