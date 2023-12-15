import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function AddressFormBasic() {
  return (
    <>
      <Typography>
        Shipping address
      </Typography>
      <Grid >
        <Grid >
          <TextField
            required
            id="firstName"
            name="firstName"
           
          />
        </Grid>

        <Grid >
          <TextField
            required
            id="lastName"
            name="lastName"
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            id="address1"
           
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
           
          />
        </Grid>
        <Grid >
          <TextField
            required
            id="city"
            name="city"
     
          />
        </Grid>
        <Grid>
          <TextField
            id="state"
            name="state"
    
          />
        </Grid>
        <Grid >
          <TextField
            required
            id="zip"
            name="zip"
       
          />
        </Grid>
        <Grid >
          <TextField
            required
            id="country"
            name="country"
            label="Country"
       
          />
        </Grid>
        <Grid >
          <FormControlLabel
            control={
              <Checkbox color="secondary" name="saveAddress" value="yes" />
            }
            label="Use this address for payment details"
          />
        </Grid>
      </Grid>
    </>
  );
}
