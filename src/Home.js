import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isLoading, error } = useFetch(
    `${process.env.REACT_APP_BACKEND_URL}/blogs`
  );

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
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
}

export default Home;