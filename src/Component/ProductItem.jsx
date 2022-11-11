import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let {item} = this.props;
    console.log(item)
    return (
      <div className="card text-start" style= {{
        height:'520px'
      }}>
        <img className="card-img-top" src={item.image} alt="Title" style = {{
          width:'100%',
          padding:'5px'
        }} />
        <div className="card-body">
          <h4 className="card-title name" style={{
            height:'58px',
            verticalAlign:'middle',
          }}>{item.name}</h4>
          <p className="card-text price" style={{
            fontSize:'20px',
            fontWeight:'400'
          }}>{`${item.price} $`}</p>
          <button className="btn btn-dark">Add to cart </button>
        </div>
      </div>
    );
  }
}
