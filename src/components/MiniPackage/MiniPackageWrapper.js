import React, {Component} from 'react';
import MiniPackages from "./MiniPackages";
import "./MiniPackage.css"

export default class MiniPackageWrapper extends Component {

  componentDidMount() {
    this.props.refreshMiniPackages();
  }

  render() {
    return (
      <div className="todo-wrapper">
        <MiniPackages minipackages={this.props.minipackages}/>
      </div>
    )
  }
}
