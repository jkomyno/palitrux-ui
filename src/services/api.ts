const colorUrl = 'http://localhost:8080/dominantColors';

export function fetchColor(img: File) {
  const formData = new FormData();
  formData.append('file', img);
  formData.append('limit', "3");

  const init = {
    method: 'POST',
    body: formData,
  };

  return fetch(colorUrl, init)
    .then(response => response.json()
  );
}