import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <>
        <h5>&copy;RalphabaraConcepts{new Date().getFullYear()}</h5>
      </>
    );
  }
}
