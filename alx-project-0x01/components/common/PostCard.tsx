import React from 'react';

interface PostCardProps {
  title: string;
  content: string;
  // Add other post-related props as needed
}

const PostCard: React.FC<PostCardProps> = ({ title, content }) => {
  return (
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default PostCard;
