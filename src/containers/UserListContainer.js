import React, { Component } from 'react'

class UserListContainer extends Component {
  render() {
    return (
      // <div className="card" style={{ width: "auto" }}>
      //   <div className="card-header">
      //     Featured
      //   </div>
      //   <div className="card mb-3" style={{ maxWidth: "540px" }}>
      //     <div className="row no-gutters">
      //       <div className="col-md-9">
      //         <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg" alt="" className="card-img" />
      //       </div>
      //       <div className="col-md-8">
      //         <div className="card-body">
      //           <h5 className="card-title">
      //             Place Name
      //           </h5>
      //         </div>
      //       </div>
      //     </div>
      //   </div>
      // </div>
      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        <div className="row no-gutters">
          <div className="col-md-4">
            <img src="https://media-cdn.tripadvisor.com/media/photo-s/0e/cc/0a/dc/restaurant-chocolat.jpg" className="card-img" alt="..." />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UserListContainer