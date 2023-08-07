import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", gap: "14px" }}>
      <img
        width="32"
        src="https://vitess.io/img/logos/vitess.png"
        alt="vitess"
      />
      <span
        style={{
          fontWeight: "bold",
          fontSize: "1.4rem",
        }}
      >
        Vitess Docs KR (한글 번역본)
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/dokdo2013/vitess-docs-kr",
  },
  docsRepositoryBase: "https://github.com/dokdo2013/vitess-docs-kr/tree/main",
  footer: {
    text: "Copyright © 2023 Vitess Docs KR, Hyeon Woo Jo. Built with Nextra",
  },
  i18n: [
    { locale: "en", text: "English" },
    { locale: "ko", text: "한국어" },
  ],
  useNextSeoProps() {
    return {
      titleTemplate: "%s - Vitess Docs KR",
    };
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default config;
