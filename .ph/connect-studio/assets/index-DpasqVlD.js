const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/app-loader-KTD3Q6e9.js","assets/main.CzEw2R-H.js","assets/app-loader-CjrEwupY.css"])))=>i.map(i=>d[i]);
import { _ as __vitePreload } from "./main.CzEw2R-H.js";
import { createRoot } from "react-dom/client";
async function renderApp(element) {
  const AppLoader = await __vitePreload(() => import("./app-loader-KTD3Q6e9.js").then((n) => n.c9), true ? __vite__mapDeps([0,1,2]) : void 0);
  createRoot(element).render(AppLoader.default);
}
const AppElement = document.getElementById("app");
if (!AppElement) {
  throw new Error("#app element not found!");
}
renderApp(AppElement).catch(console.error);
