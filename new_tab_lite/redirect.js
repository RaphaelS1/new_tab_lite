chrome.storage.sync.get("url", ({ url }) => {
  if (url) location.replace(url);
});