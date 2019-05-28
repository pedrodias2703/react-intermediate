import React, { Component } from 'react'
import Sidebar from './Sidebar'
import withSidebarManager from './withSidebarManager'

export class Menu extends Component {
  render() {
    const { showSidebar, openSidebar } = this.props
    return (
      <div>
        <button onClick={openSidebar}>OPEN MENU</button>
        {showSidebar && (
          <Sidebar>
            <div>
              <h3>Menu</h3>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
              </ul>
            </div>
          </Sidebar>
        )}
        
      </div>
    )
  }
}

export default withSidebarManager(Menu)
