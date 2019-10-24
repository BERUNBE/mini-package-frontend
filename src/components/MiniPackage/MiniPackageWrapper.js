import React, {Component} from 'react';
import MiniPackages from "./MiniPackages";
import "./MiniPackage.css"

export default class MiniPackageWrapper extends Component {

  componentDidMount() {
    this.props.refreshMiniPackages();
  }

  addDummyDataWrapper = () => {
    this.props.addDummyData(Math.random() * 100000000);
  }

  render() {
    return (
      <div className="todo-wrapper">
        <button onClick={this.addDummyDataWrapper}>populate with dummy data</button>
          <MiniPackages minipackages={this.props.minipackages}/>
      </div>
    )
  }
}
