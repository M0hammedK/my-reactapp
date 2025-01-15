import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";
import { useState } from "react";

function BlogDetails() {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    error,
  } = useFetch("http://localhost:3000/blogs/" + id);

  const [deleteLoading, setDeleteLoading] = useState(false);
  const [deleteError, setDeleteError] = useState(false);
  const history = useHistory();

  const handleDeleteBlog = () => {
    setDeleteError(null);
    setDeleteLoading(true);
    setTimeout( () => {
      fetch("http://localhost:3000/blogs/" + id, {
        method: "DELETE"
      })
        .then((res) => {
          if (!res.ok) {
            throw new Error(`Error: ${res.stateText}`);
          }
        })
        .catch((err) => {
          setDeleteError(err.message);
        })
        .finally(() => {
          setDeleteLoading(false);
        });
        history.push("/");
    }, 1000);
  };

  return (
    <div className="container my-5">
      {error && (
        <div className="alert alert-danger" role="alert">
          {error.message}
        </div>
      )}
      {isLoading && (
        <div className="text-center">
          <h1>Loading...</h1>
        </div>
      )}
      {blog && (
        <div className="card shadow-lg">
          <div className="card-body">
            <h1 className="card-title text-danger mb-3">{blog.title}</h1>
            <h5 className="text-muted mb-4">Author: {blog.author}</h5>
            <p className="card-text text-dark">{blog.body}</p>
          </div>
          {deleteLoading ? (
            <button className="btn btn-danger" disabled={true}>
              Deleting...
            </button>
          ) : (
            <button className="btn btn-danger" onClick={handleDeleteBlog}>
              Delete blog
            </button>
          )}
          {deleteError && <h4 className="text-danger">{deleteError}</h4>}
        </div>
      )}
    </div>
  );
}

export default BlogDetails;
