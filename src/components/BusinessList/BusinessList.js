import React from 'react';
import './BusinessList.css';
import Business from '../Business/Business.js';

class BusinessList extends React.Component {
    render() {
        return (
            <div className="BusinessList">
                {/* Access the prop we passed through in App.js then map to iterate through the array that we've passed through */}
              {this.props.businesses.map(business => {
                //   for each 'business' in the return back to App.js a Business component to render with the prop business
                  return <Business business={business}/>;
              })}      
            </div>
        );
    }
};

export default BusinessList;