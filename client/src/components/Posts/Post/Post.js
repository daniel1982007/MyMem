import React from "react";
import { useDispatch } from "react-redux";
import useStyles from "./styles";
import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core";
import { deletePost, addLike } from "../../../actions/posts";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ post, setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  console.log(post);

  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        component="div"
        title={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.createAt).fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => {
            setCurrentId(post._id);
          }}
        >
          <MoreHorizIcon fontSize="medium" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag}`)}
        </Typography>
      </div>
      <CardContent>
        <Typography className={classes.title} variant="h5" gutterBottom>
          {post.title}
        </Typography>
      </CardContent>
      <Typography
        className={classes.title}
        color="textSecondary"
        variant="body2"
        gutterBottom
      >
        {post.message}
      </Typography>
      <CardActions className={classes.cardActions}>
        <Button
          color="primary"
          size="small"
          onClick={() => {
            dispatch(addLike(post._id));
          }}
        >
          <ThumbUpAltIcon fontSize="small" />
          like {post.like}
        </Button>
        <Button
          color="primary"
          size="small"
          onClick={() => {
            dispatch(deletePost(post._id));
          }}
        >
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
