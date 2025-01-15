    export const setCookie = (name, value, options = {}) => {
    let cookieString = `${name}=${value}; path=${options.path || '/'}`;
  
    if (options.expires) {
      cookieString += `; expires=${options.expires.toUTCString()}`;
    }
  
    if (options.secure) {
      cookieString += '; Secure';
    }
  
    if (options.sameSite) {
      cookieString += `; SameSite=${options.sameSite}`;
    }
  
    document.cookie = cookieString;
  };
  
  export const getCookie = (name) => {
    const cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      const [key, value] = cookie.split('=');
      acc[key] = value;
      return acc;
    }, {});
  
    console.log("Cookies:", cookies); // Log semua cookies
    console.log(`Cookie "${name}":`, cookies[name]); 

    return cookies[name];
  };
  
  export const deleteCookie = (name, options = {}) => {
    setCookie(name, '', { ...options, expires: new Date(0) });
  };
  