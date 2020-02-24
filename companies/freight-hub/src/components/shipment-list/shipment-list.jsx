import React, { Component } from "react";
import "./shipment-list.css";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Link } from "react-router-dom";
import DatabaseUtilService from "../../services/database-util";

class ShipmentList extends Component {
  state = {
    shipments: []
  };

  constructor(props) {
    super(props);
    this.state = {
      shipments: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    let service = new DatabaseUtilService();
    service
      .getListOfShipments()
      .then(resp => resp.json())
      .then(data => {
        let shipments = data.map((shipment, index) => {
          return { ...shipment };
        });
        this.setState({ shipments: shipments });
      });
  };

  cellButton = (cell, row, enumObject, rowIndex) => {
    return (
      <Link className="btn btn-info btn-sm" to={`/detail/${row.id}`}>
        <span>Detail...</span>
      </Link>
    );
  };

  render() {
    return (
      <div className="shipment-list">
        <BootstrapTable
          data={this.state.shipments}
          striped
          bordered
          hover
          version="4"
          pagination
          exportCSV={true}
        >
          <TableHeaderColumn
            isKey
            dataField="id"
            dataSort={true}
            filter={{ type: "TextFilter", delay: 1000 }}
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            filter={{ type: "TextFilter", delay: 1000 }}
            dataField="name"
            dataSort={true}
          >
            Name
          </TableHeaderColumn>
          <TableHeaderColumn
            filter={{ type: "TextFilter", delay: 1000 }}
            dataField="mode"
            dataSort={true}
            export
          >
            Mode
          </TableHeaderColumn>
          <TableHeaderColumn
            filter={{ type: "TextFilter", delay: 1000 }}
            dataField="type"
            dataSort={true}
            export
          >
            Type
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="button"
            dataFormat={this.cellButton.bind(this)}
          />
        </BootstrapTable>
        <div />
      </div>
    );
  }
}

export default ShipmentList;
