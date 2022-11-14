import React, { Component } from "react";





export default class Cart extends Component {



   renderItem = (arr) => {
    let {xoaSanPham} = this.props;
    let arrItem = arr.map((item,index)=>{
        return  <tr key={index} style = {{
            textAlign:'center'
        }}>
            <td>{item.id}</td>
            <td><img src={item.image} alt='...' style={{
                width:'100px',
                height:'100px',
                objectFit:'contain'
            }}/></td>
            <td>{item.name}</td>
            <td>{item.shortDescription}</td>
            <td>{item.soLuong}</td>
            <td>
                <button className="btn btn-danger" onClick = {()=>{xoaSanPham(item)}}>
               <i className="fa fa-trash"></i> 

                </button>
                <button className="btn btn-success mx-2">
               <i className="fa fa-edit"></i> 

                </button>
            </td>


        </tr>
      
    })
    return arrItem
   }
   
 
  render() {
    let {arrSanPham} = this.props

    return (
      <div className="container mt-5">
        <h2>Thông tin giỏ hàng</h2>
        <table className="table" style={{
            verticalAlign: 'middle'
        }}>
          <thead style = {{
                textAlign:'center'
            }}>
            <tr>
              <th>ID</th>
              <th>Hình ảnh</th>
              <th>Tên sản phẩm</th>
              <th>Mô tả chi tiết</th>
              <th>Số lượng</th>
              <th></th>
            </tr>
          </thead>
          <tbody >
           {this.renderItem(arrSanPham)}
         
          </tbody>
        </table>
      </div>
    );
  }
}
