import { request } from "./request";

export const getPosts = async() => {
  const posts = await request('/posts');

  return posts;
};

