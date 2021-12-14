import React from 'react';
import MyInput from "./UI/MyInput";
import MyButton from "./UI/MyButton";

const PostForm = ({create}) => {

    const [post, setPost] = React.useState({title:'', body:''})

    const addNewPost = (e) => {
        e.preventDefault()

        if(post.title !== '') {
            if(post.body !== '') {
                const newPost = {
                    ...post, id: Date.now()
                }
                create(newPost)
                setPost({title:'', body:''})
            } else {
                alert(new Error('description is empty'))
            }
        } else {
            alert(new Error('title is empty'))
        }

        // const newPost = {
        //     ...post, id: Date.now()
        // }
        // create(newPost)
        // setPost({title:'', body:''})
    }


    return (
        <form style={{display: 'flex', flexDirection: 'column', padding: '60px 20px',}} >
            <MyInput type="text" placeholder="Заголовок" value={post.title} onChange={e => setPost({...post, title: e.target.value})}/>
            <MyInput type="text" placeholder="Описание" value={post.body} onChange={e => setPost({...post, body: e.target.value})}/>
            <MyButton onClick={addNewPost}/>
        </form>
    );
};

export default PostForm;
