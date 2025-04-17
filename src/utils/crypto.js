// utils/crypto.js

// Derive per-user key based on email
export function getUserKey(email) {
    // Safely encode Unicode string into Latin1-compatible base64
    return btoa(unescape(encodeURIComponent(email))).slice(0, 16);
  }
  
  
  export function encryptData(data, key) {
    const str = JSON.stringify(data) + key;
    return btoa(unescape(encodeURIComponent(str)));
  }
  
  export function decryptData(cipher, key) {
    try {
      const decoded = decodeURIComponent(escape(atob(cipher)));
      return JSON.parse(decoded.replace(key, ""));
    } catch (e) {
      return null;
    }
  }
  
