import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UserTypeRoot } from "../../Constants/UserTypes";
import { IndividualType } from "../../Constants/constants";
interface status {
  status: string;
}
export const userApi = createApi({
  reducerPath: "lendsqrApi",
  baseQuery: fetchBaseQuery({
    baseUrl: `https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1`,
  }),
  endpoints: (builder) => ({
    getUsers: builder.query<UserTypeRoot, undefined>({ query: () => "/users" }),
    getUserDetail: builder.query<IndividualType, undefined>({
      query: (userId: string | undefined) => `/users/${userId}`,
    }),
  }),
});
export const { useGetUsersQuery, useGetUserDetailQuery } = userApi;
