"use client";

import Script from "next/script";
import { useEffect, useState } from "react";

export default function ChatWidget() {
  const [isDesktop, setIsDesktop] = useState<boolean | null>(null);

  useEffect(() => {
    setIsDesktop(window.innerWidth >= 768);
  }, []);

  if (!isDesktop) return null;

  return (
    <Script
      src="https://widgets.leadconnectorhq.com/loader.js"
      data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
      data-widget-id="6a2b13ef0e65563548b74c60"
      strategy="afterInteractive"
    />
  );
}
