import { request } from "./request";

export const getUsers = async() => {
  const users = await request('/users');

  return users;
};
