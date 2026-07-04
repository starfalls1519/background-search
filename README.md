# Background Search Opener

A lightweight, distraction-free browser extension that lets you look up highlighted text in a background Google search tab without losing your place on your current page. It spawns the new tab silently right next to your active one.

You can trigger a background search in two ways:
1. **Right-click context menu**
2. **Keyboard shortcut** (`Ctrl+Shift+Y` / `Cmd+Shift+Y`)

---

## Features

* **Context Menu Integration:** Highlight any text, right-click, and select *"Search '%s' in background"*.
* **Keyboard Hotkey:** Instantly search selected text with a customizable key binding.
* **Silent Tab Spawning:** New tabs open immediately to the right of your active tab, remaining unfocused (`active: false`) so your workflow isn't disrupted.
* **Manifest V3 Compliant:** Built using the modern, secure extension architecture.

---

## File Structure

To set this up locally, ensure your project directory looks like this:
```text
background-search/
├── manifest.json
├── background.js
└── README.md