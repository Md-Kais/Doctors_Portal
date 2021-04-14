import React, { Children } from 'react';

const ServicesCardDesign = ({ e }) => {
   
    return (
        <div className="row m-1 mb-5" style={{display:'inline-block', width:'350px', margin:'20px auto'}}>
           {/* https://stackoverflow.com/questions/37644265/correct-path-for-img-on-react-js */}
           
            <img src={window.location.origin + e.image} alt={e.title}/>
                <p>{e.title}</p>
            <small className="text-secondary">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur molestiae eveniet consequuntur? Sunt, possimus perferendis.</small>
            
 

        </div>
    );
};

export default ServicesCardDesign;