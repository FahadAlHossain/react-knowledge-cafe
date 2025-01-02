import PropTypes from "prop-types";
import { MdOutlineBookmarkAdd } from "react-icons/md";

const Blog = ({ blog, handleAddToBookmark }) => {
  const { title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;
  return (
    <div className="mb-20">
      <img className="w-full mb-8 rounded-2xl" src={cover} alt="" />
      <div className="flex justify-between mb-5">
        <div className="flex">
            <img className="w-14" src={author_img} alt="" />
            <div className="ml-6">
                <h3 className="text-2xl">{author}</h3>
                <p>{posted_date}</p>
            </div>
        </div>
        <div className="flex items-center text-gray-500">
            <span>{reading_time} min read</span>
            <button onClick={() => handleAddToBookmark(blog)} className="ml-2 text-2xl"><MdOutlineBookmarkAdd></MdOutlineBookmarkAdd></button>
        </div>
      </div>
      <h2 className="text-4xl w-3/4">{title}</h2>
      <p className="mt-5">
        {
            hashtags.map((hash, idx) => <span key={idx}><a href=""> #{hash}</a></span>)
        }
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func.isRequired
};

export default Blog;
