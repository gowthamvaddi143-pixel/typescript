import { Button, TextField } from "@mui/material";
import { useState, type BaseSyntheticEvent } from "react";

export function MuiDemo(){

    const [uname, setUname]=useState<string>('')

    function handleNameChange(e:BaseSyntheticEvent){
        setUname(e.target.value)
    }
    return(
        <div className="container">
            <div className="w-50">
                <h2>Bootstrap From</h2>
               <div className="mb-3">
                 <label > User Name</label>
                <div>
                    <input type="text" onChange={handleNameChange} className="form-control" name="username" />
                </div>

            </div>
            <div>
                <button className="btn btn-primary w-100">Submit</button>
            </div>
               </div>
               <div className="mt-5 w-50">
                  <h1>MUI FROM</h1>
                  <TextField className="w-100" onChange={handleNameChange} name="Username "label="User Name" variant="standard"/>
                  <div>
                    
                    <Button variant="contained" color="error" className="w-100 mt-3" >Submit</Button>
                  </div>

               </div>

               <h1>
                helo!{uname}
               </h1>


        </div>
    )
}