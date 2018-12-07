import React, { Component } from "react";
import { Link } from "react-router-dom";

class PostPreview extends Component {
  removeUnicode(string) {
    if (string.indexOf("&#8217;") >= 0) {
      return this.removeUnicode(string.replace("&#8217;", "'"));
    } else {
      return string.replace("<p>", "").replace("[&hellip;]</p>", "...");
    }
  }

  render() {
    const excerpt = this.removeUnicode(this.props.excerpt.rendered);
    const featureImage = this.props.acf.feature_image;

    return (
      <div className="card mb-4">
        {featureImage && (
          <img src={featureImage.url} className="card-img-top" alt="" />
        )}
        <div className="card-body">
          <h3 className="card-title">{this.props.title.rendered}</h3>
          <div
            className="card-text"
            dangerouslySetInnerHTML={{ __html: excerpt }}
          />
          <Link to={`/${this.props.id}`}>Read more</Link>
        </div>
      </div>
    );
  }
}

export default PostPreview;
