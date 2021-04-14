import React from 'react';
import { Button } from 'react-bootstrap';
import './Appointment.css';
const Appointment = () => {
    return (
        <div className="container backGroundColorChange">
            <div className="row">
                <div className="col-md-12 col-lg-6 ">
                    <img src={window.location.origin + '/images/5790-removebg.png'} alt="Teeth" width="100%"  className="translateThis" />
                </div>
                <div className="col-md-12 col-lg-6 " style={{ margin: 'auto 0'}}>
                    <h5 className="text-primary">APPOINTMENT</h5>
                    <br/>
                    <h3 className="text-white">Make an appointment<br/> Today</h3>
                    <small className="text-white"> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt reprehenderit iusto excepturi, magnam id quasi dolor placeat et cupiditate consequatur!</small>
                    <div>
                        <Button className="mt-3 mb-3 ms-auto me-auto ">Learn More</Button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Appointment;