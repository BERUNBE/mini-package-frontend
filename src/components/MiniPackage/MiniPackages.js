import React, { Component } from 'react'
import MiniPackageItem from "./MiniPackageItem";

export default class MiniPackages extends Component {

  render() {
    const {minipackages} = this.props;
    return (
      <div className="package-list">
        {minipackages.map((minipackage, i) =>
          <li key={i}>
           <MiniPackageItem
             minipackage={minipackage}/>
          </li>)
        }
      </div>
    )
  }
}
