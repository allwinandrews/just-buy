import React from "react";
import Image from "next/image";
import Link from "next/link";

const myLoader = ({ src, width, quality }) => {
  return `${src}?w=${width}&q=${quality || 75}`;
};

export default function FeaturedItem({ data }) {
  const productName = data.title;
  return (
    <div className="">
      <div className="">
        <div className="product__item">
          <div
            className="product__item__pic set-bg"
            style={
              {
                // backgroundImage: `url(${require("http://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg")})`,
              }
            }
          >
            <img src={data?.image}></img>
            <ul className="product__item__pic__hover">
              <li>
                <a href="">
                  <i className="fa fa-heart"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-retweet"></i>
                </a>
              </li>
              <li>
                <a href="">
                  <i className="fa fa-shopping-cart"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="product__item__text">
            <h6>
              <Link
                href={{
                  pathname: "/details",
                  query: data, // the data
                }}
              >
                {data?.title}
              </Link>
            </h6>
            <h5>${data.price}</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
