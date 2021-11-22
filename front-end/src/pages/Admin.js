import React from 'react'
import Header from '../components/Header'
import FormAdmin from '../components/FormAdmin'

function Admin() {
  return (
    <>
    <Header
    pageName="GERENCIAR USUARIOS"
    yourOrder=""
    userName= 'Trybeer Admin'
    />
    <FormAdmin />
    </>
  )
}

export default Admin
