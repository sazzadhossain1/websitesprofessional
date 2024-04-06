import React, { useEffect, useState } from "react";
import "./BlogPost.css";
import onlineMarketing from "../../accts/BlogsPost/onlineMarketing.png";
import seo from "../../accts/BlogsPost/SEO.png";
import whenGetting from "../../accts/BlogsPost/whenGetting.png";
import { Link } from "react-router-dom";
const BlogPost = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox,

  useEffect(() => {
    fetch("https://admin.websitesprofessional.com/api/home/blog")
      .then((res) => res.json())
      .then((data) => setBlogs(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const [blogs, setBlogs] = useState(null);
  // console.log(blogs);

  if (!blogs || !Array.isArray(blogs.data)) {
    return <div>Loading...</div>;
  }
  const rootUrl = "https://admin.websitesprofessional.com";
  return (
    <div className="blogPost_parent_div">
      <h1 className="latest_blog_post">Latest Blog Posts</h1>

      <div className="blogPost_Photo_grid_div">
        {blogs.data.map((blog) => (
          <Link key={blog.id} to={`/blogs/${blog.id}`}>
            <img className="blogPost_Photo" src={rootUrl + blog.image} alt="" />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogPost;
