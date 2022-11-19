import axios from "axios";

const url = "https://dairy-project.herokuapp.com/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (post) => axios.post(url, post);
export const updatePost = (id, post) => axios.patch(`${url}/${id}`, post);
export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const addLike = (id) => axios.post(`${url}/${id}`);
