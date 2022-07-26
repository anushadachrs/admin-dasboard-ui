import React, {useState} from 'react'
import {makeStyles} from '@material-ui/core/styles';
import TextField  from '@material-ui/core/TextField';
import Stack from '@mui/material/Stack';
import { Button } from "@material-ui/core";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addCompany } from '../../redux/actions';

const useStyles =makeStyles((theme)=> ({
    root:{
        marginTop: 100,
        "& > *":{
            margin: theme.spacing(1),
            width: "45ch",
        },
    },
}));

const AddCompany = () => {
        const classes = useStyles();
        const [state, setState] = useState({
            company_name: "",
            website:"",
            email:"",
            phone:"",
            address:"",
        });
        const [error, setError] = useState("");

        let navigate = useNavigate();
        let dispatch = useDispatch();

        const { company_name, website, email, phone, address } = state;

        const handleInputChange = (e) => {
            let {name, value} = e.target;
                setState({...state, [name]: value});
              };

        const handleSubmit = (e) => {
            e.preventDefault();
              if ( !company_name|| !website|| !email || !address ) {
                setError("Please input all Fields");
        }else {
            dispatch(addCompany(state));
            navigate("/companies");
            setError("")
        }
      };

  return (
    <div>
        {error && <h3 style={{color:"red"}}>{error}</h3>}
        <form
            className={classes.root}
            noValidate
            autoComplete="off"
            onSubmit={handleSubmit}
        >
        <TextField
            id="standard-basic"
            value={company_name}
            lable="Company Name"
            type="text"
            onChange={handleInputChange}
            placeholder="Company Name"
            name="company_name"
            variant="outlined"
        />
        <br />
        <TextField
            value={website}
            onChange={handleInputChange}
            type="url"
            id="standard-basic"
            placeholder="Website"
            name="website"
            variant="outlined"
        />
        <br />
        <TextField
            value={email}
            onChange={handleInputChange}
            type="email"
            label="Email"
            id="standard-basic"
            name="email"
            variant="outlined"
        />
        <br />
        {/* <TextField
            value={phone}
            onChange={handleInputChange}
            type="number"
            label="Phone Number"
            id="standard-basic"
            name="phone"
    /> */}
        <br />
        <TextField
            value={address}
            onChange={handleInputChange}
            type="textarea"
            id="standard-basic"
            label="Address"
            name="address"
            variant="outlined"
        />
        <br />
        <div style={{margin: "auto"}}>
        <Button variant="contained"color="primary" onClick={()=>navigate("/companies")}>Close</Button>
        <Button style={{marginLeft: "2px"}}variant="contained" color="primary" type="submit" text-align="center">Save</Button>
        
        </div>
        </form>
    </div>
  )
}

export default AddCompany

