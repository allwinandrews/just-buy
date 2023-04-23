import React from "react";

export default function Details() {
  return (
    <>
      {/* <!-- Humberger Begin --> */}
      <div className="humberger__menu__overlay"></div>
      <div className="humberger__menu__wrapper">
        <div className="humberger__menu__logo">
          <a href="">
            <img src={require("../assets/img/logo.png")} alt="" />
          </a>
        </div>
        <div className="humberger__menu__cart">
          <ul>
            <li>
              <a href="">
                <i className="fa fa-heart"></i> <span>1</span>
              </a>
            </li>
            <li>
              <a href="">
                <i className="fa fa-shopping-bag"></i> <span>3</span>
              </a>
            </li>
          </ul>
          <div className="header__cart__price">
            item: <span>$150.00</span>
          </div>
        </div>
        <div className="humberger__menu__widget">
          <div className="header__top__right__language">
            <img src={require("../assets/img/language.png")} alt="" />
            <div>English</div>
            <span className="arrow_carrot-down"></span>
            <ul>
              <li>
                <a href="">Spanis</a>
              </li>
              <li>
                <a href="">English</a>
              </li>
            </ul>
          </div>
          <div className="header__top__right__auth">
            <a href="">
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
              <a href="">Pages</a>
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
          <a href="">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="">
            <i className="fa fa-pinterest-p"></i>
          </a>
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
      {/* <!-- Humberger End --> */}

      {/* <!-- Header Section Begin --> */}
      <header className="header">
        <div className="header__top">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="header__top__left">
                  <ul>
                    <li>
                      <i className="fa fa-envelope"></i> hello@colorlib.com
                    </li>
                    <li>Free Shipping for all Order of $99</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="header__top__right">
                  <div className="header__top__right__social">
                    <a href="">
                      <i className="fa fa-facebook"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-twitter"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-linkedin"></i>
                    </a>
                    <a href="">
                      <i className="fa fa-pinterest-p"></i>
                    </a>
                  </div>
                  <div className="header__top__right__language">
                    <img src={require("../assets/img/language.png")} alt="" />
                    <div>English</div>
                    <span className="arrow_carrot-down"></span>
                    <ul>
                      <li>
                        <a href="">Spanis</a>
                      </li>
                      <li>
                        <a href="">English</a>
                      </li>
                    </ul>
                  </div>
                  <div className="header__top__right__auth">
                    <a href="">
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
                  <img src={require("../assets/img/logo.png")} alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <nav className="header__menu">
                <ul>
                  <li>
                    <a href="./index.html">Home</a>
                  </li>
                  <li className="active">
                    <a href="./shop-grid.html">Shop</a>
                  </li>
                  <li>
                    <a href="">Pages</a>
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
            </div>
            <div className="col-lg-3">
              <div className="header__cart">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa fa-heart"></i> <span>1</span>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa fa-shopping-bag"></i> <span>3</span>
                    </a>
                  </li>
                </ul>
                <div className="header__cart__price">
                  item: <span>$150.00</span>
                </div>
              </div>
            </div>
          </div>
          <div className="humberger__open">
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </header>
      {/* <!-- Header Section End --> */}

      {/* <!-- Hero Section Begin --> */}
      <section className="hero hero-normal">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="hero__categories">
                <div className="hero__categories__all">
                  <i className="fa fa-bars"></i>
                  <span>All departments</span>
                </div>
                <ul>
                  <li>
                    <a href="">Fresh Meat</a>
                  </li>
                  <li>
                    <a href="">Vegetables</a>
                  </li>
                  <li>
                    <a href="">Fruit & Nut Gifts</a>
                  </li>
                  <li>
                    <a href="">Fresh Berries</a>
                  </li>
                  <li>
                    <a href="">Ocean Foods</a>
                  </li>
                  <li>
                    <a href="">Butter & Eggs</a>
                  </li>
                  <li>
                    <a href="">Fastfood</a>
                  </li>
                  <li>
                    <a href="">Fresh Onion</a>
                  </li>
                  <li>
                    <a href="">Papayaya & Crisps</a>
                  </li>
                  <li>
                    <a href="">Oatmeal</a>
                  </li>
                  <li>
                    <a href="">Fresh Bananas</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-9">
              <div className="hero__search">
                <div className="hero__search__form">
                  <form action="#">
                    <div className="hero__search__categories">
                      All Categories
                      <span className="arrow_carrot-down"></span>
                    </div>
                    <input type="text" placeholder="What do yo u need?" />
                    <button type="submit" className="site-btn">
                      SEARCH
                    </button>
                  </form>
                </div>
                <div className="hero__search__phone">
                  <div className="hero__search__phone__icon">
                    <i className="fa fa-phone"></i>
                  </div>
                  <div className="hero__search__phone__text">
                    <h5>+65 11.188.888</h5>
                    <span>support 24/7 time</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Hero Section End --> */}

      {/* <!-- Breadcrumb Section Begin --> */}
      <section
        className="breadcrumb-section set-bg"
        data-setbg="../assets/img/breadcrumb.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <div className="breadcrumb__text">
                <h2>Vegetable’s Package</h2>
                <div className="breadcrumb__option">
                  <a href="./index.html">Home</a>
                  <a href="./index.html">Vegetables</a>
                  <span>Vegetable’s Package</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Breadcrumb Section End --> */}

      {/* <!-- Product Details Section Begin --> */}
      <section className="product-details spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="product__details__pic">
                <div className="product__details__pic__item">
                  <img
                    className="product__details__pic__item--large"
                    src={require("../assets/img/product/details/product-details-1.jpg")}
                    alt=""
                  />
                </div>
                <div className="product__details__pic__slider owl-carousel">
                  <img
                    data-imgbigurl="../assets/img/product/details/product-details-2.jpg"
                    src={require("../assets/img/product/details/thumb-1.jpg")}
                    alt=""
                  />
                  <img
                    data-imgbigurl="../assets/img/product/details/product-details-3.jpg"
                    src={require("../assets/img/product/details/thumb-2.jpg")}
                    alt=""
                  />
                  <img
                    data-imgbigurl="../assets/img/product/details/product-details-5.jpg"
                    src={require("../assets/img/product/details/thumb-3.jpg")}
                    alt=""
                  />
                  <img
                    data-imgbigurl="../assets/img/product/details/product-details-4.jpg"
                    src={require("../assets/img/product/details/thumb-4.jpg")}
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="product__details__text">
                <h3>Vetgetable’s Package</h3>
                <div className="product__details__rating">
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star-half-o"></i>
                  <span>(18 reviews)</span>
                </div>
                <div className="product__details__price">$50.00</div>
                <p>
                  Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
                  Vestibulum ac diam sit amet quam vehicula elementum sed sit
                  amet dui. Sed porttitor lectus nibh. Vestibulum ac diam sit
                  amet quam vehicula elementum sed sit amet dui. Proin eget
                  tortor risus.
                </p>
                <div className="product__details__quantity">
                  <div className="quantity">
                    <div className="pro-qty">
                      <input type="text" value="1" />
                    </div>
                  </div>
                </div>
                <a href="" className="primary-btn">
                  ADD TO CARD
                </a>
                <a href="" className="heart-icon">
                  <span className="icon_heart_alt"></span>
                </a>
                <ul>
                  <li>
                    <b>Availability</b> <span>In Stock</span>
                  </li>
                  <li>
                    <b>Shipping</b>{" "}
                    <span>
                      01 day shipping. <samp>Free pickup today</samp>
                    </span>
                  </li>
                  <li>
                    <b>Weight</b> <span>0.5 kg</span>
                  </li>
                  <li>
                    <b>Share on</b>
                    <div className="share">
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-instagram"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-pinterest"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="product__details__tab">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active"
                      data-toggle="tab"
                      href="#tabs-1"
                      role="tab"
                      aria-selected="true"
                    >
                      Description
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-2"
                      role="tab"
                      aria-selected="false"
                    >
                      Information
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      data-toggle="tab"
                      href="#tabs-3"
                      role="tab"
                      aria-selected="false"
                    >
                      Reviews <span>(1)</span>
                    </a>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane active" id="tabs-1" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Sed porttitor lectus nibh. Vestibulum ac
                        diam sit amet quam vehicula elementum sed sit amet dui.
                        Proin eget tortor risus.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-2" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                      <p>
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Mauris blandit aliquet
                        elit, eget tincidunt nibh pulvinar a. Cras ultricies
                        ligula sed magna dictum porta. Cras ultricies ligula sed
                        magna dictum porta. Sed porttitor lectus nibh. Mauris
                        blandit aliquet elit, eget tincidunt nibh pulvinar a.
                      </p>
                    </div>
                  </div>
                  <div className="tab-pane" id="tabs-3" role="tabpanel">
                    <div className="product__details__tab__desc">
                      <h6>Products Infomation</h6>
                      <p>
                        Vestibulum ac diam sit amet quam vehicula elementum sed
                        sit amet dui. Pellentesque in ipsum id orci porta
                        dapibus. Proin eget tortor risus. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Vestibulum ac diam
                        sit amet quam vehicula elementum sed sit amet dui. Donec
                        rutrum congue leo eget malesuada. Vivamus suscipit
                        tortor eget felis porttitor volutpat. Curabitur arcu
                        erat, accumsan id imperdiet et, porttitor at sem.
                        Praesent sapien massa, convallis a pellentesque nec,
                        egestas non nisi. Vestibulum ac diam sit amet quam
                        vehicula elementum sed sit amet dui. Vestibulum ante
                        ipsum primis in faucibus orci luctus et ultrices posuere
                        cubilia Curae; Donec velit neque, auctor sit amet
                        aliquam vel, ullamcorper sit amet ligula. Proin eget
                        tortor risus.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Product Details Section End --> */}

      {/* <!-- Related Product Section Begin --> */}
      <section className="related-product">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title related__product__title">
                <h2>Related Product</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="../assets/img/product/product-1.jpg"
                >
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
                    <a href="">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="../assets/img/product/product-2.jpg"
                >
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
                    <a href="">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="../assets/img/product/product-3.jpg"
                >
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
                    <a href="">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6">
              <div className="product__item">
                <div
                  className="product__item__pic set-bg"
                  data-setbg="../assets/img/product/product-7.jpg"
                >
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
                    <a href="">Crab Pool Security</a>
                  </h6>
                  <h5>$30.00</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- Related Product Section End --> */}

      {/* <!-- Footer Section Begin --> */}
      <footer className="footer spad">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="footer__about">
                <div className="footer__about__logo">
                  <a href="./index.html">
                    <img src={require("../assets/img/logo.png")} alt="" />
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
                    <a href="">About Us</a>
                  </li>
                  <li>
                    <a href="">About Our Shop</a>
                  </li>
                  <li>
                    <a href="">Secure Shopping</a>
                  </li>
                  <li>
                    <a href="">Delivery infomation</a>
                  </li>
                  <li>
                    <a href="">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="">Our Sitemap</a>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a href="">Who We Are</a>
                  </li>
                  <li>
                    <a href="">Our Services</a>
                  </li>
                  <li>
                    <a href="">Projects</a>
                  </li>
                  <li>
                    <a href="">Contact</a>
                  </li>
                  <li>
                    <a href="">Innovation</a>
                  </li>
                  <li>
                    <a href="">Testimonials</a>
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
                  <a href="">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-instagram"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="footer__copyright">
                <div className="footer__copyright__text">
                  <p>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                    Copyright &copy;
                    <script>
                      document.write(new Date().getFullYear());
                    </script>{" "}
                    All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart" aria-hidden="true"></i> by{" "}
                    <a href="https://colorlib.com" target="_blank">
                      Colorlib
                    </a>
                    {/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
                  </p>
                </div>
                <div className="footer__copyright__payment">
                  <img src={require("../assets/img/payment-item.png")} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* <!-- Footer Section End --> */}
    </>
  );
}
