import { useState, useEffect } from "react";

export const useLocale = (
  component: string,
  lang: string
): {
  content: any;
  isLoading: boolean;
} => {
  const [content, setContent] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  useEffect(() => {
    let isMounted = true;

    setIsLoading(true);
    const modules = import.meta.glob(["../components/**/locales/*.json"], {
      eager: true,
    });
    let exportedJson: any =
      modules[`../components/${component}/locales/${lang}.json`];
    setContent(exportedJson!.default);
    setIsLoading(false);

    return () => {
      isMounted = false;
    };
  }, [component, lang]);
  return { content, isLoading };
};
