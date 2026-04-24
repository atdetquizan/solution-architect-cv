const ABSOLUTE_OR_SPECIAL_URL_PATTERN = /^(?:[a-z]+:)?\/\//i;

export const withBaseUrl = (path: string): string => {
  if (
    ABSOLUTE_OR_SPECIAL_URL_PATTERN.test(path)
    || path.startsWith('data:')
    || path.startsWith('mailto:')
    || path.startsWith('#')
  ) {
    return path;
  }

  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`;
};
