import React from 'react';

const Footer = (props) => {
    console.log(props);
    return(
        <React.Fragment>
            <hr/>
            <footer>
                <h3>&copy; TSL Products {props.year} All Rights Reserved</h3>
            </footer>
        </React.Fragment>
    )
}

export default Footer;