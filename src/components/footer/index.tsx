import React from 'react'

function Footer (): JSX.Element {
  return (
    <>
    {/* <!--FOOER AREA--> */}
    <footer className="footer-area sky-gray-bg padding-bottom padding-top-50 relative wow fadeIn">
        <div className="footer-bottom-area">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-xs-12 sm-center xs-center sm-mb50 xs-mb50">
                        <div className="footer-logo mb50">
                            <a href="#"><img src="assets/img/logo.png" alt="" /></a>
                        </div>
                        <div className="footer-about">
                            <p>Aimee believes in the power of proven partnerships to grow business.</p>
                        </div>
                    </div>
                    <div className="col-md-7 col-md-offset-1 col-xs-12">
                        <div className="row">
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Pages</h4>
                                    <ul>
                                        <li><a href="#">How we work</a></li>
                                        <li><a href="#">About us</a></li>
                                        <li><a href="#">Contact us</a></li>
                                        <li><a href="#">Media</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Service</h4>
                                    <ul>
                                        <li><a href="#">Content Writing</a></li>
                                        <li><a href="#">Link Building</a></li>
                                        <li><a href="#">Content Optimization</a></li>
                                        <li><a href="#">Keyword Planning</a></li>
                                        <li><a href="#">Website analysis</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-md-4 col-sm-4 col-xs-12">
                                <div className="single-footer-widget">
                                    <h4>Legal</h4>
                                    <ul>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Security Policy</a></li>
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Media</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="footer-copyright mt50 center">
                            <p>Copyright &copy; <a href="#">BusinessTheme</a> All Right Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

export default Footer
