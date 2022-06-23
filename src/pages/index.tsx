import { GetServerSideProps, NextPage } from "next";
import Header from "../components/Header";
import NomalAfterSchool from "../components/NomalAfterSchool";
import { list } from "../components/NomalAfterSchool/dummyData";
import { PropListType } from "../types";

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      data: list,
    },
  };
};

interface AfterSchoolProps {
  data: PropListType[];
}

const AfterSchool: NextPage<AfterSchoolProps> = ({ data }) => {
  return (
    <>
      <Header turn={false} />
      <NomalAfterSchool data={data} />
    </>
  );
};

export default AfterSchool;
