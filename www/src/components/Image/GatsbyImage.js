import React from 'react';
import Img from 'gatsby-image';

export default ({ childImageSharp, ...props }) => (
    <React.Fragment>
        <Img
            fixed={childImageSharp}
            className={props.className} />
    </React.Fragment>
);
