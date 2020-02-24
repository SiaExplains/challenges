import React, { Component } from "react";
import "./shipment-item.css";
import { Link, withRouter } from "react-router-dom";
import { FaCheckCircle, FaRecycle, FaEdit, FaSave } from "react-icons/fa";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import DatabaseUtilService from "../../services/database-util";

class ShipmentItem extends Component {
  state = {
    shipment: {},
    cargo: [],
    show: false,
    readonly: true
  };

  constructor(props) {
    super(props);
    this.state = {
      shipment: {},
      readonly:
        this.props.match.params.id == undefined ||
        this.props.match.params.id == null
          ? false
          : true
    };
  }

  inputChangeHandler = event => {
    // this.setState({ [event.target.id]: event.target.value });
    // alternatively using template strings for strings
    console.log([`shipment.${event.target.id}`]);
    console.log(this.state[`shipment.${event.target.id}`]);
    this.setState({ [`shipment.${event.target.id}`]: event.target.value });
  };
  componentDidMount() {
    const selectedShipmentId = this.props.match.params.id;
    if (
      selectedShipmentId != null &&
      selectedShipmentId != undefined &&
      selectedShipmentId
    ) {
      this.getData(selectedShipmentId);
    } else {
      let { shipment } = this.state;
      shipment.readOnly = false;
      this.setState({ shipment: shipment });
    }
  }
  getData = id => {
    let service = new DatabaseUtilService();
    service
      .getById(id)
      .then(resp => resp.json())
      .then(data => {
        this.setState({ shipment: data });
      });
  };
  handleClose = () => {
    this.setState({ show: false });
  };
  handleShow = () => {
    this.setState({ show: true });
  };

  rowStyleFormat = (row, rowIdx) => {
    return { backgroundColor: rowIdx % 2 === 0 ? "#d0ddff" : "#ffffff" };
  };
  addRecord(data) {
    let service = new DatabaseUtilService();
    service.addRecord(data);
  }
  updateRecord(data) {
    let url = `http://localhost:3001/shipments/${data.id}`;
    let options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    };
    return fetch(url, options).then(response => response.json);
  }
  saveForm = () => {
    let { shipment } = this.state;
    if (this.state.readonly) {
      this.updateRecord(shipment);
      alert("Shipment updated.");
    } else {
      this.addRecord(shipment);
      alert("A new shipment added.");
    }
    this.props.history.push("/list");
  };
  editName = () => {
    let result = prompt("Enter new name:", this.state.shipment.name);
    if (result != null) {
      let { shipment } = this.state;
      shipment.name = result;
      this.setState({ shipment: shipment });
    }
  };
  render() {
    return (
      <div className="shipment-item">
        <div className="row">
          <div className="col">
            <Link to="/list">
              <button className="btn btn-sm btn-light underline">
                &lt; Back
              </button>
            </Link>
            &nbsp; | &nbsp; Status:&nbsp;
            {this.state.shipment.status === "COMPLETED" && (
              <FaCheckCircle className="completed" title="Has been completed" />
            )}
            {this.state.shipment.status === "ACTIVE" && (
              <FaRecycle className="active" title="Is active" />
            )}{" "}
            &nbsp; | &nbsp;
            <span className="save-button" onClick={this.saveForm}>
              <FaSave />
              &nbsp; Save
            </span>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Name</label>
              <div className="input-group mb-3 edit-button">
                <div
                  className="input-group-prepend edit-button"
                  onClick={this.editName}
                >
                  <span
                    className="input-group-text edit-button"
                    id="basic-addon1"
                  >
                    <FaEdit />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control "
                  id="name"
                  aria-describedby="emailHelp"
                  placeholder="Enter name"
                  readOnly={this.state.readonly}
                  value={this.state.shipment.name}
                  onChange={this.inputChangeHandler.bind(this)}
                />
              </div>
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Total</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.total}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>CODE</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                value={this.state.shipment.id}
                readOnly={this.state.readonly}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>User Id</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.userId}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Cargo: <br />
            <BootstrapTable
              data={this.state.shipment.cargo}
              striped
              bordered
              hover
              version="4"
              color="primary"
              trStyle={this.rowStyleFormat}
            >
              <TableHeaderColumn isKey dataField="type" dataSort={true}>
                Type
              </TableHeaderColumn>
              <TableHeaderColumn dataField="description" dataSort={true}>
                Description
              </TableHeaderColumn>
              <TableHeaderColumn dataField="volume" dataSort={true}>
                Volume
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>

        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <label>Mode</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.mode}
              />
            </div>
          </div>
          <div className="col-3">
            <div className="form-group">
              <label>Type</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.type}
              />
            </div>
          </div>
          <div className="col">
            <div className="form-group">
              <label>Origin</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.origin}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="form-group">
              <label>Destination</label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter name"
                readOnly={this.state.readonly}
                value={this.state.shipment.destination}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            Services: <br />
            <BootstrapTable
              data={this.state.shipment.services}
              striped
              bordered
              hover
              version="4"
              trStyle={this.rowStyleFormat}
            >
              <TableHeaderColumn isKey dataField="type" dataSort={true}>
                Type
              </TableHeaderColumn>
            </BootstrapTable>
          </div>
        </div>
        <br />
      </div>
    );
  }
}

export default ShipmentItem;
