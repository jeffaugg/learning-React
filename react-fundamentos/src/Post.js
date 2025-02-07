import React from "react";
import PropTypes from "prop-types";

export default function  Post(props) {
    return (
        <article>
            <strong>{props.post.title}</strong>
            <button onClick={() => props.onRemove(props.post.id)}>
                Remover 
            </button>
            <br />
            <small>{props.post.subtitulo}</small>
            <br />
            Likes: {props.likes}
        </article>
    );
}

Post.propTypes = {
    likes: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        subtitulo: PropTypes.string.isRequired,
    }).isRequired,
};
