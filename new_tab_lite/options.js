
const input = document.querySelector("#url");
const status = document.querySelector("#status");

chrome.storage.sync.get("url", ({ url }) => {
  input.value = url || "";
});

document.querySelector("#save").onclick = () => {
  const url = input.value.trim();
  if (url && !/^https?:\/\/.+\..+/i.test(url)) {
    status.textContent = "Please enter a valid URL starting with https://";
    status.style.color = "#c62828";
    return;
  }
  chrome.storage.sync.set({ url }, () => {
    status.textContent = "Saved! New tabs will now open this URL.";
    status.style.color = "#16803c";
  });
};

input.oninput = () => status.textContent = "";
