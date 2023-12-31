chrome.tabs.onUpdated.addListener((tabId, tab) => {
  console.log("tab", tab);
  if (tab.url && tab.url.includes("nseindia.com")) {
    console.log("nse website loaded");
    injectButtonClickingScript(tabId)
  }
});

function injectButtonClickingScript(tabId) {
  console.log("injecting script into this website");
  //inject button click script
  chrome.scripting.executeScript({
    target: { tabId: tabId, allFrames: true },
    files: ["button_clicker.js"],
  });
  console.log("injected the script");
}
