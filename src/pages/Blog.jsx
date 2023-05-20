import useTitle from "../hooks/useTitle";

const Blog = () => {
  useTitle("Blogs");
  return (
    <div>
      <h3>This is blog page</h3>
    </div>
  );
};

export default Blog;
