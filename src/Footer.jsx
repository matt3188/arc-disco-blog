import React from "react";

const Footer = props => (
  <footer>
    <div className="container">
      <div className="row">
        <div className="col-md-4">
          <p>Links</p>
          <ul>
            {props.pages.map(
              page =>
                page.parent === 0 && (
                  <li key={page.title.rendered}>
                    <a href={page.link}>{page.title.rendered}</a>
                  </li>
                )
            )}
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
