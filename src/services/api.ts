const colorUrl = 'http://localhost:3000/palitra';

export function fetchColor(img: File) {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('name', img.name);

  const init = {
    method: 'POST',
    body: formData,
  };

  return fetch(colorUrl, init)
    .then(response => response.json())
}