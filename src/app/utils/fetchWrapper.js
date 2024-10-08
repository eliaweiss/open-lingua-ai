import useAppStore from "../store/appStore";

export const fetchWrapper = async (url, options = {}, showLoader = true) => {
  const { setIsLoadingAppCounter } = useAppStore.getState();

  try {
    if (showLoader) setIsLoadingAppCounter(true);
    // await new Promise((resolve) => setTimeout(resolve, 1000));

    const response = await fetch(url, options);
    const { success, data, error } = await response.json();
    if (success) return data;
    else throw new Error(error);
  } finally {
    if (showLoader) setIsLoadingAppCounter(false);
  }
};
