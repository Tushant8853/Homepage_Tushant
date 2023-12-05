import React from 'react'

function Body (): JSX.Element {
  return (
    <>
      <section className="bnr-2">
        <div className="container">
          <div className="welcome-area">
            <div className="welcome-text">
              <h1 className="color_grad wow fadeInUp" data-wow-delay="0.2s">Increase your online business sale with Aimee</h1>
              <p className="wow fadeInUp" data-wow-delay="0.3s">We are creating ideas! You’ll find unique design with unique ideas. So come forward. We’re just looking for your opinion</p>
              <div className="home-button mt60 xs-mt40 wow fadeInUp" data-wow-delay="0.4s">
                <a className="left" href="#">Get Started for free</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!--FEATURES TOP AREA--> */}
      <section className="features-top-area padding-top wow fadeIn" id="features">
        <span className="triangle3 floating"></span>
        <span className="triangle4 floating"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-8 col-md-offset-2 col-lg-offset-2 col-sm-12 col-xs-12">
              <div className="area-title text-center">
                <p>Our Services</p>
                <h2 className="color_grad">What We Provide?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-language-html5"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">DIGITAL MARKETING</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-checkbox-multiple-blank-outline"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">APPS DEVELOPMENT</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-file-tree"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">WEB DEVELOPMENT</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-tune"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">UI / UX DESIGN</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-package-variant"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">Unique UI Elements</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-xl-4 single-service-widget features-block wow animated fadeInUp">
              <div className="media">
                <div className="media-left">
                  <i className="material-icons pulse-shrink mdi mdi-crown"></i>
                </div>
                <div className="media-body">
                  <h2 className="box-title"><a href="#">Simplified Design</a></h2>
                  <p>Excepteur sint occaecat cupidatat non proidt, sunt in culpa qui. Nam porttitor </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--FEATURES TOP AREA END--> */}

      {/* <!--ABOUT AREA--> */}
      <section className="about-area sky-gray-bg padding-100-20 relative wow fadeIn" id="about">
        <div className="area-bg"></div>
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="about-mockup right xs-mb50">
                <div className="video-area-wrapper">
                  <div className="img-wrapper">
                    <img src="assets/img/about/about-4.png" alt="video section image" />
                    <a href="#popup-video" className="video-link open-popup-link"><i className="fa fa-play"></i></a>
                    <div id="popup-video" className="mfp-video mfp-hide">
                      <video loop controls preload="none" width="100%"><source src="http://clips.vorwaerts-gmbh.de/VfE_html5.mp4" type="video/mp4" /></video>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12 our_mission_text">
              <div className="about-content">
                <h3 className="mb30">Why We Are best for Growing Your business?</h3>
                <div className="single_goal pos_relative">
                  <i className="material-icons icon-round mdi mdi-trending-up"></i>

                  <h5 className="color_grad box-title">Our mission</h5>
                  <p>Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.</p>
                </div>

                <div className="single_goal pos_relative">
                  <i className="material-icons icon-round mdi mdi-store"></i>
                  <h5 className="color_grad box-title">Our vision</h5>
                  <p>Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.</p>
                </div>

                <div className="single_goal pos_relative">
                  <i className="material-icons icon-round mdi mdi-format-line-style"></i>
                  <h5 className="color_grad box-title">Dedicated support</h5>
                  <p>Phasellus et elit eget purus efficitur dignissim. Sed eget pretium quam, non rutrum nisi.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row flex-v-center padding-top">
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="about-content xs-mb50">
                <h3 className="mb30">A Satisfied Customer is best for business</h3>
                <p>We build your brand recognition and online reputation around keyword phrases your customers are already using (especially those that prove they’re ready to buy!) Our relationships with high-end websites mean we don’t pay for bad backlinks, nor do we acquire links that’ll harm your site or disappear within a month.</p>
                <a href="#" className="read-more mt30 inline-block">Get a Free Website Audit</a>
              </div>
            </div>
            <div className="col-md-6 col-lg-6 col-sm-12 col-xs-12">
              <div className="about-mockup">
                <img src="assets/img/about/about-4.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--ABOUT AREA END--> */}

      {/* <!--TESTMONIAL AREA TWO--> */}
      <section className="testimonials-style-two padding-100-40">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
              <div className="area-title text-center">
                <p>Testimonials</p>
                <h2>What Our Client Says?</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="testmonial-style-two">
                <div id="testimonials-slider-pager" className="hidden-xs">
                  <a href="#" className="pager-item active" data-slide-index="0"><img src="assets/img/testmonial/testmonial-1.jpg" alt="" /></a>
                  <a href="#" className="pager-item" data-slide-index="1"><img src="assets/img/testmonial/testmonial-2.jpg" alt="" /></a>
                  <a href="#" className="pager-item" data-slide-index="2"><img src="assets/img/testmonial/testmonial-3.jpg" alt="" /></a>
                  <a href="#" className="pager-item" data-slide-index="3"><img src="assets/img/testmonial/testmonial-4.jpg" alt="" /></a>
                  <a href="#" className="pager-item" data-slide-index="4"><img src="assets/img/testmonial/testmonial-5.jpg" alt="" /></a>
                  <a href="#" className="pager-item" data-slide-index="5"><img src="assets/img/testmonial/testmonial-6.jpg" alt="" /></a>
                </div>
                <div className="testimonials-slider">
                  <ul className="slider">
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-1.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Habildar</h3>
                          <p>SEO Specialist , WallFactory</p>
                        </div>
                      </div>
                    </li>
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-2.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Thaowla</h3>
                          <p>SEO Analyst , WallFactory</p>
                        </div>
                      </div>
                    </li>
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-3.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Kabila</h3>
                          <p>Support Engr. , WallFactory</p>
                        </div>
                      </div>
                    </li>
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-4.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Chiku</h3>
                          <p>Designer , WallFactory</p>
                        </div>
                      </div>
                    </li>
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-5.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Ketu</h3>
                          <p>Developer , WallFactory</p>
                        </div>
                      </div>
                    </li>
                    <li className="slide-item">
                      <div className="single-testimonials">
                        <div className="author-image">
                          <img src="assets/img/testmonial/testmonial-6.jpg" alt="" />
                        </div>
                        <div className="author-content">
                          <img src="assets/img/quotes.png" alt="" />
                          <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with</p>
                          <h3>Mr. Bala</h3>
                          <p>SEO Analyst , WallFactory</p>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--TESTMONIAL AREA TWO END--> */}

      {/* <!--PRICING AREA AREA--> */}
      <section className="pricing-area pricingTbl_common pricingTbl7 padding-100-50" id="pricing">
        <span className="floating triangle5"></span>
        <span className="floating triangle6"></span>
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
              <div className="area-title text-center">
                <p>Our Pricing</p>
                <h2>We Provide The Best Plan.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-6 single_price">
              <div className="single_tbl tbl1">
                <div className="tbl_header pos_relative">
                  <div className="overlay"></div>
                  <h3 className="font24">Personal</h3>
                  <h5>Monthly Plans</h5>
                  <h3 className="font24">$00</h3>
                </div>
                <div className="tbl_body">
                  <ul>
                    <li>Consectetuer adipiscing</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Euismod tincidunt</li>
                    <li>Laoreet dolore magna</li>
                    <li>Euismod tincidunt</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Consectetuer adipiscing</li>
                  </ul>
                </div>
                <a href="#" className="read-more radius_50">Get Started Now</a>
              </div>
            </div>

            {/* <!--table-2--> */}
            <div className="col-lg-4 col-md-6 col-sm-6 single_price">
              <div className="single_tbl tbl2">
                <div className="tbl_header pos_relative">
                  <div className="overlay"></div>
                  <h3 className="font24">Corporate</h3>
                  <h5>Monthly Plans</h5>
                  <h3 className="font24">$30</h3>
                </div>
                <div className="tbl_body">
                  <ul>
                    <li>Consectetuer adipiscing</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Euismod tincidunt</li>
                    <li>Laoreet dolore magna</li>
                    <li>Euismod tincidunt</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Consectetuer adipiscing</li>
                  </ul>
                </div>
                <a href="#" className="read-more radius_50">Get Started Now</a>
              </div>
            </div>

            {/* <!--table-3--> */}
            <div className="col-lg-4 col-md-6 col-sm-6 single_price">
              <div className="single_tbl tbl4">
                <div className="tbl_header pos_relative">
                  <div className="overlay"></div>
                  <h3 className="font24">Business</h3>
                  <h5>Monthly Plans</h5>
                  <h3 className="font24">$150</h3>
                </div>
                <div className="tbl_body">
                  <ul>
                    <li>Consectetuer adipiscing</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Euismod tincidunt</li>
                    <li>Laoreet dolore magna</li>
                    <li>Euismod tincidunt</li>
                    <li>Sed diam nonummy nibh</li>
                    <li>Consectetuer adipiscing</li>
                  </ul>
                </div>
                <a href="#" className="read-more radius_50">Get Started Now</a>
              </div>
            </div>
            {/* <!--/col--> */}
          </div>
        </div>
      </section>
      {/* <!--PRICING AREA AREA END--> */}

      {/* <!--Team AREA Start--> */}
      <section className="team-area padding-top wow fadeIn" id="team">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
              <div className="area-title text-center">
                <p>Our Team</p>
                <h2>We Have A Awesome Team.</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="row team-slider no-margin">
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding">
                <div className="team_common pos_relative">
                  <div className="member_img">
                    <a href="#"><img src="assets/img/team/1.png" alt="member image" /></a>
                  </div>
                  <div className="member_info pos_relative transition_3s">
                    <a href="#" className="d_inline pb_5">Jackie John Smith</a><br />
                    <span className="d_block transition_3s">Founder & CEO</span><br />
                    <span className="line d_block transition_3s"></span><br />
                    <a href="tel:+84846250592" className="mobile_number transition_3s">+84 846 250 592</a>

                    <ul className="social_contact">
                      <li><a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" title="Vimeo" target="_blank"><i className="fa fa-vimeo"></i></a></li>
                      <li><a href="#" title="Google-plus" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding">
                <div className="team_common pos_relative">
                  <div className="member_img">
                    <a href="#"><img src="assets/img/team/2.png" alt="member image" /></a>
                  </div>
                  <div className="member_info pos_relative transition_3s">
                    <a href="#" className="d_inline pb_5">Jackie John Smith</a><br />
                    <span className="d_block transition_3s">Founder & CEO</span><br />
                    <span className="line d_block transition_3s"></span><br />
                    <a href="tel:+84846250592" className="mobile_number transition_3s">+84 846 250 592</a>

                    <ul className="social_contact">
                      <li><a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" title="Vimeo" target="_blank"><i className="fa fa-vimeo"></i></a></li>
                      <li><a href="#" title="Google-plus" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12 no-padding">
                <div className="team_common pos_relative">
                  <div className="member_img">
                    <a href="#"><img src="assets/img/team/3.png" alt="member image" /></a>
                  </div>
                  <div className="member_info pos_relative transition_3s">
                    <a href="#" className="d_inline pb_5">Jackie John Smith</a><br />
                    <span className="d_block transition_3s">Founder & CEO</span><br />
                    <span className="line d_block transition_3s"></span><br />
                    <a href="tel:+84846250592" className="mobile_number transition_3s">+84 846 250 592</a>

                    <ul className="social_contact">
                      <li><a href="#" title="Facebook" target="_blank"><i className="fa fa-facebook"></i></a></li>
                      <li><a href="#" title="Twitter" target="_blank"><i className="fa fa-twitter"></i></a></li>
                      <li><a href="#" title="Vimeo" target="_blank"><i className="fa fa-vimeo"></i></a></li>
                      <li><a href="#" title="Google-plus" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--Team AREA END--> */}

      {/* <!--BLOG AREA--> */}
      <section className="blog-area padding-100-40 wow fadeIn" id="news">
        <div className="container">
          <div className="row">
            <div className="col-md-6 col-lg-6 col-md-offset-3 col-lg-offset-3 col-sm-12 col-xs-12">
              <div className="area-title text-center">
                <p>Todays News</p>
                <h2>See our latest news</h2>
              </div>
            </div>
          </div>
          <div className="row blog-slider">
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="single-blog-item mb50 shadow">
                <div className="blog-thumb">
                  <a href="blog.html"><img src="assets/img/blog/blog-1.jpg" alt="" /></a>
                </div>
                <div className="post-item-content padding30">
                  <div className="col-lg-9 col-md-12">
                    <p><i className="fa fa-user"></i> <a href="#" className="link">Moga</a></p>
                    <a href="#">
                      <h5>Ten Secrets You Will Not Want To Know</h5>
                    </a>
                    <a className="read-more" href="blog.html">Read More</a>
                  </div>
                  <div className="col-lg-3 text-center">
                    <h2 className="post-date" data-titles="29">29</h2>
                    <span>October</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="single-blog-item mb50 shadow">
                <div className="blog-thumb">
                  <a href="blog.html"><img src="assets/img/blog/blog-2.jpg" alt="" /></a>
                </div>
                <div className="post-item-content padding30">
                  <div className="col-lg-9 col-md-12">
                    <p><i className="fa fa-user"></i> <a href="#" className="link">Moga</a></p>
                    <a href="#">
                      <h5>Ten Secrets You Will Not Want To Know</h5>
                    </a>
                    <a className="read-more" href="blog.html">Read More</a>
                  </div>
                  <div className="col-lg-3 text-center">
                    <h2 className="post-date" data-titles="29">29</h2>
                    <span>October</span>
                  </div>

                </div>
              </div>
            </div>
            <div className="col-md-6 col-lg-4 col-sm-6 col-xs-12">
              <div className="single-blog-item mb50 shadow">
                <div className="blog-thumb">
                  <a href="blog.html"><img src="assets/img/blog/blog-3.jpg" alt="" /></a>
                </div>
                <div className="post-item-content padding30">
                  <div className="col-lg-9 col-md-12">
                    <p><i className="fa fa-user"></i> <a href="#" className="link">Moga</a></p>
                    <a href="#">
                      <h5>Ten Secrets You Will Not Want To Know</h5>
                    </a>
                    <a className="read-more" href="blog.html">Read More</a>
                  </div>
                  <div className="col-lg-3 text-center">
                    <h2 className="post-date" data-titles="29">29</h2>
                    <span>October</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--BLOG AREA END--> */}

      {/* <!--CLIENT AREA--> */}
      <section className="client-area padding-100-50 wow fadeIn">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="client-list client-slider">
                <div className="single-client"><img src="assets/img/client/client-6.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-7.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-8.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-9.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-10.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-11.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-12.png" alt="" /></div>
                <div className="single-client"><img src="assets/img/client/client-13.png" alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!--CLIENT AREA END--> */}

      {/* <!--Contact area Start --> */}

      <div className="container" id="contact">
        <div className="row contact-form">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-12">
                <div className="area-title text-center">
                  <h2>Contact</h2>
                </div>
                <br />
              </div>
              <div className="col-md-6">
                <input className="form-control" type="text" placeholder="Name" />
              </div>
              <div className="col-md-6">
                <input type="email" className="form-control" placeholder="Enter email" />
              </div>
              <div className="col-md-12">
                <textarea className="form-control" id="exampleFormControlTextarea1" rows={3 as number} ></textarea>
              </div>
              <div className="col-md-12">
                <button className="read-more" type="submit">Submit</button>
              </div>
            </div>
          </div>
          <div className="col-md-5 contact_details">
            <div className="contact-address">
              <i className="fa fa-map fa-2x"></i>
              <h5>Location</h5>
              <p>Albuquerque, New Mexico,</p><br />
            </div>
            <div className="contact-address">
              <i className="fa fa-phone fa-2x"></i>
              <h5>Contact Number</h5>
              <p>+11288378978</p>
            </div>
            <div className="contact-address">
              <i className="fa fa-globe fa-2x"></i>
              <h5>Online</h5>
              <p>Web: https://example.com</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Body
