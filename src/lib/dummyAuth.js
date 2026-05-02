const USER_KEY = "dummy_user";
const SESSION_KEY = "active_session";

// Save account (signup)
export const saveUser = (user) => {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
};

// Login session
export const loginUser = (user) => {
  localStorage.setItem(SESSION_KEY, JSON.stringify(user));
};

// Get logged-in user
export const getUser = () => {
  return JSON.parse(localStorage.getItem(SESSION_KEY));
};

// Get saved account (for login validation)
export const getSavedUser = () => {
  return JSON.parse(localStorage.getItem(USER_KEY));
};

// Logout ONLY removes session
export const logoutUser = () => {
  localStorage.removeItem(SESSION_KEY);
};