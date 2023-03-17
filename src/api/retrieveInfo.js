export async function retrieveInfoApi(url) {
  try {
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (err) {
    throw err;
  }
}