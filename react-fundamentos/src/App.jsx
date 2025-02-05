import React from "react";
import Post from "./Post";
import Header from "./Header";

const posts = [
    { title: 'title01', subtitulo: 'sub01', likes: 20 },
    { title: 'title02', subtitulo: 'sub02', likes: 10 },
    { title: 'title03', subtitulo: 'sub03', likes: 30 },
];

function App() {
    return (
        <>
            <Header title="titulo dinamico">
                <h2>
                    Post da semana
                    <button>
                        Atualizar
                    </button>
                </h2>
            </Header>

            <hr />

            {posts.map((post) => (
                <Post
                    key={post.title}
                    title={post.title}
                    subtitulo={post.subtitulo}
                    likes={post.likes}
                />
            ))}
        </>
    );
}

export default App;
