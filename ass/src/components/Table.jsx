import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#6366F1',
    color: '#E2E9EF',
    fontWeight: 'bold',
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    color: '#E2E9EF',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#1C2536',
    fontSize: 16,
  },
  '&:nth-of-type(even)': {
    backgroundColor: '#1B2430',
    fontSize: 16,
  },
  
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(api, model, price) {
  return { api, model, price };
}

const rows = [
  createData('OpenAI', 'GPT-3.5', '$0.002'),
  createData('OpenAI', 'GPT-4', '$0.03'),
  createData('Together AI', 'Llama-2-70b', '$0.0008'),
  createData('Together AI', 'Llama-2-13b', '$0.0006'),
];

export default function CustomizedTables() {
  return (
    <TableContainer 
      component={Paper} 
      className="bg-componentBg shadow-lg rounded-lg border border-white-700 rounded-xl"
      style={{ overflowX: 'auto' }} 
    >
      <Table 
        sx={{ minWidth: 700 }} 
        aria-label="customized table"
        style={{ width: '100%' }} 
      >
        <TableHead className="bg-tabletop">
          <TableRow>
            <StyledTableCell>API</StyledTableCell>
            <StyledTableCell align="right">MODEL</StyledTableCell>
            <StyledTableCell align="right">PRICE PER 1K TOKENS</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.api}>
              <StyledTableCell component="th" scope="row">
                {row.api}
              </StyledTableCell>
              <StyledTableCell align="right" className="text-textcolor">
                {row.model}
              </StyledTableCell>
              <StyledTableCell align="right">{row.price}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
