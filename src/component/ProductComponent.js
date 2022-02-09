import React from 'react';

const ProductDisplay = (props) =>{
    console.log(props);
    const renderProduct = props.dispData.map((item) =>{
        return(
            <div className="col" key={item.id}>
               <div className="card" style={{height:'350px'}}>
                   <img src={item.image} className="card-mg-top" style={{height:'100px',width:'70%',marginLeft:'10%'}} alt={item.image}/>
                   <div className="card-body">
                       <p className="card-title">{item.name}</p>                       
                       <h6 className="card-text"><span>&#163;</span> {item.cost}</h6>
                   </div>
               </div>
            </div>
        )
    })

    return(
        <div className="row row-cols-1 row-cols-md-4 g-4">
            {renderProduct}
        </div>
    )
}

export default ProductDisplay;