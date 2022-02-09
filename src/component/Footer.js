import React from 'react';

const Footer = (props) => {
    console.log(props);
    return(
        <React.Fragment>
            <hr/>
            <center>
                <h5>&copy; Diyan Soft {props.year} All Rights Reserved</h5>
            </center>
        </React.Fragment>
    )
}

export default Footer;