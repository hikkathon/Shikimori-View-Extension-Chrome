import { createRoot, Root } from 'react-dom/client'
import App from './views/App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();
let isAppMounted = false;
let root: Root | null = null;

const mountApp = () => {
  if (isAppMounted) return;

  const dbEntry = document.querySelector(".b-db_entry");
  const existingView = document.getElementById("extension-plugin");

  if (existingView) {
    root = createRoot(existingView);
    isAppMounted = true;
  } else {
    const view = document.createElement("div");
    view.id = "extension-plugin";

    if (dbEntry) {
      dbEntry.insertAdjacentElement("afterend", view);
      root = createRoot(view);
      isAppMounted = true;
    } else {
      return;
    }
  }

  root.render(
    <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  );
};

const unmountApp = () => {
  if (root) {
    root.unmount();
    isAppMounted = false;
    const view = document.getElementById("extension-plugin");
    if (view) view.remove();
  }
};

document.addEventListener('turbolinks:load', mountApp);
document.addEventListener('turbolinks:before-cache', unmountApp);

mountApp();

let lastUrl = location.href;
new MutationObserver(() => {
  const currentUrl = location.href;
  if (currentUrl !== lastUrl) {
    lastUrl = currentUrl;
    mountApp();
    chrome.runtime.sendMessage({type: 'navigation', url: currentUrl});
  }
}).observe(document, {subtree: true, childList: true});