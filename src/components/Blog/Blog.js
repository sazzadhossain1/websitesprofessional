import React from "react";
import "./Blog.css";
import BlogPost from "../BlogPost/BlogPost";
import { useLoaderData } from "react-router-dom";

const Blog = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const singleBlogPostData = useLoaderData();
  console.log(singleBlogPostData);

  const rootUrl = "https://admin.websitesprofessional.com";
  return (
    <div className="onlineMarketing_parent_div">
      <img
        className="onlineMarketing_photo"
        src={rootUrl + singleBlogPostData.data.image}
        alt=""
      />
      <div className="onlineMarketing-text_div">
        {/* <p>{singleBlogPostData.data.details}</p> */}
        <p>
          {singleBlogPostData.data.details
            .split("<br />")
            .map((paragraph, index) => (
              <React.Fragment key={index}>
                {paragraph}
                {index <
                  singleBlogPostData.data.details.split("<br />").length -
                    1 && <br />}
              </React.Fragment>
            ))}
        </p>
      </div>
      <BlogPost></BlogPost>
    </div>
  );
};

export default Blog;
