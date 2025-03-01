import React from "react";
import PropTypes from "prop-types";
import PostHeader from "./PostHeader";

export default function  Post(props) {
    if(props.post.read) {
        return <h2>{props.post.title} já foi lido</h2>
    }

    return (
        <article>
            <PostHeader
                onRemove={props.onRemove}
                post={{
                    id: props.ps
                }}    
            />
            <br />
            <small>{props.post.subtitulo}</small>
            <br />
            Likes: {props.post.likes}
        </article>
    );
}

Post.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        likes: PropTypes.number.isRequired, 
        title: PropTypes.string.isRequired,
        subtitulo: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
};
