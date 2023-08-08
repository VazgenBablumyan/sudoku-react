export const getStorage = (key) => localStorage.getItem(key);
export const setStorage = (key, value) => localStorage.setItem(key, JSON.stringify(value))
export const removeStorage = (key) => localStorage.removeItem(key);
