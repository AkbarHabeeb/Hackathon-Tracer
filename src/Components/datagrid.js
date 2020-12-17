import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Row, Col } from 'react-bootstrap';

const columns = [
  { field: 'id', headerName: 'Line-item-id', width: 300 },
  { field: 'sku', headerName: 'Sku', width: 200 },
  { field: 'product_display', headerName: 'Display name', width: 260 }
];

const rows = [
  { id: 'e15cd3f8-e025-4358-83c4-43d7efa2fd39', sku: 'GP-ASPSWB22LIL', product_display: 'Quick Change Silicone Sport Band' },
  { id: 'b45306f9-3e83-4445-a8d3-a67771d00f3e', sku: 'DM_IM_FS_EXPEDITED', product_display: 'Delivery' },
  { id: '77f89d2e-9a91-4219-9b06-93e323afaacd', sku: 'SM-R830NZSAXAR', product_display: 'Galaxy Watch Active2' }
];

export default function DataGridDemo() {
  return (
    <Row>
      <Col lg="7">
        <div className="card">
          <div className="content">
            <div style={{ height: 300, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={4}
                // checkboxSelection
              />
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
}
