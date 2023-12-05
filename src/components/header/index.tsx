import React from 'react'

function Header (): JSX.Element {
  return (
        <>
            <div className="preeloader">
                <div className="preloader-spinner"></div>
            </div>

            <a href="#scroolup" className="scrolltotop"><i className="fa fa-long-arrow-up"></i></a>

            <header className="top-area home3_top_area" id="home">
                <span className="floating triangle1"></span>
                <div className="header-top-area" id="scroolup">

                    <div className="mainmenu-area" id="mainmenu-area">
                        <div className="mainmenu-area-bg"></div>
                        <nav className="navbar">
                            <div className="container">
                                <div className="navbar-header">
                                    <a href="/" className="navbar-brand"><img src="assets/logo/logo.png" alt="logo" /></a>
                                </div>
                                <div className="mainmenu-and-right-button">
                                    <div id="main-nav" className="stellarnav">
                                        <ul id="nav" className="nav navbar-nav">
                                            <li className="active"><a href="/">Home</a>
                                            </li>
                                            <li><a href="#features">Service</a></li>
                                            <li><a href="#about">About Us</a></li>
                                            <li><a href="#pricing">Pricing</a></li>
                                            <li><a href="#news">Blog</a></li>
                                            <li><a href="#contact">Contact</a></li>
                                            <li><a href="#">Pages</a>
                                                <ul>
                                                    <li><a href="blog.html">BLog</a></li>
                                                    <li><a href="single-blog.html">Single Blog</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
  )
}

export default Header
