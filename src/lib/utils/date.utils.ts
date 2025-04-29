export const formatTimeAgo = (dateString: string): string => {
  const date = new Date(dateString)
  const now = new Date()
  const diffInSeconds = Math.floor((now.getTime() - date.getTime()) / 1000)

  // Lidar com casos onde o relógio do cliente pode estar dessincronizado
  if (diffInSeconds < 0) {
    return "just now"
  } else if (diffInSeconds < 60) {
    return diffInSeconds === 1 ? "1 second ago" : `${diffInSeconds} seconds ago`
  } else if (diffInSeconds < 3600) {
    const minutes = Math.floor(diffInSeconds / 60)
    return minutes === 1 ? "1 minute ago" : `${minutes} minutes ago`
  } else if (diffInSeconds < 86400) {
    const hours = Math.floor(diffInSeconds / 3600)
    return hours === 1 ? "1 hour ago" : `${hours} hours ago`
  } else {
    const days = Math.floor(diffInSeconds / 86400)
    return days === 1 ? "1 day ago" : `${days} days ago`
  }
}
