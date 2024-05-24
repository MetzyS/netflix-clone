import { useState, useEffect } from "react";

export const useLocale = (
  component: string,
  lang: string
): {
  content: any;
  isLoading: boolean;
  error: Error | null;
} => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);
  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    import(`../components/${component}/locales/${lang}.json`)
      .then((response) => {
        if (isMounted) {
          setContent(response.default);
          setError(null);
        }
      })
      .catch((errors) => {
        if (isMounted) {
          setError(errors);
        }
      })
      .finally(() => {
        if (isMounted) {
          setIsLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [component, lang]);
  return { content, isLoading, error };
};
