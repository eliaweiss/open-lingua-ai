export function getLanguagesFromFileName(filename) {
  const regex = /\b[a-z]{2}-[A-Z]{2}\b/g;
  return filename.match(regex);
}
