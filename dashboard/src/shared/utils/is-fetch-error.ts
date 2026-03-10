type FetchErrorLike = {
  status?: number
}

export const isFetchError = (error: unknown): error is FetchErrorLike => {
  if (!error || typeof error !== "object") {
    return false
  }

  return "status" in error
}
