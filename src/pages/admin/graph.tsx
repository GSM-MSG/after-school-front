import { useState } from "react";
import AdminGraph from "../../components/AdminGraph";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";

export default function Graph() {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminGraph />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
}
