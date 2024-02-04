import React from "react";
import "./WhenGetting.css";
import BlogPost from "../BlogPost/BlogPost";
import whenGetting from "../../accts/BlogsPost/whenGetting.png";

const WhenGetting = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  return (
    <div className="whenGetting_parent_div">
      <img className="whenGetting_photo" src={whenGetting} alt="" />
      <div className="whenGetting_text_div">
        <p>
          In today's digital age, having a website is essential for any business
          looking to establish an online presence and reach a wider audience.
          However, creating a website that is both effective and efficient
          requires careful planning and consideration. Here are some key factors
          to consider when getting a website for your business.
        </p>
        <p>
          Target Audience: Before creating a website, it's essential to identify
          your target audience and their needs. This will help you to design a
          website that meets their expectations and provides them with the
          information and solutions they are looking for.
        </p>
        <p>
          Design and User Experience: The design and user experience of your
          website are crucial for creating a positive first impression and
          ensuring that visitors stay on your site. A well-designed website that
          is easy to navigate, visually appealing, and mobile-friendly will
          improve user engagement and increase the chances of visitors
          converting into customers.
        </p>
        <p>
          Content: The content on your website should be relevant, informative,
          and engaging. It should provide visitors with the information they
          need to make informed decisions about your products or services. The
          content should also be optimized for search engines to improve your
          website's visibility and drive more traffic to your site.
        </p>
        <p>
          Functionality: Your website should be easy to use and functional, with
          clear calls-to-action and a seamless checkout process. It should also
          be optimized for speed, security, and accessibility, ensuring that
          visitors can easily access and use your site.
        </p>
        <p>
          SEO: Search engine optimization (SEO) is crucial for ensuring that
          your website ranks higher in search engine results pages, increasing
          visibility and driving more traffic to your site. This involves
          optimizing your website's content, design, and functionality to meet
          search engine algorithms' criteria and improve your website's ranking.
        </p>
        <p>
          Analytics: Analytics are essential for tracking and measuring your
          website's performance. This will help you to identify areas for
          improvement, track visitor behavior, and measure the effectiveness of
          your marketing campaigns. It's essential to integrate analytics tools
          into your website to track and measure its performance continually.
        </p>
        <p>
          Creating a website for your business is a crucial step towards
          establishing an online presence and reaching a wider audience which
          requires thoughtful consideration and planning. However, to ensure
          that your website is effective and efficient, it's essential to
          consider the key factors outlined above. By focusing on these factors,
          we create each and every website that not only looks great but also
          provides visitors with the information and solutions they are looking
          for. Ultimately, a well-designed and optimized website can help to
          improve user engagement, increase traffic, and drive sales and revenue
          for your business.
        </p>
      </div>
      <BlogPost></BlogPost>
    </div>
  );
};

export default WhenGetting;
