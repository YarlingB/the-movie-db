async function http<T>(path: string, config: RequestInit): Promise<T> {
  const request = new Request(path, config);
  const response = await fetch(request);
  if (!response.ok) {
    console.log('response error', response);
    throw new Error('Could not load info');
  }
  return response.json().catch(() => {
    throw new Error('Error getting response');
  });
}

export async function get<T>(path: string, config?: RequestInit): Promise<T> {
  const init = { method: 'get', ...config };
  return http<T>(path, init);
}
