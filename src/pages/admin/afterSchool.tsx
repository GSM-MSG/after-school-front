import { useState } from "react";
import AdminAfterSchool from "../../components/AdminAfterSchool";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";

export default function AfterSchool() {
  const [create, setCreate] = useState(false);
  return (
    <>
      <Header clickModal={setCreate} link={true} />
      <AdminAfterSchool />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
}
