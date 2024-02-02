const urlPage = () => {
  return global.window?.location.href;
};

export const BASE_API_URL = `${urlPage()}/api`;
