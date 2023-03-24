import React from "react";
import Main from "../../components/Photo/Photo";
import Table from "../../components/Photo/PhotoTable";

function ImageUpload() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Main />
      <Table />
    </div>
  );
}

export default ImageUpload;
