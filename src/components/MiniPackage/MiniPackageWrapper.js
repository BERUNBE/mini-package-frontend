import React, {Component} from 'react';

export default class MiniPackageWrapper extends Component {

  componentDidMount() {
    this.props.refreshTodos();
  }

  render() {
    return (
      <div className="todo-wrapper">
        {this.props.minipackages}
      </div>
    )
  }
}
