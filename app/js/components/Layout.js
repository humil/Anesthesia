import React from "react";

export default class Layout extends React.Component {
  name = "Tim";
  render() {
    return (
      <div>
        <button class="button">Primary Action</button>
      <p>{this.name} is een baas</p>
      </div>
    );
  }
}
