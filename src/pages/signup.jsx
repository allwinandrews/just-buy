import { Button, Divider } from "@mui/material";
import React from "react";
import TextField from "@mui/material/TextField";
import { redirect } from 'next/navigation';
import Link from "next/link";

export default function Signup(props) {
    
  return (
    <div>
      <div className="signup-container">
        <div className="signup-subcontainer">
          <div className="subcontainer">
            <div className="header-container">
              <div className="header">Signup</div>
              {/* <Divider sx={{ color: "#7fad39" }} /> */}
            </div>
          </div>
          <div className="body-container">
            <div className="body-subcontainer">
              <div className="input-container">
                <div className="input-header">Enter Email</div>
                <div>
                  <TextField label="Email" sx={{ width: "100%" }} />
                </div>
              </div>
              <div className="input-container">
                <div className="input-header">Enter Password</div>
                <div>
                  <TextField label="Password" sx={{ width: "100%" }} />
                </div>
              </div>
              <div className="input-container">
                <div className="input-header">Confirm Password</div>
                <div>
                  <TextField label="Confirm Password" sx={{ width: "100%" }} />
                </div>
              </div>
              <div className="submit-button">
                <Button
                  variant="contained"
                  sx={{ width: "100%",backgroundColor:"#059862"}}
                //   color="#059862"
                  
                >
                    Signup
                  {/* <Link href="/">this page!</Link> */}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
