import axios from 'axios';

async function apiClient(
  endpoint,
  { body, token, headers: customHeaders, ...customConfig } = {}
) {
  const config = {
    url: endpoint,
    method: body ? 'post' : 'get',
    baseURL: '/api',
    headers: {
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': body ? 'application/json' : undefined,
      ...customHeaders,
    },
    data: body ? JSON.stringify(body) : undefined,
    ...customConfig,
  };

  const { data } = await axios.create(config);
  return data;
}

export default apiClient;
