import { Link } from "react-router-dom";

const BlogList = ({blogs, title}) => {

    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/`+ blog.id} style={{textDecoration: "none"}}>
                        <h2>{blog.title}</h2>
                    </Link>
                    <small>posted by {blog.author}</small>
                </div>
            ))}

        </div>
    );
}
 
export default BlogList;