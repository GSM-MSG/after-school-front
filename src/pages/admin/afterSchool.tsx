import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminAfterSchool from "../../components/AdminAfterSchool";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { list } from "../../components/AdminAfterSchool/dummyData";
import { PropListType } from "../../types";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {
      data: list,
    },
  };
};

interface AfterSchoolProps {
  data: PropListType;
}

const AfterSchool: NextPage<AfterSchoolProps> = ({ data }) => {
  const [create, setCreate] = useState(false);
  return (
    <>
      <Header clickModal={setCreate} />
      <AdminAfterSchool data={data} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default AfterSchool;
