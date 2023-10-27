import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    { title: "My New Website", body: "lorem ipsum...", author: "mario", id: 1 },
    { title: "Welcome", body: "lorem ipsum...", author: "mario", id: 2 },
    {
      title: "Web dev top tips",
      body: "lorem ipsum...",
      author: "mario",
      id: 3,
    },
  ]);
  return (
    <div className="home">
      <BlogList blogs={blogs} />
    </div>
  );
};
export default Home;
