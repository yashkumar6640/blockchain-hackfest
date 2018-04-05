import React from "react";
import "./saleAgreement.css"

import GoodsPacking from "./../packing_of_goods/packingOfGoods.js";
var $ = require("jquery");

export default class SaleAgreement extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      vendorName: "",
      noOfSensor: "",
      costOfSensor: "",
      deliveryDate: "",
      deliveryType: "",
      exporterBank: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    console.log("Inside SA request", this.props.getCurrentDate());
  }
  handleSubmit() {
    this.props.updateStep(3);
    var dateTime = this.props.getCurrentDate();
    console.log(dateTime);
    var str = new String();

    // str =
    //   '{"eventTime":' +
    //   '"' +
    //   dateTime +
    //   '"' +
    //   ',"uuid":"uuid-t2","source":"TX, USA","destination":"MUM,IND"}';
    str =
      '{"eventTime":' +
      '"' +
      dateTime +
      '"' +
      ',"uuid":' +
      '"' +
      this.props.uuid +
      '"' +
      ',"step":' +
      '"' +
      this.state.step +
      '"' +
      ',"status":' +
      '"' +
      this.state.status +
      '"' +
      ',"vendorname":' +
      '"' +
      this.state.vendorName +
      '"' +
      ',"noofsensor":' +
      '"' +
      this.state.noOfSensor +
      '"' +
      ',"costofsensor":' +
      '"' +
      this.state.costOfSensor +
      '"' +
      ',"deliverydate":' +
      '"' +
      this.state.deliveryDate +
      '"' +
      ',"deliverytype":' +
      '"' +
      this.state.deliveryType +
      '"' +
      ',"exporterbank":' +
      '"' +
      this.state.exporterBank +
      '"' +
      "}";
    console.log(str);
    //ajax call goes here if any
    var data = {
      peers: ["localhost:7051"],
      fcn: "invoke",
      args: [
        "SALEAGREEMENT",
        // JSON.stringify(str)
        str
        // '{"eventTime":"2017-03-25T17:10:16Z","uuid":"uuid-t2","source":"TX, USA","destination":"MUM,IND"}'
      ]
    };
    var settings = {
      async: true,
      crossDomain: true,
      url:
        "http://ustr-erl2-2358.na.uis.unisys.com:4000/channels/tradechannel/chaincodes/uni-trade-finance",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkppbTEiLCJvcmdOYW1lIjoidHJhZGUtb3JnIiwiaWF0IjoxNTIyODI2Nzk2fQ.SRJfxnbTU10TXiFzBj1r7sfmHCPRHDPUtV4pTeBXE_Q"
      },
      processData: false,
      data: JSON.stringify(data)
    };

    $.ajax(settings).done(function(response) {
      console.log(response);
    });
    this.setState({
      formSubmitted: true
    });
  }
  render() {
    switch (this.state.formSubmitted) {
      case false:
        return (
          <div className="container-sale-agreement">
          <div className="outer-layer">

              <div className="form">
                  <form>
                      <div>
                          <span className="para-wrap">
                              <p classname="para">UUID</p>
                          </span>
                          <div>
                              <input type="text" name="uuid" placeholder="UUID"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">STEP</p>
                          </span>
                          <div>
                              <input type="text" name="step" placeholder="STEP"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">STATUS</p>
                          </span>
                          <div>
                              <input type="text" name="status" placeholder="STATUS"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">DATE</p>
                          </span>
                          <div>
                              <input type="text" name="date" placeholder="DATE FIELD"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">VENDOR'S NAME</p>
                          </span>
                          <div>
                              <input type="text" name="vendorname" placeholder="ORGANISATIONAL DETAILS"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">NUMBER OF SENSORS</p>
                          </span>
                          <div>
                              <input type="text" name="nos" placeholder="NUMBER OF SENSOR"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">COST OF SENSORS</p>
                          </span>
                          <div>
                              <input type="text" name="cos" placeholder="COST OF SENSORS"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">DELIVERY DATE</p>
                          </span>
                          <div>
                              <input type="text" name="deliverydate" placeholder=">DELIVERY DATE"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">DELIVERY TYPE</p>
                          </span>
                          <div>
                              <input type="text" name="deliverytype" placeholder="DELIVERY TYPE"></input>
                          </div>
                      </div>
                      <div>
                      <span className="para-wrap">
                              <p classname="para">EXPORTER BANK</p>
                          </span>
                          <div>
                              <input type="text" name="exporterbank" placeholder="EXPORTER BANK"></input>
                          </div>
                      </div>
                      <div>
                          <input className="submit-button" type="submit" value="Submit" onClick={this.handleSubmit}/>
                      </div>
                  </form>

              </div>
          </div>
          </div>
        );

      case true:
        return (
          <GoodsPacking
            getCurrentDate={this.props.getCurrentDate}
            updateStep={this.props.updateStep}
          />
        );
    }
  }
}
