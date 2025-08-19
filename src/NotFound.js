import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => (
  <div style={{ textAlign: 'center', marginTop: '5rem' }}>
    <h1>404 - Page Not Found</h1>
    <p>Oops! The page you’re looking for doesn’t exist.</p>
    <br />
      
    <Link to="/" style={{ color: '#2563eb', textDecoration: 'none' }}>
      ← Go back Home
    </Link>
  </div>
)

export default NotFound

