const baseUrl = 'http://localhost:3001'


export const getTracks = async (code: string, offset: number) => {
  const response = await fetch(baseUrl + '/tracks', {
    method: 'POST',
    body: JSON.stringify({code, offset}),
    headers: {
      'Content-Type': 'application/json'
    }
  });
  const tracks = await response.json();
  return tracks;
};