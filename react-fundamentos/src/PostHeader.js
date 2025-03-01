import React from "react";
import PropTypes from "prop-types";

export default function PostHeader(){
    return (
        <>
            <strong>
                {props.post.read? <s>{props.post.title}</s> : props.post.title }
            </strong>
        </>
    )
    
}

PostHeader.propTypes = {
    onRemove: PropTypes.func.isRequired,
    post: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
};
