import { Card, Grid, TextField ,FormGroup, FormControlLabel,Checkbox, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom';

export default function Page1() {
  return (
    
    <div>
        <Grid className='a' >
          <Card style={{width:"500px",margin:"25px",marginLeft:"450px",padding:"20px"}}>
            <h2>Checkout</h2>
            <h3>Shipping Address</h3>
        
            <TextField fullWidth label="First Name *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Last Name" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Address Line 1 *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Address Line 2 " variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="City *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="State " variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Pincode *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Country *" variant="standard" />
            <br/>
            <br/>
            
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Use This Address For Payment Details" />
            </FormGroup>
            <br/>
            <div align="right">
            <Link style={{textDecoration: 'none',color:'blue'}} to="/payment">Next</Link>
            </div>
          </Card>
        </Grid>
    </div>
  )
}

