import { useQuery } from 'react-query';

import { api, IPost } from '../services';

const useGetMyPosts = (id: number) => {
  const { data, error, isLoading } = useQuery<IPost[]>('my_posts', () => api.fetchMyPosts(id));

  return {
    data,
    error,
    isLoading,
  };
};

export default useGetMyPosts;
