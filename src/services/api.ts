import axios, { AxiosRequestConfig } from 'axios';
import { IComment, IPost } from './types';

const http = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

const fetchApi = async <T = any>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const res = await http(url, config);

  if (res.status === 200) {
    return res.data;
  }

  throw new Error(res.data);
};

export const fetchAllPosts = (): Promise<IPost[]> => fetchApi('/posts/', { method: 'GET' });

export const fetchMyPosts = (id: number): Promise<IPost[]> =>
  fetchApi(`/users/${id}/posts/`, { method: 'GET' });

export const fetchPostDetail = (id: number): Promise<IPost> =>
  fetchApi(`/posts/${id}/`, { method: 'GET' });

export const fetchComments = (postId: number): Promise<IComment[]> =>
  fetchApi(`/posts/${postId}/comments/`, { method: 'GET' });
