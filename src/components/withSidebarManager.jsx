import React, { Component } from 'react';

function withSidebarManager(BaseComponent) {
  return class EnhancedComponent extends Component {
    state = { showSidebar: false };

    openSidebar = () => {
      this.setState({ showSidebar: true });
    };

    render() {
      const { showSidebar } = this.state;
      return (
        <BaseComponent
          showSidebar={showSidebar}
          openSidebar={this.openSidebar}
          {...this.props}
        />
      );
    }
  };
}

export default withSidebarManager;
