export interface YouTubeVideo {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    publishedAt: string;
}

export async function getChannelVideos(maxResults: number = 3): Promise<YouTubeVideo[]> {
    const channelId = 'UCIfnu_qzUCTm7QGEpALbqYQ'; // @gems-coder channel ID
    const apiKey = 'AIzaSyAsYlU2diQ2CNfP_HgmXgoZ6HtmKiPGCqI';
    
    if (!apiKey) {
        console.error('YouTube API key is not configured. Please add NEXT_PUBLIC_YOUTUBE_API_KEY to your .env.local file');
        return [];
    }

    try {
        const response = await fetch(
            `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}&type=video`
        );

        if (!response.ok) {
            const error = await response.json();
            console.error('YouTube API Error:', error);
            throw new Error(`Failed to fetch YouTube videos: ${error.error?.message || 'Unknown error'}`);
        }

        const data = await response.json();
        
        return data.items.map((item: any) => ({
            id: item.id.videoId,
            title: item.snippet.title,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.high.url,
            publishedAt: item.snippet.publishedAt
        }));
    } catch (error) {
        console.error('Error fetching YouTube videos:', error);
        return [];
    }
} 