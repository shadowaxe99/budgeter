import axios from 'axios';
import { config } from '../config.js';
import { encryptData } from '../utils/securityUtils.js';

const apiService = axios.create({
  baseURL: config.API_URL,
  timeout: config.TIMEOUT,
});

apiService.interceptors.request.use((request) => {
  if (request.data) {
    request.data = encryptData(request.data);
  }
  return request;
});

export const trackExpense = async (account, transaction) => {
  return await apiService.post('/expense', { account, transaction });
};

export const analyzeSpending = async (user) => {
  return await apiService.post('/analyze', { user });
};

export const setGoal = async (user, goal) => {
  return await apiService.post('/goal', { user, goal });
};

export const analyzeExpense = async (user) => {
  return await apiService.post('/expense/analysis', { user });
};

export const subscribe = async (user) => {
  return await apiService.post('/subscription', { user });
};

export const refer = async (user, referral) => {
  return await apiService.post('/referral', { user, referral });
};