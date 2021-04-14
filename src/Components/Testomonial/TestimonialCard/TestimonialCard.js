import React from 'react';

import './TestimonialCard.css';
import { Card } from 'react-bootstrap';
const cardInfo = [

    {
        'name': 'Suru kahn',
        'country': 'Hell',
        'image': '/images/Ellipse 1.png'
    },
    {
        'name': 'kais Khan',
        'country': 'BFG Division',
        'image': '/images/Ellipse 2.png'
    },
    {
        'name': 'BrainDeath',
        'country': 'Death',
        'image': '/images/Ellipse 3.png'
    }
]
const TestimonialCard = () => {
    return (
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
           
            <div className="row ms-auto me-auto" style={{ display: 'flex', justifyContent: 'center' }}>
                {
                    cardInfo.map((e) => {
                        return (
                            <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card className="borderDark" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <Card.Text className="mb-4">
                                            <small className="text-secondary">Some quick example text to build on the card title and make up the bulk
                                        of the card's content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, explicabo. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium, debitis!</small>
                                        </Card.Text>
                                        <div className="d-flex " >
                                            <div>
                                                <img src={window.location.origin + e.image} alt={e.name} className="circleImage" />
                                            </div>
                                            <div style={{ margin: 'auto 0' }}>
                                                <small className="text-primary boldText" >
                                                    {e.name}
                                                    <br /> <p className="text-secondary" style={{ fontSize: "6px", fontWeight: '100' }}>
                                                        {e.country}
                                                    </p>
                                                </small>


                                            </div>


                                        </div>
                                    </Card.Body>
                                </Card>
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default TestimonialCard;