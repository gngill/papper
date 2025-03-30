chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
  const currentTab = tabs[0];
  if (currentTab && currentTab.url.startsWith("https://www.mydreammapper.com/Home/Sleep")) {
    chrome.tabs.executeScript({ file: 'content.js' });
  } else {
    alert("This extension only works on https://www.mydreammapper.com/Home/Sleep");
  }
});