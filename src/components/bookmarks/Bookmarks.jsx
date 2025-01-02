import { PropTypes } from "prop-types";
import Bookmark from "../bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <>
    <div className="md:w-1/3 font-bold h-1/5">
      <div className="ml-4 mt-6 p-4 rounded-xl bg-purple-200 border-purple-400 border-2">
        <h2 className="text-2xl text-center text-purple-700 p-5">Spent time on read: {readingTime} min</h2>
      </div>
      <div className="bg-gray-300 ml-4 mt-6 p-4 rounded-xl">
        <h2 className="text-2xl ml-5 mt-4">
          Bookmarked Blogs: {bookmarks.length}
        </h2>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
      </div>
    </>
  );
};

Bookmarks.propTypes = {
  bookmarks: PropTypes.array.isRequired,
  readingTime: PropTypes.number,
};

export default Bookmarks;
