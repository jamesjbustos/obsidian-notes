import * as Component from "./quartz/components"

import { PageLayout, SharedLayout } from "./quartz/cfg"

// components shared across all pages
export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),
  header: [],
  afterBody: [Component.MobileOnly(Component.Explorer())],
  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/jamesjbustos",
      "𝕏": "https://x.com/jamesjbustos",
    },
  }),
}

// components for pages that display a single page (e.g. a single note)
export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    (props) => (props.fileData.slug === "index" ? null : Component.ArticleTitle()(props)),
    (props) => (props.fileData.slug === "index" ? null : Component.ContentMeta()(props)),
  ],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [Component.DesktopOnly(Component.TableOfContents())],
}

// components for pages that display lists of pages  (e.g. tags or folders)
export const defaultListPageLayout: PageLayout = {
  beforeBody: [Component.Breadcrumbs(), Component.ArticleTitle(), Component.ContentMeta()],
  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer()),
  ],
  right: [],
}
