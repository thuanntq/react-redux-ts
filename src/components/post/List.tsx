import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTypeSelector } from './../../hooks/useTypeSelector';
import { fetchPosts } from './../../redux/actions';

const useMedia = (query: string) => {
    let [matches, setMatches] = useState(window.matchMedia(query).matches);

    useEffect(() => {
        let media = window.matchMedia(query);
        if (media.matches !== matches) {
            setMatches(media.matches);
        }
        let listener = () => {
            setMatches(media.matches);
        };

        media.addListener(listener);
        return () => media.removeListener(listener);
    }, [matches, query]);

    return matches;
};

const Demo: React.FC = React.memo(() => {
    const small = useMedia('(max-width: 400px');
    const large = useMedia('(max-width: 800px');
    return (
        <div>
            <h1>Media</h1>
            <p>Small ? {small ? 'Yep' : 'Nope'}</p>
            <p>Large ? {large ? 'Yep' : 'Nope'}</p>
        </div>
    );
});

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
            <Demo />

            <h2>Posts</h2>

            {isLoading && <p>Loading...</p>}
            {errors && <p>Errors...</p>}

            {posts?.map(post => (
                <p key={post.id}>{post.title}</p>
            ))}
        </div>
    );
});
