import React from 'react'
import './AdminNavBar.css'
import { Link } from 'react-router-dom'

const AdminNavBar = () => {
  return (
    <Link to={'/admin/home'}>
    <div className='admin-nav-bar'>Eco-Mart Admin</div>
    </Link>
    
  )
}

export default AdminNavBar