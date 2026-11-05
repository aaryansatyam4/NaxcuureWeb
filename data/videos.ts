export type VideoTag = 'fda' | 'marketing';

export interface SiteVideo {
  id: string; // YouTube video id
  tag: VideoTag;
}

export const videos: SiteVideo[] = [
  { id: 'xbJPU51duSc', tag: 'fda' },
  { id: 'IojbhMQgykY', tag: 'marketing' },
];
