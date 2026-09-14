'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

interface VideoCardProps {
  src: string;
  poster: string;
  altText: string;
}

function VideoCard({ src, poster, altText }: VideoCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const togglePlay = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="group relative aspect-square w-full max-w-[482px] overflow-hidden rounded-[10px] border border-[#E8E6E6]/86 bg-black shadow-sm transition-all duration-400 ease-in-out hover:scale-[1.03] hover:shadow-md">
      {/* Video element */}
      <video
        ref={videoRef}
        src={src}
        className="h-full w-full object-cover"
        autoPlay
        loop
        muted={isMuted}
        playsInline
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onLoadedData={() => setIsVideoLoaded(true)}
      />

      {/* Next.js Optimized Image Poster overlay until video is loaded */}
      {!isVideoLoaded && (
        <Image src={poster} alt={altText} fill unoptimized priority className="object-cover" />
      )}

      {/* Hover Controls Overlay */}
      <div className="absolute inset-0 flex flex-col justify-between bg-black/10 p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        {/* Play / Pause Toggle Button */}
        <button
          onClick={togglePlay}
          className="flex h-10 w-10 items-center justify-center self-start rounded-full bg-white/90 text-[#50956D] shadow-sm transition-colors hover:bg-white focus:outline-none"
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>

        {/* Volume Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="flex h-10 w-10 items-center justify-center self-end rounded-full bg-white/90 text-[#50956D] shadow-sm transition-colors hover:bg-white focus:outline-none"
          aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
        >
          {isMuted ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77zm-11 5.77v6h4l5 5v-16l-5 5h-4z" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
}

export function Gallery() {
  const t = useTranslations('gallery');

  return (
    <section aria-labelledby="gallery-heading" className="w-full bg-[#FFFFFF] py-20">
      <div className="mx-auto flex w-full max-w-[980px] flex-col items-center px-6">
        {/* Section Heading */}
        <h2
          id="gallery-heading"
          className="w-full text-center font-sans text-[38px] leading-[1.4] font-bold text-black"
        >
          {t('title')}
        </h2>

        {/* Section Description */}
        <p className="mt-4 w-full max-w-[754px] text-center font-sans text-base leading-[1.4] font-normal text-[#595959]">
          {t('description')}
        </p>

        {/* Video Grid */}
        <div className="mt-16 grid w-full max-w-[980px] grid-cols-1 justify-items-center gap-6 sm:grid-cols-2">
          {/* Sound Journey Video 1 */}
          <VideoCard
            src="https://video.wixstatic.com/video/c4c529_5c53ae49f0c14747bd7b840cae8f8da3/480p/mp4/file.mp4"
            poster="https://static.wixstatic.com/media/c4c529_5c53ae49f0c14747bd7b840cae8f8da3f000.jpg"
            altText={t('alt1')}
          />

          {/* Sound Journey Video 2 */}
          <VideoCard
            src="https://video.wixstatic.com/video/c4c529_060e8871d8874560a7ec7f9b5198ae19/720p/mp4/file.mp4"
            poster="https://static.wixstatic.com/media/c4c529_060e8871d8874560a7ec7f9b5198ae19f000.jpg"
            altText={t('alt2')}
          />
        </div>
      </div>
    </section>
  );
}
