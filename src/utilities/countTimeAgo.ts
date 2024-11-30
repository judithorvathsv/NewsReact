export function countTimeAgo(dateString: string): string {
    const now = new Date();
    const pastDate = new Date(dateString);    

    const diffInMilliseconds = now.getTime() - pastDate.getTime();

    const seconds = Math.floor(diffInMilliseconds / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
  
    if (days > 1) {
        return `${days} d${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} h${hours > 1 ? 's' : ''} ago`;
    } else if (minutes > 0) {
        return `${minutes} min${minutes > 1 ? 's' : ''} ago`;
    } else {
        return 'Just now';
    }
}