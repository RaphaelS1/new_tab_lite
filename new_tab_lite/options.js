chrome.storage.sync.get("url", ({ url }) => {
  document.querySelector("#url").value = url || "";
});

document.querySelector("#save").onclick = () => {
  const url = document.querySelector("#url").value.trim();
  if (url && !/^https?:\/\//i.test(url)) return alert("Enter a valid HTTP(S) URL");
  chrome.storage.sync.set({ url });
};