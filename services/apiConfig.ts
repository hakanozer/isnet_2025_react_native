import axios from 'axios';
import { Platform } from 'react-native';


const token = 'Bearer '
const baseURL = 'https://jsonbulut.com/api/';
const timeout = 10000; // 10 seconds

const apiClient = axios.create({
  baseURL: baseURL,
  timeout: timeout,
  data: {"platform": Platform.OS, "version": Platform.Version },
  headers: { 'Authorization': token },
});

export default apiClient;