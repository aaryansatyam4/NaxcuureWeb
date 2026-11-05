import React, { useState } from 'react';

interface VideoCardProps {
  id: string;
  label: string;
  playLabel: string;
  className?: string;
}

/**
 * YouTube "facade": shows the thumbnail + play button and only loads the real player
 * when the visitor clicks, so pages stay fast.
 */
const VideoCard: React.FC<VideoCardProps> = ({ id, label, playLabel, className = '' }) => {
  const [playing, setPlaying] = useState(false);
  const [thumb, setThumb] = useState<string | null>(`https://i.ytimg.com/vi/${id}/maxresdefault.jpg`);
  const fallback = `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;

  return (
    <div className={`group relative isolate aspect-video overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary-800 to-ink shadow-[0_30px_60px_-30px_rgba(15,14,36,0.6)] sm:rounded-4xl ${className}`}>
      {playing ? (
        <iframe
          className="absolute inset-0 h-full w-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={label}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button type="button" onClick={() => setPlaying(true)} className="absolute inset-0 h-full w-full text-left" aria-label={`${playLabel}: ${label}`}>
          {thumb && (
          <img
            src={thumb}
            alt=""
            loading="lazy"
            className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            onError={() => setThumb(thumb === fallback ? null : fallback)}
            onLoad={(e) => {
              // YouTube serves a 120px placeholder when no HD thumbnail exists
              if (e.currentTarget.naturalWidth <= 120 && thumb !== fallback) setThumb(fallback);
            }}
          />
          )}
          <span className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/70 via-ink/10 to-ink/20 transition-opacity group-hover:opacity-80" />
          <span className="absolute left-4 top-4 rounded-full bg-white/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-white ring-1 ring-white/30 backdrop-blur-md sm:left-6 sm:top-6">
            {label}
          </span>
          <span className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-accent text-white shadow-2xl transition-transform duration-300 group-hover:scale-110 sm:h-20 sm:w-20">
            <span className="absolute inset-0 animate-ping rounded-full bg-accent/40" />
            <svg viewBox="0 0 24 24" className="relative ml-1 h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" aria-hidden="true">
              <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
            </svg>
          </span>
          <span className="absolute bottom-4 left-4 text-sm font-semibold text-white/90 sm:bottom-6 sm:left-6">{playLabel}</span>
        </button>
      )}
    </div>
  );
};

export default VideoCard;
