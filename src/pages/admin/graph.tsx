import { GetServerSideProps, NextPage } from "next";
import { useState } from "react";
import AdminGraph from "../../components/AdminGraph";
import { clubData } from "../../components/AdminGraph/DummyData";
import { CreateAfterSchool } from "../../components/CreateAfterSchool";
import Header from "../../components/Header";
import { ClubStatistics } from "../../types";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      clubData: {
        total: 70,
        afterSchools: clubData,
      },
    },
  };
};

interface GraphProps {
  clubData: {
    total: number;
    afterSchools: ClubStatistics[];
  };
}

const Graph: NextPage<GraphProps> = ({ clubData }) => {
  const [create, setCreate] = useState(false);

  return (
    <>
      <Header clickModal={setCreate} />
      <AdminGraph clubData={clubData} />
      {create && <CreateAfterSchool setCreate={setCreate} />}
    </>
  );
};

export default Graph;
