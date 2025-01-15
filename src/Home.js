import BlogList from "./BlogList";
import useFetch from "./useFetch";

function Home() {
  const { data: blogs, isLoading, error } = useFetch(
    "http://localhost:3000/blogs"
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