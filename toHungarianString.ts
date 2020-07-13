export const toHungarianString = (text: string) => {
  return text
    .replace(/\u00c5\u0091/g, "ő")
    .replace(/\u00c3\u00b6/g, "ö")
    .replace(/\u00c3\u00b3/g, "ó")
    .replace(/\u00c3\u00a9/g, "é")
    .replace(/\u00c3\u00a1/g, "á")
    .replace(/\u00c3\u00ad/g, "í")
    .replace(/\u00c3\u00ba/g, "ú")
    .replace(/\u00c3\u00bc/g, "ü")
    .replace(/\u00c5\u00b1/g, "ű");
};
