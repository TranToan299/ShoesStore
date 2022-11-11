import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
export default class extends Component {
  render() {
    return (
      <>
      
            <ProductList />
            {/* <Modal /> */}
        
      </>
    );
  }
}
