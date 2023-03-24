import React from "react";
import Main from "../../components/Testimony/Testimony";
import Table from "../../components/Testimony/AllTestimony";

function Testimony() {
  return (
    <div className="flex flex-col gap-[60px]">
      <Main />
      <Table />
    </div>
  );
}

export default Testimony;
