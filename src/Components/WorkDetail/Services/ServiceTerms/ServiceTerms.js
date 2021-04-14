import React from 'react';
import { Button } from 'react-bootstrap';

const ServiceTerms = () => {
    return (
        <div className="container mt-5  ms-auto me-auto mb-5">
            <div className="row ms-auto me-auto">
                <div className="col-md-12 col-lg-4">
                    <img src={window.location.origin + '/images/serviceTerm.png'} alt="Teeth" width="100%"  style={{backgroundSize:'cover'}} />
                </div>
                <div className="col-md-12 col-lg-8 ms-auto me-auto" style={{margin: 'auto 0'}}>
                    <h3 className="mainTextCol">Exceptional Dental <br /> Care, On Your Terms</h3>
                    <small className="text-secondary">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa, magnam aspernatur. Consequuntur quisquam eveniet saepe sit quibusdam beatae ipsum itaque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo numquam quos cumque, labore officia hic eveniet exercitationem! Eius perferendis hic recusandae sapiente a, magni illo unde accusamus tempora asperiores, odit eligendi facere rrupti odio ullam modi incidunt consectetur magnam repudiandae ipsum. Sint accusamus doloremque sit.</small>
                    <div>
                        <Button className="mt-3 ms-auto me-auto ">Learn More</Button>
                    </div>
                    
                </div>
               
            </div>
        </div>

    );
};

export default ServiceTerms;