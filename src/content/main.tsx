import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './views/App.tsx'
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

console.log(`[CRXJS] Hello world from content script!`)

const queryClient = new QueryClient();

const dbEntry = document.querySelector(".b-db_entry");
const view = document.createElement("div");

if (dbEntry) {
  dbEntry.insertAdjacentElement("afterend", view);
} else {
  console.error("None")
}

createRoot(view).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App/>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  </StrictMode>,
)
