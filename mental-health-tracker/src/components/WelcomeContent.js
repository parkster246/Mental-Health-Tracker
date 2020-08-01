import React, { Component } from 'react';

class Welcome extends Component {
    render() { 
        return ( 
            <div className='welcomeWrapper' >
                <strong>Welcome</strong>
                <br/>
                <p>This is our sexy app for your mental health needs.</p>
            </div>
         );
    }
}
 
export default Welcome;