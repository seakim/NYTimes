import React from "react";
import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer col-sm-12">
      <hr />
      <h5 className="text-center">
      <small>
        <i className="fa fa-envelope"/> dev.seakim@gmail.com |<span>&nbsp;</span>
        <i className="fa fa-linkedin"/><a href="https://www.linkedin.com/in/seankhkim/"> seankhkim</a>  |<span>&nbsp;</span>
        <i className="fa fa-github-square"/><a href="https://github.com/seakim/"> seakim</a>  |<span>&nbsp;</span>
        <i className="fa fa-user-plus"/><a href="https://SeanKim.life/"> SeanKim.life</a>
      </small>
      <br/><br/><small>Source: The New York Times <i className="fa fa-newspaper-o"></i></small>
      </h5>
    </div>
  )
}

export default Footer;