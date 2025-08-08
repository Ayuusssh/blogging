import axios, { AxiosInstance, AxiosResponse } from 'axios';

// Create axios instance
const api: AxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to add auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

// Types
export interface Post {
  _id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: User;
  tags: string[];
  category: string;
  status: 'draft' | 'published' | 'archived';
  featuredImage: string;
  likes: string[];
  viewCount: number;
  readTime: number;
  isPublished: boolean;
  publishedAt?: string;
  createdAt: string;
  updatedAt: string;
  likeCount?: number;
  commentCount?: number;
}

export interface User {
  _id: string;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  bio?: string;
  avatar?: string;
  role: 'user' | 'admin' | 'moderator';
  isVerified: boolean;
  followers: string[];
  following: string[];
  followerCount?: number;
  followingCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface Comment {
  _id: string;
  content: string;
  author: User;
  post: string;
  parentComment?: string;
  likes: string[];
  isEdited: boolean;
  editedAt?: string;
  createdAt: string;
  updatedAt: string;
  likeCount?: number;
  replyCount?: number;
  replies?: Comment[];
}

export interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    pages: number;
  };
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: any[];
}

// Auth API
export const authApi = {
  login: (email: string, password: string) =>
    api.post<ApiResponse<{ user: User; token: string }>>('/auth/login', {
      email,
      password,
    }),

  register: (userData: {
    username: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  }) =>
    api.post<ApiResponse<{ user: User; token: string }>>('/auth/register', userData),

  getCurrentUser: () =>
    api.get<ApiResponse<{ user: User }>>('/auth/me'),

  forgotPassword: (email: string) =>
    api.post<ApiResponse<{ message: string }>>('/auth/forgot-password', { email }),

  resetPassword: (token: string, password: string) =>
    api.post<ApiResponse<{ message: string }>>(`/auth/reset-password/${token}`, {
      password,
    }),
};

// Posts API
export const postsApi = {
  getPosts: (params?: {
    page?: number;
    limit?: number;
    search?: string;
    category?: string;
    author?: string;
    sortBy?: string;
    sortOrder?: 'asc' | 'desc';
  }) =>
    api.get<PaginatedResponse<Post>>('/posts', { params }),

  getPost: (slug: string) =>
    api.get<ApiResponse<Post>>(`/posts/${slug}`),

  createPost: (postData: {
    title: string;
    content: string;
    excerpt?: string;
    category: string;
    tags?: string[];
    featuredImage?: string;
    status?: 'draft' | 'published';
  }) =>
    api.post<ApiResponse<Post>>('/posts', postData),

  updatePost: (id: string, postData: Partial<{
    title: string;
    content: string;
    excerpt: string;
    category: string;
    tags: string[];
    featuredImage: string;
    status: 'draft' | 'published' | 'archived';
  }>) =>
    api.put<ApiResponse<Post>>(`/posts/${id}`, postData),

  deletePost: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/posts/${id}`),

  likePost: (id: string) =>
    api.post<ApiResponse<{ message: string; likeCount: number }>>(`/posts/${id}/like`),

  unlikePost: (id: string) =>
    api.delete<ApiResponse<{ message: string; likeCount: number }>>(`/posts/${id}/like`),

  getFeed: (params?: { page?: number; limit?: number }) =>
    api.get<PaginatedResponse<Post>>('/posts/feed', { params }),

  getCategories: () =>
    api.get<ApiResponse<string[]>>('/posts/categories'),
};

// Users API
export const usersApi = {
  getUsers: (params?: {
    page?: number;
    limit?: number;
    search?: string;
  }) =>
    api.get<PaginatedResponse<User>>('/users', { params }),

  getUser: (id: string) =>
    api.get<ApiResponse<{ user: User; posts: Post[] }>>(`/users/${id}`),

  updateProfile: (userData: Partial<{
    firstName: string;
    lastName: string;
    bio: string;
    avatar: string;
  }>) =>
    api.put<ApiResponse<User>>('/users/profile', userData),

  followUser: (id: string) =>
    api.post<ApiResponse<{ message: string }>>(`/users/${id}/follow`),

  unfollowUser: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/users/${id}/follow`),

  getFollowers: (id: string) =>
    api.get<ApiResponse<User[]>>(`/users/${id}/followers`),

  getFollowing: (id: string) =>
    api.get<ApiResponse<User[]>>(`/users/${id}/following`),

  getUserPosts: (id: string, params?: { page?: number; limit?: number }) =>
    api.get<PaginatedResponse<Post>>(`/users/${id}/posts`, { params }),
};

// Comments API
export const commentsApi = {
  getComments: (postId: string, params?: { page?: number; limit?: number }) =>
    api.get<PaginatedResponse<Comment>>(`/comments/post/${postId}`, { params }),

  createComment: (commentData: {
    content: string;
    postId: string;
    parentCommentId?: string;
  }) =>
    api.post<ApiResponse<Comment>>('/comments', commentData),

  updateComment: (id: string, content: string) =>
    api.put<ApiResponse<Comment>>(`/comments/${id}`, { content }),

  deleteComment: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/comments/${id}`),

  likeComment: (id: string) =>
    api.post<ApiResponse<{ message: string; likeCount: number }>>(`/comments/${id}/like`),

  unlikeComment: (id: string) =>
    api.delete<ApiResponse<{ message: string; likeCount: number }>>(`/comments/${id}/like`),

  getReplies: (id: string, params?: { page?: number; limit?: number }) =>
    api.get<PaginatedResponse<Comment>>(`/comments/${id}/replies`, { params }),
};

// Admin API
export const adminApi = {
  getDashboard: () =>
    api.get<ApiResponse<{
      totalUsers: number;
      totalPosts: number;
      totalComments: number;
      publishedPosts: number;
      draftPosts: number;
      recentUsers: User[];
      recentPosts: Post[];
      postsByCategory: { _id: string; count: number }[];
      monthlyUsers: { _id: { year: number; month: number }; count: number }[];
    }>>('/admin/dashboard'),

  getUsers: (params?: {
    page?: number;
    limit?: number;
    search?: string;
    role?: string;
  }) =>
    api.get<PaginatedResponse<User>>('/admin/users', { params }),

  updateUser: (id: string, userData: Partial<{
    role: 'user' | 'admin' | 'moderator';
    isVerified: boolean;
  }>) =>
    api.put<ApiResponse<User>>(`/admin/users/${id}`, userData),

  deleteUser: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/admin/users/${id}`),

  getPosts: (params?: {
    page?: number;
    limit?: number;
    status?: string;
    category?: string;
  }) =>
    api.get<PaginatedResponse<Post>>('/admin/posts', { params }),

  updatePost: (id: string, status: 'draft' | 'published' | 'archived') =>
    api.put<ApiResponse<Post>>(`/admin/posts/${id}`, { status }),

  deletePost: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/admin/posts/${id}`),

  getComments: (params?: { page?: number; limit?: number }) =>
    api.get<PaginatedResponse<Comment>>('/admin/comments', { params }),

  deleteComment: (id: string) =>
    api.delete<ApiResponse<{ message: string }>>(`/admin/comments/${id}`),
};

export default api; 