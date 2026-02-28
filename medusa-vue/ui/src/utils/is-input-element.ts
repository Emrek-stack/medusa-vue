export function isInputElement(element: HTMLElement | Element | null | undefined): boolean {
    if (!element) {
        return false
    }

    const tagName = element.tagName.toLowerCase()
    const isContentEditable = (element as HTMLElement).isContentEditable

    return (
        tagName === "input" ||
        tagName === "textarea" ||
        tagName === "select" ||
        isContentEditable
    )
}
