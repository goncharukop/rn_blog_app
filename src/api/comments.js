import { request } from "./request";

export const getComments = async() => {
  const comments = await request('/comments');

  return comments;
};

