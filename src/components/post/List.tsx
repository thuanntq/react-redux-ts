import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from './../../hooks/useTypeSelector';
import { fetchPosts } from './../../redux/actions';

export const PostListComponent: React.FC = React.memo(() => {
    const data = useTypeSelector(state => state.posts);
    const dispatch = useDispatch();
    const { errors, isLoading, posts } = data;

    useEffect(() => {
        fetchPosts()(dispatch);
        // dispatch(fetchPosts());
    }, [dispatch]);

    return (
        <div>
            <h2>Posts</h2>

            {isLoading && <p>Loading...</p>}
            {errors && <p>Errors...</p>}

            {posts?.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
});
