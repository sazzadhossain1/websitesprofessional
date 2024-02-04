import React from "react";
import "./BlogPost.css";
import onlineMarketing from "../../accts/BlogsPost/onlineMarketing.png";
import seo from "../../accts/BlogsPost/SEO.png";
import whenGetting from "../../accts/BlogsPost/whenGetting.png";
import { Link } from "react-router-dom";
const BlogPost = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  return (
    <div className="blogPost_parent_div">
      <h1 className="latest_blog_post">Latest Blog Posts</h1>
      <div className="blogPost_Photo_grid_div">
        <Link to="/onlineMarketing">
          <img className="blogPost_Photo" src={onlineMarketing} alt="" />
        </Link>
        <Link to="/seo">
          <img className="blogPost_Photo" src={seo} alt="" />
        </Link>
        <Link to="/whenGetting">
          <img className="blogPost_Photo" src={whenGetting} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default BlogPost;
