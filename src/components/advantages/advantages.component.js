import React from 'react';

export class Advantages extends React.Component {
    render() {
        return (
            <div className="container">
            <div className="row mt-5 mb-5">
                <div className="col-sm-4 text-dark">
                    <h3 className="font-weight-bold">Free shipping</h3>
                    <p>Shipping on all Order with Local Area order above $200.</p>
                </div>
                <div className="col-sm-4 text-dark">
                    <h3 className="font-weight-bold">24/7 Support</h3>
                    <p>Our Customer Support Team is ready and available to help.</p>
                </div>
                <div className="col-sm-4 text-dark">
                    <h3 className="font-weight-bold">30 Days Return</h3>
                    <p>Your Product any fault within 30 days for an exchange.</p>
                </div>
            </div>
            </div>
        )
    }
}