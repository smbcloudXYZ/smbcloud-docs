import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>smbCloud Documentation</span>,
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="description" content="smbCloud Documentation" />
      <meta name="og:title" content="smbCloud Documentation" />
      <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
    </>
  ),
  project: {
    link: "https://github.com/smbcloudXYZ",
  },
  docsRepositoryBase: "https://github.com/smbcloudXYZ/smbcloud-docs/tree/main",
  footer: {
    content: (
      <span>
        MIT {new Date().getFullYear()} ©{' '}
        <a href="https://docs.smbcloud.xyz" target="_blank">
          smbCloud Documentation
        </a>
      </span>
    )
  },
};

export default config;
