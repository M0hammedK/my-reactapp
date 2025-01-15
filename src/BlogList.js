import { Link } from "react-router-dom";

function BlogList({ blogs, title }) {
  return (
    <div className="container my-5">
      <h2 className="text-center text-danger">{title}</h2>
      <div className="row">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-md-6">
            <div className="card blog-card my-3">
              <Link to={`blog/${blog.id}`} className="text-decoration-none">
                <div className="card-body">
                  <h5 className="card-title text-danger">
                    Author: {blog.author}
                  </h5>
                  <h6 className="text-dark">{blog.title}</h6>
                  <p className="text-muted">{blog.body.slice(0, 100)}...</p>
                </div>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogList;