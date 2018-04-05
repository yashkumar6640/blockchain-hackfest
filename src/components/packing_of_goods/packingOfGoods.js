// import React from "react";
// import "./packing.css";

// import CustomsUSA from "./../customs/customsUSA.js";
// // import BillOfExchange from './../bill_of_exchange/'
// import Exporter from "./../exporter/exporter.js";
// var $ = require("jquery");

// export default class GoodsPacking extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       formSubmitted: false,
//       step: 1
//     };
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.pageSubmit = this.pageSubmit.bind(this);
//     this.updateStep = this.updateStep.bind(this);
//   }

//   componentWillMount() {
//     console.log("Inside GP request", this.props.getCurrentDate());
//   }

//   updateStep(value) {
//     this.setState({
//       step: value
//     });
//   }

//   pageSubmit() {
//     alert("here");
//     this.setState({
//       formSubmitted: true
//     });
//   }

//   handleSubmit() {
//     this.props.updateStep(4);

//     this.setState({
//       formSubmitted: true
//     });
//   }
//   render() {
//     switch (this.state.formSubmitted) {
//       case false:
//         return (
//           <div className="container-packing">
//             <div className="col-sm-4">
//               <div className="col-sm-12 list-box">
//                 <div className="header"> </div>
//                 <div className="btn btn-block btn-default listButton">
//                   BILL OF LADING{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   PACKING LIST{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   CERTIFICATE OF ORIGIN{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   INSURANCE{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   TAX AND CUSTOM DETAILS{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   INVOICE{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   TRANSPORT DOCUMENTS{" "}
//                 </div>
//                 <div className="btn btn-block btn-default listButton">
//                   BILL OF EXCHANGE{" "}
//                 </div>
//                 <div className="footer"> </div>
//               </div>
//             </div>
//             <div className="col-sm-8 boxExport">
//               {/* <Exporter
//                 uuid={this.props.uuid}
//                 source={this.props.source}
//                 destination={this.props.destination}
//                 getCurrentDate={this.props.getCurrentDate}
//                 updateStep={this.props.updateStep}
//                 pageSubmit={this.pageSubmit}
//               /> */}
//               <div className={this.state.step === 1 ? "" : "hide"}>
//                 <BillOfLading updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 2 ? "" : "hide"}>
//                 <PackingList updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 3 ? "" : "hide"}>
//                 <CertificateOfOrigin updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 4 ? "" : "hide"}>
//                 <Insurance updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 5 ? "" : "hide"}>
//                 <TaxAndCustom updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 6 ? "" : "hide"}>
//                 <Invoice updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 7 ? "" : "hide"}>
//                 <TransportDocument updateStep={this.updateStep} />
//               </div>
//               <div className={this.state.step === 8 ? "" : "hide"}>
//                 <BillOfExchange pageSubmit={this.pageSubmit} />
//               </div>
//               {/* // {this.state.step === 1} ?{" "} */}
//               {/* // <BillOfLading incrementStep={this.incrementStep} /> : '' */}
//               {/* // {this.state.step === 2} ?{" "} */}
//               {/* // <PackingList */}

//               {/* //   incrementStep={this.incrementStep}
//               //   pageSubmit={this.pageSubmit}
//               // />: ''
//               // {this.state.step === 3} ?{" "}
//               // <CertificateOfOrigin incrementStep={this.incrementStep} />: ''
//               // {this.state.step === 4} ?{" "}
//               // <Insurance incrementStep={this.incrementStep} />
//               // {this.state.step === 5} ?{" "}
//               // <TaxAndCustom incrementStep={this.incrementStep} />
//               // {this.state.step === 6} ?{" "}
//               // <Invoice incrementStep={this.incrementStep} />
//               // {this.state.step === 7} ?{" "}
//               // <TransportDocument incrementStep={this.incrementStep} />
//               // {this.state.step === 8} ?{" "}
//               // <BillOfExchange incrementStep={this.incrementStep} /> */}
//             </div>
//           </div>
//         );

//       case true:
//         return (
//           <CustomsUSA
//             uuid={this.props.uuid}
//             source={this.props.source}
//             destination={this.props.destination}
//             getCurrentDate={this.props.getCurrentDate}
//             updateStep={this.props.updateStep}
//           />
//         );
//     }
//   }
// }

// export class BillOfLading extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(2);
//   }
//   render() {
//     return (
//       <div>
//         inside Bill of lading
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }
// export class PackingList extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(3);
//   }
//   render() {
//     return (
//       <div>
//         inside Packing List
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }

// export class CertificateOfOrigin extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(4);
//   }
//   render() {
//     return (
//       <div>
//         inside CertificateOfOrigin
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }

// export class Insurance extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(5);
//   }

//   render() {
//     return (
//       <div>
//         inside Insurance
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }

// export class TaxAndCustom extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(6);
//   }
//   render() {
//     return (
//       <div>
//         inside TaxAndCustom
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }

// export class Invoice extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(7);
//   }
//   render() {
//     return (
//       <div>
//         inside Invoice
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }

// export class TransportDocument extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.updateStep(8);
//   }
//   render() {
//     return (
//       <div>
//         inside TransportDocument
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }
// export class BillOfExchange extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.props.pageSubmit();
//   }
//   render() {
//     return (
//       <div>
//         inside BillOfExchange
//         <button onClick={this.handleClick}>Next</button>
//       </div>
//     );
//   }
// }







import React from "react";
import "./packing.css";

import CustomsUSA from "./../customs/customsUSA.js";
// import BillOfExchange from './../bill_of_exchange/'
import Exporter from "./../exporter/exporter.js";
var $ = require("jquery");

export default class GoodsPacking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false,
      step: 1
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.pageSubmit = this.pageSubmit.bind(this);
    this.updateStep = this.updateStep.bind(this);
  }

  componentWillMount() {
    console.log("Inside GP request", this.props.getCurrentDate());
  }

  updateStep(value) {
    this.setState({
      step: value
    });
  }

  pageSubmit() {
    alert("here");
    this.props.updateStep(4);

    this.setState({
      formSubmitted: true
    });
  }

  handleSubmit() {
    this.props.updateStep(4);

    this.setState({
      formSubmitted: true
    });
  }
  render() {
    switch (this.state.formSubmitted) {
      case false:
        return (
          <div className="container-packing">
            <div className="col-sm-4">
              <div className="col-sm-12 goodsPackingList">
                <div className="btn btn-block btn-default listButton">
                  Bill of Lading{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Packing List{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Certificate ofo Origin{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  InsuranceE{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Tax and Custom Details{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Invoice{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Transport Documents{" "}
                </div>
                <div className="btn btn-block btn-default listButton">
                  Bill Of Exchange{" "}
                </div>
              </div>
            </div>
            <div className="col-sm-8 boxExport" id="goodsPackingSmallBox">
              {/* <Exporter
                uuid={this.props.uuid}
                source={this.props.source}
                destination={this.props.destination}
                getCurrentDate={this.props.getCurrentDate}
                updateStep={this.props.updateStep}
                pageSubmit={this.pageSubmit}
              /> */}
              <div className={this.state.step === 1 ? "" : "hide"}>
                <BillOfLading updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 2 ? "" : "hide"}>
                <PackingList updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 3 ? "" : "hide"}>
                <CertificateOfOrigin updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 4 ? "" : "hide"}>
                <Insurance updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 5 ? "" : "hide"}>
                <TaxAndCustom updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 6 ? "" : "hide"}>
                <Invoice updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 7 ? "" : "hide"}>
                <TransportDocument updateStep={this.updateStep} />
              </div>
              <div className={this.state.step === 8 ? "" : "hide"}>
                <BillOfExchange pageSubmit={this.pageSubmit} />
              </div>
              {/* // {this.state.step === 1} ?{" "} */}
              {/* // <BillOfLading incrementStep={this.incrementStep} /> : '' */}
              {/* // {this.state.step === 2} ?{" "} */}
              {/* // <PackingList */}

              {/* //   incrementStep={this.incrementStep}
              //   pageSubmit={this.pageSubmit}
              // />: ''
              // {this.state.step === 3} ?{" "}
              // <CertificateOfOrigin incrementStep={this.incrementStep} />: ''
              // {this.state.step === 4} ?{" "}
              // <Insurance incrementStep={this.incrementStep} />
              // {this.state.step === 5} ?{" "}
              // <TaxAndCustom incrementStep={this.incrementStep} />
              // {this.state.step === 6} ?{" "}
              // <Invoice incrementStep={this.incrementStep} />
              // {this.state.step === 7} ?{" "}
              // <TransportDocument incrementStep={this.incrementStep} />
              // {this.state.step === 8} ?{" "}
              // <BillOfExchange incrementStep={this.incrementStep} /> */}
            </div>
          </div>
        );

      case true:
        return (
          <CustomsUSA
            uuid={this.props.uuid}
            source={this.props.source}
            destination={this.props.destination}
            getCurrentDate={this.props.getCurrentDate}
            updateStep={this.props.updateStep}
          />
        );
    }
  }
}

export class BillOfLading extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStep(2);
  }
  render() {
    return (
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form onSubmit={this.handleSubmit}>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEPS</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">SHIPPER</p>
              </span>
              <div>
                <input
                  type="text"
                  name="shipper"
                  placeholder="SHIPPER"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">CONSIGNEE</p>
              </span>
              <div>
                <input type="text" name="consignee" placeholder="CONSIGNEE" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">LOCAL VESSEL</p>
              </span>
              <div>
                <input
                  type="text"
                  name="localvessel"
                  placeholder="LOCAL VESSEL"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">PORT OF DISCHARGE</p>
              </span>
              <div>
                <input type="text" name="portofdischarge" placeholder="PORT OF DISCHARGE" />
              </div>
            </div>
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                // onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export class PackingList extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.updateStep(3);
  }
  render() {
    return (
      // <div>
      //   inside Packing List
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEP</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">SHIP TO</p>
              </span>
              <div>
                <input
                  type="text"
                  name="shipto"
                  placeholder="SHIP TO"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">PO No.</p>
              </span>
              <div>
                <input type="text" name="pono" placeholder="PO No." />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">ITEMS</p>
              </span>
              <div>
                <input
                  type="text"
                  name="items"
                  placeholder="ITEMS"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">QUANTITY</p>
              </span>
              <div>
                <input type="text" name="quantity" placeholder="QUANTITY" />
              </div>
            </div>
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export class CertificateOfOrigin extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateStep(4);
  }

  handleClick() {
    // this.props.updateStep(4);
  }
  render() {
    return (
      // <div>
      //   inside CertificateOfOrigin
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEP</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">SHIPPER NAME AND ADDRESS</p>
              </span>
              <div>
                <input
                  type="text"
                  name="shippernameandaddress"
                  placeholder="SHIPPER NAME AND ADDRESS"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">CONSIGNEE NAME AND ADDRESS</p>
              </span>
              <div>
                <input type="text" name="consigneenameandaddress" placeholder="CONSIGNEE NAME AND ADDRESS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">COUNTRY OF MANUFACTURE</p>
              </span>
              <div>
                <input
                  type="text"
                  name="countryofmanufacture"
                  placeholder="COUNTRY OF MANUFACTURE"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TOTAL NO. OF PACKAGES</p>
              </span>
              <div>
                <input type="text" name="totalnoofpackages" placeholder="TOTAL NO. OF PACKAGES" />
              </div>
            </div>
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export class Insurance extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateStep(5);
  }

  render() {
    return (
      // <div>
      //   inside Insurance
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEPS</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TOTAL INSURANCE PAID</p>
              </span>
              <div>
                <input
                  type="text"
                  name="totalinsurancepaid"
                  placeholder="TOTAL INSURANCE PAID"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TYPE OF INSURANCE</p>
              </span>
              <div>
                <input type="text" name="typeofinsurance" placeholder="TYPE OF INSURANCE" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">INSURANCE VALID TILL</p>
              </span>
              <div>
                <input
                  type="text"
                  name="insurancevalidtill"
                  placeholder="INSURANCE VALID TILL"
                />
              </div>
            </div>            
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export class TaxAndCustom extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateStep(6);
  }
  render() {
    return (
      // <div>
      //   inside TaxAndCustom
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEP</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TAX PAID</p>
              </span>
              <div>
                <input
                  type="text"
                  name="taxpaid"
                  placeholder="TAX PAID"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TAX AMOUNT</p>
              </span>
              <div>
                <input type="text" name="taxamount" placeholder="TAX AMOUNT" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">CUSTOMS PAID</p>
              </span>
              <div>
                <input
                  type="text"
                  name="customspaid"
                  placeholder="CUSTOMS PAID"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">CUSTOMS AMOUNT</p>
              </span>
              <div>
                <input type="text" name="customsamount" placeholder="CUSTOMS AMOUNT" />
              </div>
            </div>
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export class Invoice extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateStep(7);
  }
  render() {
    return (
      // <div>
      //   inside Invoice
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEP</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">ITEMS</p>
              </span>
              <div>
                <input
                  type="text"
                  name="item"
                  placeholder="ITEMS"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">QUANTITY</p>
              </span>
              <div>
                <input
                  type="text"
                  name="quantity"
                  placeholder="QUANTITY"
                />
              </div>
            </div>  
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">COST</p>
              </span>
              <div>
                <input
                  type="text"
                  name="cost"
                  placeholder="COST"
                />
              </div>
            </div>  
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">VENDOR DETAILS</p>
              </span>
              <div>
                <input
                  type="text"
                  name="vemdordetails"
                  placeholder="VENDOR DETAILS"
                />
              </div>
            </div>              
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export class TransportDocument extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.updateStep(8);
  }
  render() {
    return (
      // <div>
      //   inside TransportDocument
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEPS</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">AWB NUMBER</p>
              </span>
              <div>
                <input
                  type="text"
                  name="awbnumber"
                  placeholder="AWB NUMBER"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">ITEMS</p>
              </span>
              <div>
                <input type="text" name="items" placeholder="ITEMS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">QUANTITY</p>
              </span>
              <div>
                <input
                  type="text"
                  name="quantity"
                  placeholder="QUANTITY"
                />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">COST</p>
              </span>
              <div>
                <input type="text" name="cost" placeholder="COST" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TRANSPORT DETAILS</p>
              </span>
              <div>
                <input type="text" name="trnasportdetails" placeholder="TRANSPORT DETAILS" />
              </div>
            </div>
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export class BillOfExchange extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault()

    this.props.pageSubmit();
  }
  render() {
    return (
      // <div>
      //   inside BillOfExchange
      //   <button onClick={this.handleClick}>Next</button>
      // </div>
      <div className="outer-layer-billoflading">
        Inside bill of lading
        <div className="form-bill-of-lading">
          <form>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">UUID</p>
              </span>
              <div>
                <input type="text" name="uuid" placeholder="UUID" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STEP</p>
              </span>
              <div>
                <input type="text" name="step" placeholder="STEP" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">STATUS</p>
              </span>
              <div>
                <input type="text" name="status" placeholder="STATUS" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">DATE</p>
              </span>
              <div>
                <input type="text" name="date" placeholder="DATE FIELD" />
              </div>
            </div>
            <div className="input-div">
              <span className="para-wrap">
                <p classname="para">TENURE OF USANCE BILL</p>
              </span>
              <div>
                <input
                  type="text"
                  name="tenure"
                  placeholder="TENURE OF USANCE BILL"
                />
              </div>
            </div>            
            <div>
              <input
                className="submit-button"
                type="submit"
                value="Submit"
                onClick={this.handleSubmit}
              />
            </div>
          </form>
        </div>
      </div>
    );
  }
}

