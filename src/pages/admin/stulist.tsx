import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminStuList from "../../components/AdminStuList";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { userData } from "../../components/AdminStuList/DummyData";
import { ApplyUserType } from "../../types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  console.log(ctx.query);
  return {
    props: {
      data: userData,
    },
  };
};

interface StulistProps {
  data: ApplyUserType[];
}

const StuList: NextPage<StulistProps> = ({ data }) => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminStuList data={data} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default StuList;
