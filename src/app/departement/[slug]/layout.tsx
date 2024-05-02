import NavBar from '@/components/Departement/NavBar'
import { DEPARTEMENTS } from '@/utils/const'
import React from 'react'

function Layout({children,params}: any) {
const param: 'informatics' | 'maths' | 'physics' | 'chimics' = params.slug
  const departement = DEPARTEMENTS[param]
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-6"> {departement}  </h1>
        <NavBar slug={params.slug}/>
        {children}
    </div>
  )
}

export default Layout