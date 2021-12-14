import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {

    return (
        <div style={{padding: '0 40px'}}>
            <div style={{textAlign: 'center', fontSize: '24px', fontWeight: 'bold', marginTop: '20px'}}>{title}</div>
            {posts.map((post, index) =>
                <PostItem remove={remove} post={post} key={post.id} index={index + 1}/>
            )}
        </div>
    );
};

export default PostList;
