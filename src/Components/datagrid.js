import React, { Component } from "react";
import { DataGrid } from '@material-ui/data-grid';
import { Row, Col } from 'react-bootstrap';

class DataTable extends Component {
  constructor() {
    super()
  }

  render() {
    const columns = [
      { field: 'id', headerName: 'Line-item-id', width: 300 },
      { field: 'sku', headerName: 'Sku', width: 200 },
    ];

    return (
      <Row>
        <Col lg="5">
          <div className="card">
            <div className="content">
              <div style={{ height: 300, width: '100%' }}>
                <DataGrid
                  rows={this.props.rows}
                  columns={columns}
                  pageSize={4}
                  checkboxSelection
                />
              </div>
            </div>
          </div>
        </Col>
      </Row>
    );
  }
}

export default DataTable;