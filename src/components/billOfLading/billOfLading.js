import React from "react";
import "./billoflading.css";
//import PackingList from "./../packingList/packinglist";

export default class BillOflading extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formSubmitted: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleSubmit() {
    //this.props.updateStep(2);
    this.setState({
      formSubmitted: true
    });
  }
  handleClick() {
    //this.props.updateTimeline(50);
  }
  render() {
        return (
          <div className="outer-layer-billoflading">
            Inside bill of lading
            <div className="form-bill-of-lading">
              <form>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">UUID :</p>
                  </span>
                  <div>
                    <input type="text" name="name" placeholder="UUID" />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">STEPS :</p>
                  </span>
                  <div>
                    <input type="text" name="name" placeholder="STEPS" />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">STATUS :</p>
                  </span>
                  <div>
                    <input type="text" name="name" placeholder="STATUS" />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">DATE :</p>
                  </span>
                  <div>
                    <input type="text" name="name" placeholder="DATE FIELD" />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">SHIPPER :</p>
                  </span>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="ORGANISATIONAL DETAILS"
                    />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">CONSIGNEE :</p>
                  </span>
                  <div>
                    <input type="text" name="name" placeholder="SENSOR TYPES" />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">LOCAL VESSEL :</p>
                  </span>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="NUMBER OF SENSORS"
                    />
                  </div>
                </div>
                <div className="input-div">
                  <span className="para-wrap">
                    <p classname="para">PORT OF DISCHARGE :</p>
                  </span>
                  <div>
                    <input
                      type="text"
                      name="name"
                      placeholder="COST OF SENSORS"
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
