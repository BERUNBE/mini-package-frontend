import React, { Component } from 'react'

export default class MiniPackages extends Component {

  render() {
    const {minipackages} = this.props;
    return (
      <div className="package-list">
        <table>
          <tr>
            <th>Package No.</th>
            <th>Receiver</th> 
            <th>Phone</th>
            <th>Status</th>
            <th>Booking Time</th>
          </tr>
          {minipackages.map((minipackage, i) =>
          <tr key={i}>
            <td>{minipackage.packageNumber}</td>
            <td>{minipackage.receiver}</td>
            <td>{minipackage.phone}</td>
            <td>{minipackage.status}</td>
            <td>{minipackage.bookingTime}</td>
          </tr>)
        }
        </table>
      </div>
    )
  }
}
