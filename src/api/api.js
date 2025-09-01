import { mockPosts, mockGuestbookEntries, mockUserStats } from '../data/posts.js';

const API_BASE_URL = 'http://localhost:8080/api';

// 模拟延迟
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// 模拟认证状态
let isAuthenticated = false;
let currentUser = null;

export const api = {
  // 认证相关
  login: async (credentials) => {
    await delay(800);
    if (credentials.username === 'admin' && credentials.password === 'admin') {
      isAuthenticated = true;
      currentUser = { id: 1, username: 'admin', role: 'ADMIN' };
      localStorage.setItem('token', 'demo-token');
      return { 
        success: true, 
        data: { 
          token: 'demo-token', 
          user: currentUser 
        } 
      };
    }
    throw new Error('用户名或密码错误');
  },

  register: async (userData) => {
    await delay(1000);
    // 模拟注册成功
    return { 
      success: true, 
      message: '注册成功！' 
    };
  },

  logout: async () => {
    await delay(300);
    isAuthenticated = false;
    currentUser = null;
    localStorage.removeItem('token');
    return { success: true };
  },

  getCurrentUser: async () => {
    await delay(200);
    const token = localStorage.getItem('token');
    if (token === 'demo-token') {
      return { 
        success: true, 
        data: { id: 1, username: 'admin', role: 'ADMIN' } 
      };
    }
    throw new Error('未认证');
  },

  // 文章相关
  getPosts: async (page = 0, size = 10) => {
    await delay(500);
    const start = page * size;
    const end = start + size;
    const posts = mockPosts.slice(start, end);
    
    return {
      success: true,
      data: {
        content: posts,
        totalElements: mockPosts.length,
        totalPages: Math.ceil(mockPosts.length / size),
        number: page,
        size: size,
        first: page === 0,
        last: end >= mockPosts.length
      }
    };
  },

  getPost: async (id) => {
    await delay(300);
    const post = mockPosts.find(p => p.id === parseInt(id));
    if (post) {
      return { success: true, data: post };
    }
    throw new Error('文章不存在');
  },

  createPost: async (postData) => {
    await delay(800);
    const newPost = {
      id: Math.max(...mockPosts.map(p => p.id)) + 1,
      ...postData,
      author: 'admin',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      status: 'PUBLISHED'
    };
    mockPosts.unshift(newPost);
    return { success: true, data: newPost };
  },

  updatePost: async (id, postData) => {
    await delay(600);
    const index = mockPosts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      mockPosts[index] = {
        ...mockPosts[index],
        ...postData,
        updatedAt: new Date().toISOString()
      };
      return { success: true, data: mockPosts[index] };
    }
    throw new Error('文章不存在');
  },

  deletePost: async (id) => {
    await delay(400);
    const index = mockPosts.findIndex(p => p.id === parseInt(id));
    if (index !== -1) {
      const deletedPost = mockPosts.splice(index, 1)[0];
      return { success: true, data: deletedPost };
    }
    throw new Error('文章不存在');
  },

  // 留言板相关
  getGuestbookEntries: async () => {
    await delay(400);
    return { 
      success: true, 
      data: mockGuestbookEntries.filter(entry => entry.approved) 
    };
  },

  createGuestbookEntry: async (entryData) => {
    await delay(600);
    const newEntry = {
      id: Math.max(...mockGuestbookEntries.map(e => e.id)) + 1,
      ...entryData,
      createdAt: new Date().toISOString(),
      approved: true // 在demo中直接批准
    };
    mockGuestbookEntries.unshift(newEntry);
    return { success: true, data: newEntry };
  },

  // 统计相关
  getUserStats: async () => {
    await delay(300);
    return { success: true, data: mockUserStats };
  },

  // 搜索相关
  searchPosts: async (query) => {
    await delay(500);
    const results = mockPosts.filter(post => 
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.content.toLowerCase().includes(query.toLowerCase()) ||
      post.summary?.toLowerCase().includes(query.toLowerCase())
    );
    return { success: true, data: results };
  }
};

export default api;
