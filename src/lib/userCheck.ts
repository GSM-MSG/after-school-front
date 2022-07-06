import api from "./api";
import { GetServerSidePropsContext } from "next";
import admin from "./admin";

const userCheck = async (
  ctx: GetServerSidePropsContext,
  isClient?: boolean
) => {
  const check = isClient ? api : admin;
  let accessToken = ctx.req.cookies["accessToken"];
  const refreshToken = ctx.req.cookies["refreshToken"];
  let cookies: string[] | undefined;

  console.log(accessToken, refreshToken);

  if (!accessToken || typeof accessToken !== "string") {
    const res = await check[isClient ? "patch" : "post"](
      isClient ? "/auth/refresh" : "/auth/teacher/refreshtoken",
      {},
      { headers: { cookie: `refreshToken=${refreshToken};` } }
    );

    cookies = res.headers["set-cookie"];
    accessToken = res.data.accessToken;
  }

  return { cookies, accessToken };
};

export default userCheck;
