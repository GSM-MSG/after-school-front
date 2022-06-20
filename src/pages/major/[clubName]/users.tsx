import { GetServerSideProps, NextPage } from "next";
import Header from "../../../components/Header";
import Users from "../../../components/Users";
import api from "../../../lib/api";
import userCheck from "../../../lib/userCheck";
import { MemberType } from "../../../types/MemberType";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  try {
    const { cookies, accessToken } = await userCheck(ctx);

    const { clubName } = ctx.query;

    const { data } = await api.get(
      `/club/web/members?q=${encodeURI(clubName as string)}&type=MAJOR`,
      { headers: { cookie: `accessToken=${accessToken}` } }
    );

    if (cookies) {
      ctx.res.setHeader("set-cookie", cookies);
    }

    return { props: { users: data } };
  } catch (e) {
    return { props: {}, redirect: { destination: "/" } };
  }
};

interface UsersProps {
  users: MemberType;
}

const users: NextPage<UsersProps> = ({ users }) => {
  return (
    <>
      <Header />
      <Users users={users} type="MANAGE" />
    </>
  );
};

export default users;
