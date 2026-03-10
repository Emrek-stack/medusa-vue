export interface NotificationData {
  title: string
  description?: string
  file?: {
    filename?: string
    url?: string
    mimeType?: string
  }
}

export interface AdminNotification {
  id: string
  created_at: string
  data?: unknown
}

export interface AdminNotificationListResponse {
  notifications: AdminNotification[]
  count: number
  offset: number
  limit: number
}

export interface AdminNotificationListParams {
  offset?: number
  limit?: number
  fields?: string
  channel?: string
}
