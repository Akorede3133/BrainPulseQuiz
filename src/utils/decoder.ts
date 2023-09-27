
export const decodeHtmlEntities = (input: string): string => {
  const doc = new DOMParser().parseFromString(input, "text/html");
  if (doc.documentElement.textContent) {
    return doc.documentElement.textContent;
  }
  return ''
}