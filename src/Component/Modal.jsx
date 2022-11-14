import React, { Component } from "react";

export default class Modal extends Component {

  render() {
    let {thongTin} = this.props;

    return (
      <>
        <div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex={-1}
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog" style={{
                
            }}>
              <div className="modal-content" style={{
                width: '900px',
                transform: 'translateX(-20%)'
              }}>
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="exampleModalLabel">
                    Thông tin sản phẩm
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="modal-body">
                    <div className="row">
                        <div className="col-5 px-3">
                            <img className="w-100" src={thongTin.image} alt="..."/>
                        </div>
                        <div className="col-7 info">
                            <h4>Tên sản phẩm: <span>{thongTin.name}</span></h4>
                            <h4>Giá sản phẩm: <span>{thongTin.price} $</span></h4>
                            <h4>Mô tả chi tiết: <span>{thongTin.description}</span></h4>
                            <h4>Số lượng: <span>{thongTin.quantity}</span></h4>

                        </div>
                    </div>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}
