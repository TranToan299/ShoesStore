import React, { Component } from "react";
import ProductList from "./ProductList";
import Modal from "./Modal";
import { NavLink } from "react-router-dom";
import Cart from "./Cart";
export default class extends Component {

   state = {
    proDuctItem:  {
      id: 12,
      name: "Nike Air Max 270 React",
      alias: "nike-air-max-270-react",
      price: 750,
      description:
        "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      shortDescription: "Paul George is the rare high-percentage shooter",
      quantity: 445,
      image: "http://svcy3.myclass.vn/images/nike-air-max-270-react.png",
    },
    arrItem: [
  
  ],
  }
  thongTinSanPham = (item) => {
    this.setState({
      proDuctItem: item
    })
  }

  themSanPham = (item) => {
    item = {...item,soLuong:1}
      let newArrItem = this.state.arrItem;
    let spGH = newArrItem.find((sp)=>{
      return sp.id === item.id
     })
     if (spGH) {
      spGH.soLuong = spGH.soLuong +1
     }
      else {
        newArrItem.push(item)
      }

      
      this.setState({
        arrItem: newArrItem
      })
     
  }
  xoaSanPham = (item) => {
    let newArrItem = this.state.arrItem.filter((sp) => {
      return sp.id !== item.id
    })
    this.setState({
      arrItem: newArrItem,
    })

  }
  

  render() {
    return (
      <>
      
            <ProductList thongTin = {this.thongTinSanPham} themSanPham = {this.themSanPham} />
            <Modal thongTin = {this.state.proDuctItem}/>
            <Cart arrSanPham = {this.state.arrItem} xoaSanPham={this.xoaSanPham}/>
      </>
    );
  }
}
