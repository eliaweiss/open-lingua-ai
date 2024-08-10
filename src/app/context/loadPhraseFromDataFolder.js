const loadPhraseFromDataFolder = async (avt) => {
  try {
    // Attempt to load the .json file
    const jsonResponse = await fetch(`/data/${avt}.json`);

    if (!jsonResponse.ok) {
      // If the response is not ok, throw an error to be caught by the catch block
      throw new Error(`Could not load JSON file: ${jsonResponse.statusText}`);
    }

    const phrases = await jsonResponse.json();
    return phrases;
  } catch (jsonError) {
    console.warn("JSON file not found or other error:", jsonError.message);

    // If the .json file is not found, try loading the .js file
    try {
      const phrases = (await import(`../../data/${avt}.js`)).phrases;
      return phrases;
    } catch (jsError) {
      console.error("JS file not found or other error:", jsError.message);
      throw new Error(`File not found: ${avt}.js or ${avt}.json`);
    }
  }
};

export default loadPhraseFromDataFolder;
