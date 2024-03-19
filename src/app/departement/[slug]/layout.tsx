import NavBar from '@/components/Departement/NavBar'
import { DEPARTEMENTS } from '@/utils/const'
import React from 'react'

function Layout({children,params}: any) {

  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-6"> {DEPARTEMENTS[params.slug]}  </h1>
        <NavBar slug={params.slug}/>
        {children}
    </div>
  )
}

export default Layout