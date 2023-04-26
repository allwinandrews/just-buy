import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

import PrimarySearchAppBar from "../components/PrimarySearchAppBar";
import TitlebarImageList from "../components/TitlebarImageList";
import { VscAccount } from "react-icons/vsc";
import { IoCartOutline } from "react-icons/io5";
import { TbMeat } from "react-icons/tb";
import { TbCarrot } from "react-icons/tb";
import { TbApple } from "react-icons/tb";
import { TbEggs } from "react-icons/tb";

import { TbSnowflake } from "react-icons/tb";
import { TbSearch } from "react-icons/tb";

// import { TbEggs } from "react-icons/tb";

import { BiCookie } from "react-icons/bi";
import FeaturedItem from "../components/FeaturedItem/FeaturedItem";

export default function Home() {
  const [dummyData, setdummyData] = useState([]);

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/`).then((res) => {
      const persons = res.data;
      setdummyData(persons);
      console.log(dummyData);
    });
  }, []);


  // const { message, setMessage } = useContext(Message_data);

  // function sendData() {
  //   var data = document.getElementById("context_id").value;
  //   setMessage(data);
  // }

  // var router = useRouter();

  // const dummyData = async () => {
  //   const response = await fetch(`https://fakestoreapi.com/products/1`);
  //   if (!response.ok) {
  //     console.log("Encountered Error");
  //   } else {
  //     console.log(response);
  //   }
  // };

  return (
    <>
      {/* <!-- Page Preloder --> */}
      {/* <Loader /> */}
      {/* <PrimarySearchAppBar />
      <TitlebarImageList /> */}
      {/* <!-- Humberger Begin --> */}
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="#">
            <img src="img/logo.png" alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="#">
                <i className="fa fa-heart"></i> <span>1</span>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          {/* <div className="header__top__right__language">
            <img src="img/language.png" alt="" />
            <div>English</div>
            <span className="arrow_carrot-down"></span>
            <ul>
              <li>
                <a href="#">Spanis</a>
              </li>
              <li>
                <a href="#">English</a>
              </li>
            </ul>
          </div> */}
          <div className="header__top__right__auth">
            <a href="#">
              <i className="fa fa-user"></i> Login
            </a>
          </div>
        </div>
        <nav className="humberger__menu__nav mobile-menu">
          <ul>
            <li className="active">
              <a href="./index.html">Home</a>
            </li>
            <li>
              <a href="./shop-grid.html">Shop</a>
            </li>
            <li>
              <a href="#">Pages</a>
              <ul className="header__menu__dropdown">
                <li>
                  <a href="./shop-details.html">Shop Details</a>
                </li>
                <li>
                  <a href="./shoping-cart.html">Shoping Cart</a>
                </li>
                <li>
                  <a href="./checkout.html">Check Out</a>
                </li>
                <li>
                  <a href="./blog-details.html">Blog Details</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="./blog.html">Blog</a>
            </li>
            <li>
              <a href="./contact.html">Contact</a>
            </li>
          </ul>
        </nav>
        <div id="mobile-menu-wrap"></div>
        <div className="header__top__right__social">
          <a href="#">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          {/* <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-pinterest-p"></i>
          </a> */}
        </div>
        <div className="humberger__menu__contact">
          <ul>
            <li>
              <i className="fa fa-envelope"></i> hello@colorlib.com
            </li>
            <li>Free Shipping for all Order of $99</li>
          </ul>
        </div>
      </div>
      {/* <!-- Humberger End -->

    <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> admin@just-buy.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="#">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-twitter"></i>
                    </a>
                    {/* <a href="#">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="#">
                      <i className="fa fa-pinterest-p"></i>
                    </a> */}
                  </div>
                  {/* <div className="header__top__right__language"> */}
                  {/* <img src="img/language.png" alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="#">Spanis</a>
                      </li>
                      <li>
                        <a href="#">English</a>
                      </li>
                    </ul>
                  </div> */}
                  <div className="header__top__right__auth">
                    <a href="#">
                      <i className="fa fa-user"></i> Login
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="header__logo">
                <a href="./index.html">
                  <img src="img/logo.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              {/* <nav className="header__menu">
                <ul>
                  <li className="active">
                    <a href="./index.html">Home</a>
                  </li>
                  <li>
                    <a href="./shop-grid.html">Shop</a>
                  </li>
                  <li>
                    <a href="#">Pages</a>
                    <ul className="header__menu__dropdown">
                      <li>
                        <a href="./shop-details.html">Shop Details</a>
                      </li>
                      <li>
                        <a href="./shoping-cart.html">Shoping Cart</a>
                      </li>
                      <li>
                        <a href="./checkout.html">Check Out</a>
                      </li>
                      <li>
                        <a href="./blog-details.html">Blog Details</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="./blog.html">Blog</a>
                  </li>
                  <li>
                    <a href="./contact.html">Contact</a>
                  </li>
                </ul>
              </nav>*/}
            </div>
            {/* Shopping Cart details */}
            <div className="col-lg-3">
              {/* <div className="header__cart">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div> */}
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End -->

    <!-- Hero Section Begin --> */}
      <section className="hero">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  {/* <i className="fa fa-bars"></i> */}
                  <span>All departments</span>
                </div>
                <ul>
                  {[
                    { id: "1", name: "Meats & Seafood", icon: <TbMeat /> },
                    { id: "2", name: "Grocery", icon: <TbCarrot /> },
                    { id: "3", name: "Breakfast & Dairy", icon: <TbEggs /> },
                    { id: "4", name: "Bakery & Snacks", icon: <BiCookie /> },
                    { id: "5", name: "Frozen Foods", icon: <TbSnowflake /> },
                    { id: "6", name: "Fruits & Vegetables", icon: <TbApple /> },
                  ].map((each) => (
                    <li key={each.id}>
                      <div>{each.icon}</div>
                      <a href="#">{each.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    {/* <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div> */}
                    <input type="text" placeholder="Search for Products" />
                    <button type="submit" className="site-btn">
                      <TbSearch size={"24px"} />
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i>
                      <VscAccount size={"28px"} />
                    </i>
                  </div>
                  <div className="hero__search__phone__icon">
                    <i>
                      <IoCartOutline size={"32px"} />
                    </i>
                  </div>
                </div>
              </div>
              <div style={{border:"1px solid #ebebeb",borderRadius:"12px",padding:"10px"}}>
                <div className="">
                  {/* <div className="product__discount">
                <div className="section-title product__discount__title">
                  <h2>Sale Off</h2>
                </div>
                <div className="row">
                  <div className="product__discount__slider owl-carousel">
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-1.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-2.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Vegetables</span>
                          <h5>
                            <a href="">Vegetables’package</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-3.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="">Mixed Fruitss</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-4.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-5.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="product__discount__item">
                        <div
                          className="product__discount__item__pic set-bg"
                          style={{
                            backgroundImage: `url(${require("../assets/img/product/discount/pd-6.jpg")})`,
                          }}
                        >
                          <div className="product__discount__percent">-20%</div>
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
                        <div className="product__discount__item__text">
                          <span>Dried Fruit</span>
                          <h5>
                            <a href="">Raisin’n’nuts</a>
                          </h5>
                          <div className="product__item__price">
                            $30.00 <span>$36.00</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
                  <div style={{width:"100%",padding:"20px"}}>
                    <div className="row">
                      <div className="col-lg-4 col-md-5">
                        <div className="filter__sort">
                          <span>Sort By</span>
                          <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-4">
                        <div className="filter__found">
                          <h6>
                            <span>16</span> Products found
                          </h6>
                        </div>
                      </div>
                      <div className="col-lg-4 col-md-3">
                        <div className="filter__option">
                          <span className="icon_grid-2x2"></span>
                          <span className="icon_ul"></span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div
                      className="row"
                      style={{
                        width: "900px",
                        "overflow-y": "scroll",
                        position: "relative",
                        height: "500px",
                      }}
                    >
                      {dummyData.map((value) => (
                        <div
                          style={{
                            width: "200px",
                            display: "flex",
                            justifyContent: "center",
                            padding: "5px",
                          }}
                        >
                          <FeaturedItem data={value} />
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="product__pagination">
                    <a href="">1</a>
                    <a href="">2</a>
                    <a href="">3</a>
                    <a href="">
                      <i className="fa fa-long-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End -->

    <!-- Categories Section Begin --> */}
      <section className="categories">
        <div className="container">
          <div className="row">
            <div className="categories__slider owl-carousel">
              {/* <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-1.jpg"
                >
                  <h5>
                    <a href="#">Fresh Fruit</a>
                  </h5>
                </div> */}
              {/* </div> */}
              {/* <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-2.jpg"
                >
                  <h5>
                    <a href="#">Dried Fruit</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-3.jpg"
                >
                  <h5>
                    <a href="#">Vegetables</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-4.jpg"
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
              <div className="col-lg-3">
                <div
                  className="categories__item set-bg"
                  data-setbg="img/categories/cat-5.jpg"
                >
                  <h5>
                    <a href="#">drink fruits</a>
                  </h5>
                </div>
              </div>
            </div> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Categories Section End -->

    <!-- Featured Section Begin --> */}
      {/* <section className="featured spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title">
                <h2>Featured Product</h2>
              </div>
              <div className="featured__controls">
                <ul>
                  <li className="active" data-filter="*">
                    All
                  </li>
                  <li data-filter=".oranges">Oranges</li>
                  <li data-filter=".fresh-meat">Fresh Meat</li>
                  <li data-filter=".vegetables">Vegetables</li>
                  <li data-filter=".fastfood">Fastfood</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row featured__filter">
            <div className="col-lg-3 col-md-4 col-sm-6 mix "></div>

            <div className="col-lg-3 col-md-4 col-sm-6 mix fresh-meat vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-7.jpg"
                >
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
            <div className="col-lg-3 col-md-4 col-sm-6 mix fastfood vegetables">
              <div className="featured__item">
                <div
                  className="featured__item__pic set-bg"
                  data-setbg="img/featured/feature-8.jpg"
                >
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
          </div>
        </div>
      </section> */}
      {/* <!-- Featured Section End -->

    <!-- Banner Begin --> */}
      {/* <div className="banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-1.jpg" alt="" />
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6">
              <div className="banner__pic">
                <img src="img/banner/banner-2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- Banner End -->

    <!-- Latest Product Section Begin --> */}
      {/* <section className="latest-product spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Latest Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Top Rated Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="latest-product__text">
                <h4>Review Products</h4>
                <div className="latest-product__slider owl-carousel">
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                  <div className="latest-prdouct__slider__item">
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-1.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-2.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                    <a href="#" className="latest-product__item">
                      <div className="latest-product__item__pic">
                        <img src="img/latest-product/lp-3.jpg" alt="" />
                      </div>
                      <div className="latest-product__item__text">
                        <h6>Crab Pool Security</h6>
                        <span>$30.00</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>  */}
      {/* <!-- Latest Product Section End -->

    <!-- Blog Section Begin --> */}
      {/* <section className="from-blog spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title from-blog__title">
                <h2>From The Blog</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-1.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Cooking tips make cooking simple</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-2.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">6 ways to prepare breakfast for 30</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-6">
              <div className="blog__item">
                <div className="blog__item__pic">
                  <img src="img/blog/blog-3.jpg" alt="" />
                </div>
                <div className="blog__item__text">
                  <ul>
                    <li>
                      <i className="fa fa-calendar-o"></i> May 4,2019
                    </li>
                    <li>
                      <i className="fa fa-comment-o"></i> 5
                    </li>
                  </ul>
                  <h5>
                    <a href="#">Visit the clean farm in the US</a>
                  </h5>
                  <p>
                    Sed quia non numquam modi tempora indunt ut labore et dolore
                    magnam aliquam quaerat{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- Blog Section End -->

    <!-- Footer Section Begin --> */}
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img src="img/logo.png" alt="" />
                  </a>
                </div>
                <ul>
                  <li>Address: 60-49 Road 11378 New York</li>
                  <li>Phone: +65 11.188.888</li>
                  <li>Email: hello@colorlib.com</li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-1">
              <div className="footer__widget">
                <h6>Useful Links</h6>
                <ul>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">About Our Shop</a>
                  </li>
                  <li>
                    <a href="#">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="#">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Our Sitemap</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="#">Who We Are</a>
                  </li>
                  <li>
                    <a href="#">Our Services</a>
                  </li>
                  <li>
                    <a href="#">Projects</a>
                  </li>
                  <li>
                    <a href="#">Contact</a>
                  </li>
                  <li>
                    <a href="#">Innovation</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="footer__widget">
                <h6>Join Our Newsletter Now</h6>
                <p>
                  Get E-mail updates about our latest shop and special offers.
                </p>
                <form action="#">
                  <input type="text" placeholder="Enter your mail" />
                  <button type="submit" className="site-btn">
                    Subscribe
                  </button>
                </form>
                <div className="footer__widget__social">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              {/* <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img src="img/payment-item.png" alt="" />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
