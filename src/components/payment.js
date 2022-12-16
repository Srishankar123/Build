import React, { Component } from 'react'
import { Card, Grid, TextField ,FormGroup, FormControlLabel,Checkbox, Button } from '@mui/material'
import { Link } from 'react-router-dom';

export default class Page extends Component {
  render() {
    return (
      <div>
        <Grid className='a' >
          <Card style={{width:"500px",margin:"25px",marginLeft:"450px",padding:"20px"}}>
            <h2>Checkout</h2>
            <h3>Payment Method</h3>
        
            <TextField fullWidth label="Name on Card *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Card Number *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="Expiry data *" variant="standard" />
            <br/>
            <br/>
            <TextField fullWidth label="CVV *" variant="standard" />
            <br/>
            <br/>
            
            <FormGroup>
              <FormControlLabel control={<Checkbox defaultChecked />} label="Remember Credit card details for next time" />
            </FormGroup>
            <br/>
            <div align="right">
       
            <Link style={{textDecoration: 'none',color:'blue'}} to="/order">Next</Link>
            </div>
          </Card>
        </Grid>
      </div>
    )
  }
}