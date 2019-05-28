import React, { Component } from 'react';
import Sidebar from './SidebarRP';
import withSidebarManager from './withSidebarManager';

export class Profile extends Component {
  render() {
    return (
      <div>
        <Sidebar direction="right" buttonText="PROFILE">
          <div>
            <h3>Profile</h3>
            <ul>
              <li>Name: User Name</li>
              <li>Email: User email</li>
              <li>Contact</li>
            </ul>
          </div>
        </Sidebar>
      </div>
    );
  }
}

export default withSidebarManager(Profile);
