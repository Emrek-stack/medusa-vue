const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")

const normalizeHref = (href: string) => {
  if (href.startsWith("../")) {
    return href
      .replace(/\.\.\//, "/components/")
      .replace(/\/page\.mdx/, "")
      .replace(/\/#/, "#")
  }

  if (href.startsWith("./")) {
    return href.replace(/^\.\//, "/components/").replace(/\/page\.mdx/, "")
  }

  return href
}

export const renderInlineMarkdown = (value: string) => {
  let html = escapeHtml(value)

  html = html.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    (_, label: string, href: string) =>
      `<a class="text-ui-fg-base underline underline-offset-4" href="${normalizeHref(href)}">${label}</a>`
  )

  html = html.replace(
    /`([^`]+)`/g,
    (_, code: string) =>
      `<code class="rounded-md border border-ui-border-base bg-ui-bg-subtle px-1.5 py-0.5 font-mono text-[0.92em]">${code}</code>`
  )

  html = html.replace(
    /\*\*([^*]+)\*\*/g,
    (_, text: string) => `<strong class="font-semibold text-ui-fg-base">${text}</strong>`
  )

  return html
}
