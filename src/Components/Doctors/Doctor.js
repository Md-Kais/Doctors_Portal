import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Card } from 'react-bootstrap';
const doctorsInfo = [
    {
        'title': 'Dr. Chudi',
        'phone': '0124324234'
    },
    {
        'title': 'Dr. Chudi',
        'phone': '0124324234'
    },
    {
        'title': 'Dr. Chudi',
        'phone': '0124324234'
    }



]
const Doctor = () => {
    return (
        <div className="container mt-5 ms-auto me-auto" >
            <p className="text-primary boldText" style={{ textAlign: 'center' ,fontSize:'14px'}}>Our Doctors</p>
            <div className="row mt-3 mb-3" style={{ display: 'flex', justifyContent: 'center'}}>
                {
                    doctorsInfo.map((e) => {
                        return (

                            <div className="col-md-6 col-lg-4 mb-5" style={{ width: '250px', height: '250px', textAlign: 'center'}}>
                                <div style={{ width: '250px', height: '150px', textAlign:'center'}}>
                                    <img src={window.location.origin + '/images/5790-removebg.png'} alt="Teeth" width="100%" style={{margin:'auto 0'}}/>
                               
                                    <small className="boldText mainTextCol" >{e.title}</small >
                                    <br/>
                                    <FontAwesomeIcon className="text-success" icon={faPhoneAlt} />&nbsp;
                                    <small className="mainTextCol">{e.phone}</small>
                                </div>

                            </div>


                        )
                    })
                }
            </div>
        </div>
    );
};

export default Doctor;