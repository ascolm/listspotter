const baseUrl = 'http://localhost:3001'


export const getTracks = async (code: string) => {
  const response = await fetch(baseUrl + '/tracks');
  const tracks = response.json();
  return tracks;
};