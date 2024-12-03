import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from '../features/posts/PostsSlice';

const Posts = () => {

    const { posts, isLoading, isError, error } = useSelector(state => state.posts)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchPosts())
    }, [dispatch])

    return (
        <div className="p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow">
            <h2>Api Post</h2>
            {isLoading && <p>Loading...</p>}
            {isError && <p className='text-red-600'>Error: {error}</p>}
            {
                posts?.map(post => <li key={post.id}>{post.title}</li>)
            }
        </div>
    );
};

export default Posts;