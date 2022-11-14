import React, { Component } from "react";
export default class ProductItem extends Component {
  render() {

    let { item,xemChiTiet,themSanPham } = this.props;

    return (
      <div
        className="card text-start"
        style={{
          height: "520px",
        }}
      >
        <button
          type="button"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
          style = {{
            border:'none'
          }}
          onClick= {() => {xemChiTiet(item)}}
        >
          <img
            className="card-img-top"
            src={item.image}
            alt="Title"
            style={{
              width: "100%",
              padding: "5px",
            }}
          />
        </button>

        <div className="card-body">
          <h4
            className="card-title name"
            style={{
              height: "58px",
              verticalAlign: "middle",
            }}
          >
            {item.name}
          </h4>
          <p
            className="card-text price"
            style={{
              fontSize: "20px",
              fontWeight: "400",
            }}
          >{`${item.price} $`}</p>
          <button className="btn btn-dark" onClick={()=>{themSanPham(item)}}>Add to cart </button>
        </div>
      
      </div>
    );
  }
}
