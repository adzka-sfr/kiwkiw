// Function to delete a cookie by setting its expiration date to the past
function resetCookie(name) {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

// Function to reset the "username" cookie
function resetUsernameCookie() {
    resetCookie("username");
    alert("Username cookie has been reset!");
}

// Call this function wherever needed to reset the cookie
