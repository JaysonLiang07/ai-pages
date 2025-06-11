import axios from 'axios';

const API_URL = 'https://yz20250606.top/api';

export const fetchDeepSeekResponse = async (prompt: string) => {
  try {
    const res = await axios.post(API_URL, {
      query: `query { ask(prompt: "${prompt}") }`,
    });
    return res.data.data.ask;
  } catch (error) {
    console.error('DeepSeek API 调用失败:', error);
    throw error;
  }
};