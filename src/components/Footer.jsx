import React from "react";

const Footer = ({ cards }) => {
  const { read, views, comments } = cards;
  return (
    <footer>
      <div className="card-stats">
        <div className="stat">
          <div className="value">
            {read}
            <span>m</span>
          </div>
          <div className="type">read</div>
        </div>
        <div className="stat border">
          <div className="value">{views}</div>
          <div className="type">views</div>
        </div>
        <div className="stat">
          <div className="value">{comments}</div>
          <div className="type">comments</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
