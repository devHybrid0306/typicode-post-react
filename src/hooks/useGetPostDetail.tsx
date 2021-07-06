import { useQuery } from 'react-query';

import { api, IPost } from '../services';

const useGetPostDetail = (id: number) => {
  const { data, error, isLoading } = useQuery<IPost>('post', () => api.fetchPostDetail(id));

  return {
    postDetail: data,
    error,
    isLoading,
  };
};

export default useGetPostDetail;
