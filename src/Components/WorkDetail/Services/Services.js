import React from 'react';
import ServicesCardDesign from '../ServicesCardDesign/ServicesCardDesign';
// import './../../Home/Home/Home.css'
const ServicesInfo = [
    //passing image in react js
    //https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js

    {

        'title': 'Flouride Treatment',
        'image': '/images/flouride.png'
    },
    {
        'title': 'Cavity Filling',
        'image': '/images/filling.png'
    },
    {
        'title': 'Teath Whitening',
        'image': '/images/whitenning.png'
    }
]

const Services = () => {

    return (
        <div className="mt-5 mb-3" style={{ position: 'relative', textAlign: 'center'  }}>
            <h4 className="text-primary">Our Services</h4>
            <h3 className="mainTextCol">Services We Provide</h3>
            <div style={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }}>
                <div className="ms-auto me-auto mt-5" >

                    <div className="container" style={{ textAlign: 'center' }}>
                        <div className="row mt-3 mb-2" style={{ margin: '10px auto', display: 'flex', justifyContent: 'center' }} >

                            {
                                ServicesInfo.map((e) => {
                                    return (
                                        <ServicesCardDesign e={e}></ServicesCardDesign>
                                    )
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;