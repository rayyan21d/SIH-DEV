import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './DataTable.css'

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'zone', headerName: 'Zone', width: 130 },
  { field: 'division', headerName: 'Division', width: 130 },
  { field: 'station', headerName: 'Station', width: 130 },
  { field: 'spoc', headerName: 'SPOC', width: 130 },
  { field: 'contact', headerName: 'Contact', width: 130, type: 'number' },
];

const rows = [
  { id: 1, zone: 'Snow', division: 'Jon', station: 35 },
  { id: 2, zone: 'Lannister', division: 'Cersei', station: 42 },
  { id: 3, zone: 'Lannister', division: 'Jaime', station: 45 },
  { id: 4, zone: 'Stark', division: 'Arya', station: 16 },
  { id: 5, zone: 'Targaryen', division: 'Daenerys', station: null },
  { id: 6, zone: 'Melisandre', division: null, station: 150 },
  { id: 7, zone: 'Clifford', division: 'Ferrara', station: 44 },
  { id: 8, zone: 'Frances', division: 'Rossini', station: 36 },
  { id: 9, zone: 'Roxie', division: 'Harvey', station: 65 },
];

export default function DataTable() {
  return (
    <div className='DataTable' style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { pstation: 0, pstationSize: 5 },
          },
        }}
        pstationSizeOptions={[5, 10]}
        checkboxSelection
      />
  
      <Stack spacing={10} margin={10} direction="column">
        <Button variant="contained">Update Siding</Button>
        <Button variant="contained">Remove Siding</Button>
        <Button variant="contained">Add Siding</Button>
      </Stack>
      
    </div>
  );
}