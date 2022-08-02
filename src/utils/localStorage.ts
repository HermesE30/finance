export function getStorage() {
  const storage = localStorage.getItem('data');
  if (storage) {
    return JSON.parse(storage);
  }
  return [];
}

export function setStorage(data: any) {
  const dataObj = JSON.stringify(data);
  return localStorage.setItem('data', dataObj);
}
