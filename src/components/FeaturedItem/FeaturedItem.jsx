import React from "react";

export default function FeaturedItem({image}) {
  return (
    <div>
      <div className="featured__item">
        <div
          className="featured__item__pic set-bg"
          
        >
          <img src={image}/>

          <ul className="featured__item__pic__hover">
            <li>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-retweet"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-cart"></i>
              </a>
            </li>
          </ul>
        </div>
        <div className="featured__item__text">
          <h6>
            <a href="#">Crab Pool Security</a>
          </h6>
          <h5>$30.00</h5>
        </div>
      </div>
    </div>
  );
}
