function getSessionStorage(key: string) {
  const storageValue = sessionStorage.getItem(key);
  if (storageValue) {
    return JSON.parse(storageValue);
  }
  return [];
}

export default getSessionStorage;
