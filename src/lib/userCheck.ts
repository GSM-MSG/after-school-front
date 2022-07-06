import api from "./api";
import { GetServerSidePropsContext } from "next";
import admin from "./admin";

const userCheck = async (
  ctx: GetServerSidePropsContext,
  isClient?: boolean
) => {
  const check = isClient ? api : admin;
  let accessToken = ctx.req.cookies[`${isClient ? "a" : "adminA"}ccessToken`];
  const refreshToken =
    ctx.req.cookies[`${isClient ? "r" : "adminR"}efreshToken`];
  let cookies: string[] | undefined;

  console.log(accessToken, refreshToken);

  if (!accessToken || typeof accessToken !== "string") {
    const res = await check[isClient ? "patch" : "post"](
      isClient ? "/auth/refresh" : "/teacher/refreshtoken",
      {},
      {
        headers: {
          cookie: `${isClient ? "r" : "adminR"}efreshToken=${refreshToken};`,
        },
      }
    );

    cookies = res.headers["set-cookie"];
    accessToken = res.data.accessToken;
  }

  return { cookies, accessToken };
};

export default userCheck;
