import React from 'react';

import MainLayout from '../../layout/main';
import { PostCard } from '../../components';
import { useGetAllPosts } from '../../hooks';
import { IPost } from '../../services';

const MainPage = () => {
  const { data } = useGetAllPosts();

  return (
    <MainLayout>
      <>
        <h1>All Posts</h1>
        {data?.map((item: IPost, index: number) => {
          return <PostCard isActive key={index} postDetail={item} />;
        })}
      </>
    </MainLayout>
  );
};

export default MainPage;
