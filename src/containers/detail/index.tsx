import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

import MainLayout from '../../layout/main';
import { CommentCard, PostButton, PostCard } from '../../components';
import { useGetComments, useGetPostDetail } from '../../hooks';
import { paths } from '../../constants/paths';

interface IStateType {
  userId: number;
}

const DetailPage = () => {
  const { id }: { id: string } = useParams();
  const history = useHistory();
  const location = useLocation();
  const { userId } = location.state as IStateType;
  const { data } = useGetComments(Number(id));
  const { postDetail } = useGetPostDetail(Number(id));

  const handleClick = () => {
    history.push(`${paths.post}/${userId}`);
  };

  return (
    <MainLayout>
      <>
        <h1>Comments</h1>
        {postDetail && <PostCard isActive={false} postDetail={postDetail} />}
        <PostButton text={'Post'} handleClick={handleClick} />
        {data?.map((item, index) => (
          <CommentCard key={index} {...item} />
        ))}
      </>
    </MainLayout>
  );
};

export default DetailPage;
