import { useQuery } from 'react-query';

import { api, IComment } from '../services';

const useGetComments = (postId: number) => {
  const { data, error, isLoading } = useQuery<IComment[]>('comments', () =>
    api.fetchComments(postId),
  );

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetComments;
