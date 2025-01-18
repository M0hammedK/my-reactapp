import { useState } from "react";
import usePost from "./usePost";
function Create() {
  const [blog, setBlog] = useState("");
  const { isLoading, error } = usePost(`${process.env.REACT_APP_BACKEND_URL}/blogs`, blog);

  let author = "Mohammed",
    body = null,
    title = null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setBlog({ title, author, body });
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title mb-4 text-center text-danger">
                Create a New Blog
              </h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="title" className="form-label">
                    Blog Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="title"
                    placeholder="Enter blog title"
                    onChange={(e) => (title = e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="author" className="form-label">
                    Author
                  </label>
                  <select
                    className="form-select"
                    id="author"
                    onChange={(e) => (author = e.target.value)}
                    required
                  >
                    <option value="Mohammed">Mohammed</option>
                    <option value="Ali">Ali</option>
                  </select>
                </div>
                <div className="mb-4">
                  <label htmlFor="body" className="form-label">
                    Blog Content
                  </label>
                  <textarea
                    className="form-control"
                    id="body"
                    rows="6"
                    placeholder="Write your blog content here..."
                    onChange={(e) => (body = e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  {isLoading ? (
                    <button disabled={true} className="btn btn-danger">
                      Creating...
                    </button>
                  ) : (
                    <button type="submit" className="btn btn-danger">
                      Create Blog
                    </button>
                  )}
                  {error && <h4 className="text-danger">{error}</h4>}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
