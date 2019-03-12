import React, { Component } from "react";

export default class BackButton extends Component {
  static contextTypes = {
    router: () => true
  };

  render() {
    return <button onClick={this.context.router.history.goBack}>Back</button>;
  }
}
