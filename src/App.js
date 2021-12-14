import React from 'react';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts]  = React.useState([
        {id: 1, title: 'Javascript', body: 'Description'},
        {id: 2, title: 'C#', body: 'Description'},
        {id: 3, title: 'PHP', body: 'Description'},
    ])

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

  return (
    <div className="App" >
        <PostForm create={createPost} />
        <PostList remove={removePost} posts={posts} title='Первый список'/>
    </div>
  );
}

export default App;
