import * as api from "../api";

export const getPosts = () => {
  return async (dispatch) => {
    try {
      const { data } = await api.fetchPosts();
      dispatch({
        type: "FETCH_POSTS",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const createPost = (post) => {
  return async (dispatch) => {
    try {
      //call api function, get response from server, and save feedback data to payload,
      //then dispatch to reducer, get new state, the component which is using that data,
      //then being updated, rerendered.
      const { data } = await api.createPost(post);
      dispatch({
        type: "CREATE_POST",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updatePost = (id, newPost) => {
  return async (dispatch) => {
    //find post by id
    try {
      const { data } = await api.updatePost(id, newPost);
      dispatch({
        type: "UPDATE_POST",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deletePost = (id) => {
  return async (dispatch) => {
    try {
      await api.deletePost(id); //await deletePost action to be finished AND get response from backend
      dispatch({
        type: "DELETE_POST",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const addLike = (id) => {
  return async (dispatch) => {
    try {
      //await response from server
      const { data } = await api.addLike(id);
      dispatch({
        type: "ADD_LIKE",
        payload: {
          id,
          data,
        },
      });
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };
};
