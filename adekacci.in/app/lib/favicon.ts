import { useEffect, useRef } from "react";

export const changeFavicon = (iconUrl: string) => {
  let favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement | null;

  if (!favicon) {
    favicon = document.createElement('link') as HTMLLinkElement;
    favicon.rel = 'icon';
    document.head.appendChild(favicon);
  }

  favicon.href = iconUrl;
};