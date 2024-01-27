export const getGlobalStyles = (key: GlobalStylesKeys) => {
  const style = getComputedStyle(document.body);
  return style.getPropertyValue(key);
};
