// Function to set a cookie
function setCookie(name, value, hours) {
    let expires = new Date(Date.now() + hours * 60 * 60 * 1000).toUTCString();
    document.cookie = `${name}=${value}; expires=${expires}; path=/`;
  }

  // Function to get a cookie by name
  function getCookie(name) {
    let cookies = document.cookie.split('; ').reduce((acc, cookie) => {
      let [key, val] = cookie.split('=');
      acc[key] = val;
      return acc;
    }, {});
    return cookies[name];
  }