import React from 'react';
import PostCard from '../../components/common/PostCard';

const PostsIndex: React.FC = () => {
  const posts = [
    { id: 1, title: 'First Post', content: 'This is the content of the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the content of the second post.' },
  ];

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} content={post.content} />
      ))}
    </div>
  );
};

export default PostsIndex;
