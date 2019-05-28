import React from 'react'

import './Sidebar.css'

const Sidebar = ({children, direction = 'left'}) => {
  return (
    <div className={`sidebar ${direction}`}>
      {children}
    </div>
  )
}

export default Sidebar
