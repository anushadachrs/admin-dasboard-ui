import React, {useEffect} from "react";
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import { loadCompanies } from './../../redux/actions';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import { useNavigate } from "react-router-dom";



const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

// function createData(
//   name: string,
//   calories: number,
//   fat: number,
//   carbs: number,
//   protein: number,
// ) {
//   return { name, calories, fat, carbs, protein };
// }

// const rows = [
//   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//   createData('Eclair', 262, 16.0, 24, 6.0),
//   createData('Cupcake', 305, 3.7, 67, 4.3),
//   createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];


const CompaniesView = () => {
    let dispatch = useDispatch();
    const navigate = useNavigate();
    const {companies} = useSelector(state => state.data);

    useEffect(() => {
        dispatch(loadCompanies());
    }, []);

    return (
    <div className="container" style={{marginTop: "50px"}}>
    {/* <div className={buttonUnstyless.root}> */}
      <Button variant="contained" color="primary" style={{marginBottom: "50px"}} onClick={()=>navigate("/add")}>ADD</Button>
      {/* </div> */}
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Company Name</StyledTableCell>
            <StyledTableCell align="center">Website</StyledTableCell>
            <StyledTableCell align="center">Emial</StyledTableCell>
            {/* <StyledTableCell align="center">Phone No</StyledTableCell> */}
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Edit</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {companies && companies.map((company) => (
            <StyledTableRow key={company.id}>
              <StyledTableCell component="th" scope="row">
                {company.company_name}
              </StyledTableCell>
              <StyledTableCell align="center">{company.website}</StyledTableCell>
              <StyledTableCell align="center">{company.email}</StyledTableCell>
              {/* <StyledTableCell align="center">{company.phone}</StyledTableCell> */}
              <StyledTableCell align="center">{company.address}</StyledTableCell>
              <StyledTableCell align="center">
              <ButtonGroup variant="contained" aria-label="outlined button group">
                <Button color="primary">Edit</Button>
                {/* <Button>Delete</Button> */}
              </ButtonGroup>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
)

}
export default CompaniesView