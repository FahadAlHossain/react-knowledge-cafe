import { useEffect } from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Blog from "../blog/Blog";


const Blogs = ({handleAddToBookmark}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

    return (
        <div className="md:w-2/3">
            <h1 className="text-4xl">Blogs</h1>
            {
                blogs.map(blog => <Blog key={blog.id} handleAddToBookmark={handleAddToBookmark} blog={blog}></Blog>)
            }
        </div>
    );
};

Blogs.propTypes={
    handleAddToBookmark: PropTypes.func.isRequired,
}

export default Blogs;