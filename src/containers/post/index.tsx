import React from 'react';

import MainLayout from '../../layout/main';
import { PostCard } from '../../components';
import { useGetMyPosts } from '../../hooks';
import { IPost } from '../../services';
import { useParams } from 'react-router-dom';

const PostPage = () => {
  const { id }: { id: string; userId: string } = useParams();

  const { data } = useGetMyPosts(Number(id));

  return (
    <MainLayout>
      <>
        <h1>My Posts</h1>
        {data?.map((item: IPost, index: number) => {
          return <PostCard isActive key={index} postDetail={item} />;
        })}
      </>
    </MainLayout>
  );
};

export default PostPage;
