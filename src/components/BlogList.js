const BlogList = (props) => {
  const blogs = props.blogs;
  console.log();
  return (
    <div className="blog-list">
      {BlogList.map((blog) => (
        <div className="blog-preview" Key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
        </div>
      ))}
    </div>
  );
};
export default BlogList;
