import { useQuery } from 'react-query';

import { api, IPost } from '../services';

const useGetAllPosts = () => {
  const { data, error, isLoading } = useQuery<IPost[]>('posts', api.fetchAllPosts);

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetAllPosts;
