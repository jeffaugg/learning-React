import React from "react"
import PropTypes, { number } from "prop-types"
export default function Post(props){
    return (
        <article>
                <strong>{props.post.title}</strong> <br />
                <small>subtitulo da noticia</small>
                <br />
                Likes: {props.likes}
        </article>
    )
} 


Post.propTypes = {
    likes: PropTypes.number.isRequired,
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        subititulo: PropTypes.string.isRequired
    }).isRequired
};