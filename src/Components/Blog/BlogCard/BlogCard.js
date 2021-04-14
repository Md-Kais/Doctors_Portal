import React from 'react';
import { Card } from 'react-bootstrap';
const cardInfo = [

    {
        'name': 'Dr. Rashed Kabir',
        'highlightedText': 'Check at Least a legal dentist in a year',
        'date':'29 February,2020',
        'image': '/images/Ellipse 1.png'
    },
    {
        'name': 'Dr. Cudi',
        'highlightedText': '2 times of brush in a day can keep you healthy',
        'date': '9 February,2020',
        'image': '/images/Ellipse 2.png'
    },
    {
        'name': 'Dr. Brain Humt',
        'highlightedText': 'The tooth cancer is taking a challenge',
        'date': '2 February,2020',
        'image': '/images/Ellipse 3.png'
    }
]
const BlogCard = () => {
    return (
        <div className="container">
            <div className="row ms-auto me-auto">
                {
                    cardInfo.map((e) => {
                        return (
                            <div className="col-md-12 col-lg-4 mt-3" style={{ display: 'flex', justifyContent: 'center' }}>
                                <Card className="borderDark" style={{ width: '18rem' }}>

                                    <Card.Body>
                                        <div className="d-flex mb-2" >
                                            <div>
                                                <img src={window.location.origin + e.image} alt={e.name} className="circleImage" />
                                            </div>
                                            <div style={{ margin: 'auto 0' }}>
                                                <small className="text-primary boldText" >
                                                    {e.name}
                                                    <br /> <p className="text-secondary" style={{ fontSize: "6px", fontWeight: '100' }}>
                                                        {e.date}
                                                    </p>
                                                </small>


                                            </div>


                                        </div>
                                        <Card.Text className="mb-4">
                                            <h6 className="boldText mainTextCol">{e.highlightedText}</h6>
                                            <small className="text-secondary">Some quick example text to build on the card title and make up the bulk
                                       </small>
                                        </Card.Text>

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

export default BlogCard;
