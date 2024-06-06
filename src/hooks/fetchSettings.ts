const apiKey = import.meta.env.VITE_TMDB_AUTH_TOKEN;
export const fetchSettings = {
  apiKey: apiKey,
  options: {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
  },
};
