import React, { Component } from 'react';

export class SidebarRP extends Component {
  state = { showSidebar: false };

  toggleSidebar = () => {
    this.setState(state => ({
      showSidebar: !state.showSidebar
    }));
  };

  render() {
    const { children, direction = 'left', buttonText = 'Sidebar' } = this.props;
    const { showSidebar } = this.state;
    return (
      <div>
        <button onClick={this.toggleSidebar}>{`${
          showSidebar ? 'Close' : 'Open'
        } ${buttonText}`}</button>
        {showSidebar && (
          <div className={`sidebar ${direction}`}>{children}</div>
        )}
      </div>
    );
  }
}

export default SidebarRP;
