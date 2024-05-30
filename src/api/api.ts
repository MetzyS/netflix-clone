export const fetchSeries = async (): Promise<{}> => {
  const data = fetch("https://api.tvmaze.com/shows").then((response) =>
    console.log(response)
  );
  return {};
};

export const fetchPopularSeries = async (): Promise<{
  data: {};
  isLoading: boolean;
}> => {
  let isLoading = true;
  const response = await fetch("https://api.tvmaze.com/shows");
  const data = await response.json();
  isLoading = false;
  return { isLoading, data };
};
