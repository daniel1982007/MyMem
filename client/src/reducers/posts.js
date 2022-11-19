export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    case "CREATE_POST":
      return [...posts, action.payload];
    case "UPDATE_POST":
      const id = action.payload._id;
      const newPosts = posts.filter((post) => post._id !== id);
      return [...newPosts, action.payload];
    case "DELETE_POST":
      return posts.filter((post) => post._id !== action.payload);
    case "ADD_LIKE":
      //known id of liked post
      //const likedPost = posts.find(post => post._id === action.payload.id)
      //const count = likedPost.like + 1
      console.log("req comes");
      //const posts_list = posts.map(post => post._id === String(action.payload.id) ? {like: action.payload.data} : post)
      const posts_list = posts.map((post) =>
        post._id === action.payload.id
          ? { ...post, like: action.payload.data }
          : post
      );
      posts_list.forEach((post) => console.log(post._id));
      console.log(action.payload.id, action.payload.data, posts_list);
      return posts_list;
    default:
      return posts;
  }
};
