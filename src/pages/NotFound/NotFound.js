import React from 'react';
import notFoundimg from '../../images/404.png';
const NotFound = () => {
    return (
        <div>
            <img src={notFoundimg} alt=""  className="img-fluid"/>
        </div>
    );
};

export default NotFound;