import { useState } from "react";
import AdminEdit from "../../components/AdminEditPage";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";

export default function StuEdit() {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminEdit />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
}
