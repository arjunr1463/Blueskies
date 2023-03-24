import React from "react";
import Main from "../../components/Blog/Blog";
import Table from "../../components/Blog/ViewBlog";

function Blog() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Main />
      <Table />
    </div>
  );
}

export default Blog;
