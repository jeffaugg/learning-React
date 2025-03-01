import React, { useState } from "react";
import Post from "./Post";
import Header from "./Header";


function App() {
    const [posts, setPosts] = useState([
        { id: Math.random(), title: 'title01', subtitulo: 'sub01', likes: 20, read: false},
        { id: Math.random(), title: 'title02', subtitulo: 'sub02', likes: 10, read: true},
        { id: Math.random(), title: 'title03', subtitulo: 'sub03', likes: 30, read: false},
    ]);

    
    function handleRefrest(){
            setPosts([ 
                ...prevState, 
                {
                    id: Math.random(),
                    title: `title${prevState.length + 1}`,
                    subtitulo: `sub01${prevState.length + 1}`,
                    likes: 20 
                } 
            ])
    }
    
    function handleRemovePost (postId){
        setPosts((prevState) => (
            prevState.filter(post => post.id !== postId) 
        ))
    }

    return (
        <>
            <Header title="titulo dinamico">
                <h2>
                    Post da semana
                    <button onClick={handleRefrest}>
                        Atualizar
                    </button>
                </h2>
            </Header>

            <hr />

            {posts.map((post) => (
                <Post
                    key={post.id}
                    onRemove={handleRemovePost}
                     post={post}
                />
            ))}

        </>
    );
}

export default App;
