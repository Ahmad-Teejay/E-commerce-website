import React from 'react'
import { useNavigate } from 'react-router-dom'

function Notfound() {
    const navigate = useNavigate()
  return (
    <div>
        <h1>4O4 | Page Not Found</h1>
        <button onClick={() => navigate('/')}>Go to Home</button>
    </div>
  )
}

export default Notfound