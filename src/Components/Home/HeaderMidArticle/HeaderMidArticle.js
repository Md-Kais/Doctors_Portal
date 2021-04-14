
import React from 'react';
import { Button } from 'react-bootstrap';
import headerMid from "../../../headerMid.png";
import'./HeaderMidArticle.css'
const HeaderMidArticle = () => {
    return (
      <div className="mt-5 spacingDiv">
        <div className="container mt-5">
          <div className="row mt-5">
            <div className="col-md-12 col-lg-6 ms-auto p-5 me-auto">
                <h1>Your New Smile <br/></h1>
                <h1>Starts here</h1>
                <br/>
                <small className="text-secondary"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor sequi rerum tenetur, similique officia perspiciatis odio optio sint ducimus est.</small>
                <br/>
              <Button className="mt-3">Get Appointment</Button>
            </div>
            <div className="col-md-12 col-lg-6  ms-auto me-auto" >
                 <img src={headerMid} alt="hello world" width="100%" height="90%"></img>
            </div>
          </div>
        </div>
        
      </div>
    );
};

export default HeaderMidArticle;