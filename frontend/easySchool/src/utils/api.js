const BASE_URL = "http://localhost:5000/api";

export const apiCall = async (endpoint, options = {}) => {
  const token = localStorage.getItem("token");

  const headers = { ...options.headers };

  //Automatically handle JSON  body, unless it's a FormData (For File uploads)
  if (!(options.body instanceof FormData) && options.body) {
    headers["Content-Type"] = "application/json";
    options.body = JSON.stringify(options.body);
  }

  //Attaching token if it exists

  if (token) {
    headers["Authorization"] = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    headers,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.error || "Something went wrong");
  }
  return data;
};
