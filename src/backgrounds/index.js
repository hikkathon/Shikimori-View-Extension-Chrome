chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "getCurrentTabUrl") {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      sendResponse(tabs[0]?.url || "");
    });
    return true;
  }
});

chrome.webNavigation.onCommitted.addListener((details) => {
  console.log('Пользователь перешел на:', details.url);

  if (details.transitionType) {
    console.log('Тип перехода:', details.transitionType);
  }
});