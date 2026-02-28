export type ProgressStatus = "not-started" | "in-progress" | "completed"

export type DateRange = {
    from: Date | undefined
    to?: Date | undefined
}

export type ToasterPosition =
    | "top-left"
    | "top-center"
    | "top-right"
    | "bottom-left"
    | "bottom-center"
    | "bottom-right"

export type ToastVariant =
    | "info"
    | "success"
    | "warning"
    | "error"
    | "loading"
    | "message"

export type ToastActionVariant = "default" | "destructive"

export type ToastAction = {
    label: string
    altText: string
    onClick: () => void | Promise<void>
    variant?: ToastActionVariant
}

export type Granularity = "day" | "hour" | "minute" | "second"
