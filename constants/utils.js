export const generateRandomId = () => {
    return Math.random().toString(36).substr(2) + Date.now().toString(36);
  };