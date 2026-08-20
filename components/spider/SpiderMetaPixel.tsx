"use client";

import Script from "next/script";
import { SPIDER_META_PIXEL_ID } from "@/lib/config";

/**
 * Second Meta Pixel, scoped to the Spider-Man funnel (its own ad account /
 * campaign). The site-wide pixel in components/MetaPixel.tsx keeps running on
 * every page; this adds a separate pixel that also fires here. PageView uses
 * trackSingle so it only counts for the Spider-Man pixel.
 */
export default function SpiderMetaPixel() {
  if (!SPIDER_META_PIXEL_ID) return null;

  return (
    <>
      <Script id="meta-pixel-spider" strategy="afterInteractive">
        {`!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${SPIDER_META_PIXEL_ID}');
fbq('trackSingle', '${SPIDER_META_PIXEL_ID}', 'PageView');`}
      </Script>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          alt=""
          src={`https://www.facebook.com/tr?id=${SPIDER_META_PIXEL_ID}&ev=PageView&noscript=1`}
        />
      </noscript>
    </>
  );
}
