import { useState } from "react";
import AdminStuList from "../../components/AdminStuList";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";

export default function StuList() {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminStuList />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
}
