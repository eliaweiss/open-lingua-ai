export const myLocalStorage = {
  get: (key, defaultValue = []) => {
    if (typeof window === "undefined") return defaultValue;
    const storedValue = localStorage.getItem(key);
    if (!storedValue) {
      return defaultValue;
    }
    try {
      return JSON.parse(storedValue);
    } catch {
      return storedValue;
    }
  },
  set: (key, value) => {
    if (typeof window !== "undefined") {
      localStorage.setItem(key, JSON.stringify(value));
    }
  },
  remove: (key) => {
    if (typeof window !== "undefined") {
      localStorage.removeItem(key);
    }
  },
};

export const storage = {
  get: async (key, defaultValue = []) => {
    return myLocalStorage.get(key, defaultValue);
  },
  set: async (key, value) => {
    myLocalStorage.set(key, value);
  },
  remove: async (key) => {
    myLocalStorage.remove(key);
  },
};