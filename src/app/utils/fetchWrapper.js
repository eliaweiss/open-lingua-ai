import useAppStore from "../store/appStore";

export const fetchWrapper = async (url, options = {}, showLoader = true) => {
  const { setIsLoadingAppCounter } = useAppStore.getState();

  try {
    if (showLoader) setIsLoadingAppCounter(true);
    const response = await fetch(url, options);
    return response;
  } finally {
    if (showLoader) setIsLoadingAppCounter(false);
  }
};
