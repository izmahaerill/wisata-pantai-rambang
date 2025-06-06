import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export function useBlogs() {
  const { data, error, isLoading, mutate } = useSWR("/api/blog", fetcher);
  return {
    blogs: data,
    isLoading,
    isError: error,
    mutate,
  };
}
