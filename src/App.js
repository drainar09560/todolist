import React from 'react';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import ph1 from './assets/ph1.jpg';

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
        {posts.length !== 0
            ?
            <PostList remove={removePost} posts={posts} title='Первый список'/>
            :
            <h1 style={{textAlign: 'center', fontSize: '32px', color: 'teal', marginTop: '60px'}}>Посты не найдены</h1>
        }
    </div>
  );
}

export default App;
