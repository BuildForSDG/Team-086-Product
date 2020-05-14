import React from 'react';

import Auxiliary from "../../../hoc/Auxiliary";
import about_1 from "../../../assets/images/about_1.jpg";
import hero_2 from "../../../assets/images/hero_2.jpg";
import img_1 from "../../../assets/images/img_1.jpg";
import img_2 from "../../../assets/images/img_2.jpg";
import img_3 from "../../../assets/images/img_3.jpg";
import model_1 from "../../../assets/images/model_1.png";
import model_1_bg from "../../../assets/images/model_1_bg.jpg";
import model_2 from "../../../assets/images/model_2.png";
import model_2_bg from "../../../assets/images/model_2_bg.jpg";
import model_3 from "../../../assets/images/model_3.png";
import model_3_bg from "../../../assets/images/model_3_bg.jpg";
import model_4 from "../../../assets/images/model_4.png";
import model_4_bg from "../../../assets/images/model_4_bg.jpg";
import model_5 from "../../../assets/images/model_5.png";
import model_5_bg from "../../../assets/images/model_5_bg.jpg";
import person_1 from "../../../assets/images/person_1.jpg";
import person_2 from "../../../assets/images/person_2.jpg";
import person_3 from "../../../assets/images/person_3.jpg";
import person_4 from "../../../assets/images/person_4.jpg"; 
import product_1 from "../../../assets/images/product_1.png";
import product_1_bg from "../../../assets/images/product_1_bg.jpg";

const Body = () => (
  <Auxiliary>
    <div
      className="site-blocks-cover overlay"
      style={{
        backgroundImage: `url(https://taxaide.com.ng/wp-content/uploads/2019/12/images-1-1-678x367.jpg)`,
      }}
      data-aos="fade"
      data-stellar-background-ratio="0.5"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12" data-aos="fade-up" data-aos-delay="400">
            <div className="row mb-4">
              <div className="col-md-10">
                <h1>Manage Your Business</h1> <br />
                <h1 style={{ fontSize: "4rem" }}>With Us</h1>
                <p className="mb-5 lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Laboriosam assumenda ea quo cupiditate facere deleniti fuga
                  officia.
                </p>
                <div>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="btn btn-white btn-outline-white py-3 px-5 rounded-0 mb-lg-0 mb-2 d-block d-sm-inline-block"
                  >
                    Register Now
                  </a>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="btn btn-white py-3 px-5 rounded-0 d-block d-sm-inline-block"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section" id="products-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6 text-center">
            <h3 className="section-sub-title">Popular Products</h3>
            <h2 className="section-title mb-3">Our Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img
                  src={
                    "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/05/30165503/accounting-error.jpg"
                  }
                  alt="Image"
                  className="img-fluid"
                />
              </figure>
              <div className="px-4">
                <h3>
                  <a href="#" rel="noopener noreferrer">
                    Accounting Module
                  </a>
                </h3>
                <div>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="btn btn-black mr-1 rounded-0"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img
                  src={
                    "https://www.unleashedsoftware.com/assets/uploads/2018/09/manufacturing-inventory.jpg"
                  }
                  alt="Image"
                  className="img-fluid"
                />
              </figure>
              <div className="px-4">
                <h3>
                  <a href="#" rel="noopener noreferrer">
                    Inventory System
                  </a>
                </h3>
                <div>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="btn btn-black mr-1 rounded-0"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mb-5">
            <div className="product-item">
              <figure>
                <img
                  src={
                    "https://www.projectmanagersociety.com/wp-content/uploads/2020/02/Free-Online-Course-How-to-Sell-Anything-to-Anyone.jpg"
                  }
                  alt="Image"
                  className="img-fluid"
                />
              </figure>
              <div className="px-4">
                <h3>
                  <a href="#" rel="noopener noreferrer">
                    Sales Tracker
                  </a>
                </h3>
                <div>
                  <a
                    href="#"
                    rel="noopener noreferrer"
                    className="btn btn-black mr-1 rounded-0"
                  >
                    Start
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div
      className="site-blocks-cover inner-page-cover overlay get-notification"
      style={{
        backgroundImage: `url(https://guardian.ng/wp-content/uploads/2019/03/Small-and-Medium-Enterprises-SMEs.jpg)`,
        backgroundAttachment: "fixed",
      }}
      data-aos="fade"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <form className="col-md-7" method="post">
            <h2>Get notified on each updates.</h2>
            <div className="d-flex mb-4">
              <input
                type="text"
                className="form-control rounded-0"
                placeholder="Enter your email address"
              />
              <input
                type="submit"
                className="btn btn-white btn-outline-white rounded-0"
                value="Subscribe"
              />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
              commodi veniam doloremque ducimus tempora.
            </p>
          </form>
        </div>
      </div>
    </div>

    <div className="site-section bg-light">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div className="col-md-6 text-center">
            <h3 className="section-sub-title">Awesome Products</h3>
            <h2 className="section-title mb-3">Future Products</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae nostrum natus excepturi fuga ullam accusantium vel ut
              eveniet aut consequatur laboriosam ipsam.
            </p>
          </div>
        </div>
        <div className="bg-white py-4 mb-4">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0">
              <img
                src={
                  "https://www.business.com/images/content/5ca/3ca4f5a215e8a458b4576/0-800-"
                }
                alt="Image"
                className="img-fluid"
              />
            </div>

            <div className="col-md-5 ml-auto product-title-wrap">
              <span className="number">01.</span>
              <h3 className="text-black mb-4 font-weight-bold">
                About This Product
              </h3>
              <p className="mb-4">
                Et tempora id nostrum saepe amet doloribus deserunt totam
                officiis cupiditate asperiores quasi accusantium voluptatum
                dolorem quae sapiente voluptatem ratione odio iure blanditiis
                earum fuga molestiae alias dicta perferendis inventore!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus soluta assumenda sed optio, error at?
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white py-4">
          <div className="row mx-4 my-4 product-item-2 align-items-start">
            <div className="col-md-6 mb-5 mb-md-0 order-1 order-md-2">
              <img
                src={
                  "https://d1dh93s7n44ml6.cloudfront.net/blog/wp-content/uploads/2017/05/03090910/Show-off-your-invoice.jpg"
                }
                alt="Image"
                className="img-fluid"
              />
            </div>

            <div className="col-md-5 mr-auto product-title-wrap order-2 order-md-1">
              <span className="number">02.</span>
              <h3 className="text-black mb-4 font-weight-bold">
                About This Product
              </h3>
              <p className="mb-4">
                Et tempora id nostrum saepe amet doloribus deserunt totam
                officiis cupiditate asperiores quasi accusantium voluptatum
                dolorem quae sapiente voluptatem ratione odio iure blanditiis
                earum fuga molestiae alias dicta perferendis inventore!
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Ducimus soluta assumenda sed optio, error at?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section" id="about-section">
      <div className="container">
        <div className="row align-items-lg-center">
          <div className="col-md-8 mb-5 mb-lg-0 position-relative">
            <img src={about_1} className="img-fluid" alt="Image" />
            <div className="experience">
              <span className="year">Trusted Merchant</span>
              <span className="caption">htmlFor 50 years</span>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <h3 className="section-sub-title">Merchant Company</h3>
            <h2 className="section-title mb-3">About Us</h2>
            <p className="mb-4">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui fuga
              ipsa, repellat blanditiis nihil, consectetur. Consequuntur eum
              inventore, rem maxime, nisi excepturi ipsam libero ratione
              adipisci alias eius vero vel!
            </p>
            <p>
              <a
                href="#"
                rel="noopener noreferrer"
                className="btn btn-black btn-black--hover rounded-0"
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section border-bottom" id="team-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h2 className="section-title mb-3">Team</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0"
            data-aos="fade"
            data-aos-delay="100"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U013EQWSLP2-630bb4c0d9ab-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Femi Akinsiku</h3>
              <p className="position text-muted">Program Assistant</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0"
            data-aos="fade"
            data-aos-delay="200"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U012GS1FU1Z-cecb2ef6447d-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Herve Nkurikiyimfura</h3>
              <p className="position text-muted">Mentor</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U012FGN42LU-10661e71280c-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Oluwatosin</h3>
              <p className="position text-muted">TTL</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0 mt-3"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U012A7A2JQJ-b5b39bdfa431-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Michael Etokakpan</h3>
              <p className="position text-muted">Backend</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0 mt-3"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U011U7DPGF9-22e18d2cd855-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Alekwe Osamwonyi</h3>
              <p className="position text-muted">Frontend</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-5 mb-lg-0 mt-3"
            data-aos="fade"
            data-aos-delay="300"
          >
            <div className="person text-center">
              <img
                src={
                  "https://ca.slack-edge.com/T012E45TW0Z-U012AEUQNUT-b991e167b89d-512"
                }
                alt="Image"
                className="img-fluid rounded w-75 mb-3"
              />
              <h3>Amaugo Somto</h3>
              <p className="position text-muted">Frontend</p>
              <p className="mb-4">
                Nisi at consequatur unde molestiae quidem provident voluptatum
                deleniti quo iste error eos est praesentium distinctio
                cupiditate tempore suscipit inventore deserunt tenetur.
              </p>
              <ul className="ul-social-circle">
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-facebook"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-twitter"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-linkedin"></span>
                  </a>
                </li>
                <li>
                  <a href="#" rel="noopener noreferrer">
                    <span className="icon-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section bg-light" id="services-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">Our Services</h3>
            <h2 className="section-title mb-3">We Offer Services</h2>
          </div>
        </div>
        <div className="row align-items-stretch">
          <div className="col-md-6 col-lg-4 mb-4 mb-lg-4" data-aos="fade-up">
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-pie_chart"></span>
              </div>
              <div>
                <h3>Business Consulting</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-backspace"></span>
              </div>
              <div>
                <h3>Market Analysis</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-av_timer"></span>
              </div>
              <div>
                <h3>User Monitoring</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>

          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-beenhere"></span>
              </div>
              <div>
                <h3>Seller Consulting</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-business_center"></span>
              </div>
              <div>
                <h3>Financial Investment</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
          <div
            className="col-md-6 col-lg-4 mb-4 mb-lg-4"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <div className="unit-4 d-flex">
              <div className="unit-4-icon mr-4">
                <span className="text-primary icon-cloud_done"></span>
              </div>
              <div>
                <h3>Financial Management</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Perferendis quis molestiae vitae eligendi at.
                </p>
                <p>
                  <a href="#">Learn More</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section testimonial-wrap" id="testimonials-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">People Says</h3>
            <h2 className="section-title mb-3">Testimonials</h2>
          </div>
        </div>
      </div>
      <div className="slide-one-item home-slider owl-carousel">
        <div>
          <div className="testimonial">
            <figure className="mb-4 d-block align-items-center justify-content-center">
              <div>
                <img
                  src={person_3}
                  alt="Image"
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black">
              <strong>John Smith</strong>
            </p>
          </div>
        </div>
        <div>
          <div className="testimonial">
            <figure className="mb-4 d-block align-items-center justify-content-center">
              <div>
                <img
                  src={person_2}
                  alt="Image"
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>

            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>

            <p className="text-black">
              <strong>Robert Aguilar</strong>
            </p>
          </div>
        </div>

        <div>
          <div className="testimonial">
            <figure className="mb-4 d-block align-items-center justify-content-center">
              <div>
                <img
                  src={person_4}
                  alt="Image"
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black">
              <strong>Roger Spears</strong>
            </p>
          </div>
        </div>

        <div>
          <div className="testimonial">
            <figure className="mb-4 d-block align-items-center justify-content-center">
              <div>
                <img
                  src={person_1}
                  alt="Image"
                  className="w-100 img-fluid mb-3"
                />
              </div>
            </figure>
            <blockquote className="mb-3">
              <p>
                &ldquo;Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur unde reprehenderit aperiam quaerat fugiat
                repudiandae explicabo animi minima fuga beatae illum eligendi
                incidunt consequatur. Amet dolores excepturi earum unde
                iusto.&rdquo;
              </p>
            </blockquote>
            <p className="text-black">
              <strong>Kyle McDonald</strong>
            </p>
          </div>
        </div>
      </div>
    </div>

    <div className="site-section bg-light" id="contact-section">
      <div className="container">
        <div className="row mb-5">
          <div className="col-12 text-center">
            <h3 className="section-sub-title">Contact Form</h3>
            <h2 className="section-title mb-3">Get In Touch</h2>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-7 mb-5">
            <form action="#" className="p-5 bg-white">
              <h2 className="h4 text-black mb-5">Contact Form</h2>

              <div className="row form-group">
                <div className="col-md-6 mb-3 mb-md-0">
                  <label className="text-black" htmlFor="fname">
                    First Name
                  </label>
                  <input
                    type="text"
                    id="fname"
                    className="form-control rounded-0"
                  />
                </div>
                <div className="col-md-6">
                  <label className="text-black" htmlFor="lname">
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lname"
                    className="form-control rounded-0"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="email">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-control rounded-0"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="subject">
                    Subject
                  </label>
                  <input
                    type="subject"
                    id="subject"
                    className="form-control rounded-0"
                  />
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <label className="text-black" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="7"
                    className="form-control rounded-0"
                    placeholder="Write your notes or questions here..."
                  ></textarea>
                </div>
              </div>

              <div className="row form-group">
                <div className="col-md-12">
                  <input
                    type="submit"
                    value="Send Message"
                    className="btn btn-black rounded-0 py-3 px-4"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

    <footer className="site-footer bg-white">
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div className="row">
              <div className="col-md-5">
                <h2 className="footer-heading mb-4">About Us</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
                  facere laudantium magnam voluptatum autem. Amet aliquid
                  nesciunt veritatis aliquam.
                </p>
              </div>
              <div className="col-md-3 ">
                <h2 className="footer-heading mb-4">Quick Links</h2>
                <ul className="list-unstyled">
                  <li>
                    <a href="#" rel="noopener noreferrer">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer">
                      Services
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer">
                      Testimonials
                    </a>
                  </li>
                  <li>
                    <a href="#" rel="noopener noreferrer">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-4">
                <h2 className="footer-heading mb-4">Follow Us</h2>
                <a href="#" rel="noopener noreferrer" className="pl-0 pr-3">
                  <span className="icon-facebook"></span>
                </a>
                <a href="#" rel="noopener noreferrer" className="pl-3 pr-3">
                  <span className="icon-twitter"></span>
                </a>
                <a href="#" rel="noopener noreferrer" className="pl-3 pr-3">
                  <span className="icon-instagram"></span>
                </a>
                <a href="#" rel="noopener noreferrer" className="pl-3 pr-3">
                  <span className="icon-linkedin"></span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-md-3 ml-auto">
            <h2 className="footer-heading mb-4">Featured Product</h2>
            <a href="#" rel="noopener noreferrer">
              <img
                src={
                  "https://s3.amazonaws.com/pas-wordpress-media/content/uploads/2018/05/30165503/accounting-error.jpg"
                }
                alt="Image"
                className="img-fluid mb-3"
              />
            </a>
            <h4 className="h5">Accounting Module</h4>
          </div>
        </div>
        <div className="row pt-5 mt-5 text-center">
          <div className="col-md-12">
            <div className="border-top pt-5">
              <p>
                Copyright &copy;
                <script>document.write(new Date().getFullYear());</script> All
                rights reserved | This App is made with{" "}
                <i className="icon-heart" aria-hidden="true"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Auxiliary>
);

export default Body;
