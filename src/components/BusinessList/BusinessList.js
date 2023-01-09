import React from 'react'
import './BusinessList.css'
import Business from '../Business/Business'
class BusinessList extends React.Component {

  render() {
    return <div className="BusinessList">
      {this.props.businesses.map((business , key) => { return <Business business={business} key={key} /> })}
    </div>
  }
}

export default BusinessList