// Helper function to open the search tab
function openSearchTab(text, currentTab) {
  const searchQuery = encodeURIComponent(text.trim());
  const searchUrl = `https://www.google.com/search?q=${searchQuery}`; 

  browser.tabs.create({
    url: searchUrl,
    active: false,
    index: currentTab.index + 1
  });
}

// 1. Context Menu Setup & Listener
browser.runtime.onInstalled.addListener(() => {
  browser.contextMenus.create({
    id: "bg-search",
    title: "Search '%s' in background",
    contexts: ["selection"]
  });
});

browser.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "bg-search" && info.selectionText) {
    openSearchTab(info.selectionText, tab);
  }
});

// 2. Keyboard Shortcut Listener
browser.commands.onCommand.addListener(async (command) => {
  if (command === "trigger-bg-search") {
    // Get the active tab
    const [tab] = await browser.tabs.query({ active: true, currentWindow: true });
    if (!tab) return;

    // Inject a quick script to grab the highlighted text on the page
    try {
      const results = await browser.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => window.getSelection().toString()
      });

      const selectedText = results[0]?.result;
      if (selectedText && selectedText.trim().length > 0) {
        openSearchTab(selectedText, tab);
      }
    } catch (err) {
      console.error("Could not read text selection:", err);
    }
  }
});