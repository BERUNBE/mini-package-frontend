import React, { Component } from 'react';

export default class MiniPackageItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { minipackage } = this.props;
    return (
      <div className="todo-item">
        {minipackage.packageNumber} {minipackage.receiver} {minipackage.phone} {minipackage.status} {minipackage.bookingTime}
      </div>
    )
  }
}
