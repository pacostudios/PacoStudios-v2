'use client';
import React, { FC, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import ClipPathTitle from '../ClipPathTitle';

gsap.registerPlugin(ScrollTrigger);

const BenefitSection: FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState<boolean>(true);

  const togglePlay = (): void => {
    if (!videoRef.current) return;
    if (videoRef.current.paused) {
      videoRef.current.play();
      setPlaying(true);
    } else {
      videoRef.current.pause();
      setPlaying(false);
    }
  };

  useGSAP((): void => {
    const revealTl: gsap.core.Timeline = gsap.timeline({
      scrollTrigger: {
        trigger: '.benefit-section',
        start: 'top 60%',
        end: 'top top',
        scrub: 1.5,
      },
    });

    const items = [
      '.first-title',
      '.second-title',
      '.third-title',
      '.fourth-title',
      '.fifth-title'
    ];

    items.forEach((item) => {
      revealTl.to(
        `.benefit-section ${item}`,
        {
          duration: 1,
          opacity: 1,
          clipPath: 'polygon(0% 0%, 100% 0, 100% 100%, 0% 100%)',
          ease: 'circ.out',
        }
      );
    });
  });

  // Let's rewrite the useGSAP exactly as requested to maintain the sequential animation.
  // We'll just define it properly below.

  return (
    <section className='benefit-section bg-white'>
      {/* ── Stacked benefit banners ── */}
      <div className='flex flex-col items-center justify-center min-h-[80vh] md:min-h-dvh gap-0 py-24'>
        {/* 1 — UX/UI DESIGN */}
        <ClipPathTitle
          className='first-title'
          wrapperClassName='rotate-[2deg] relative z-10'
          title='UX/UI DESIGN'
          color='#000000'
          bg='#FBECA5'
          borderColor='#000000'
          fontSize='clamp(2.5rem, 8vw, 8rem)'
        />

        {/* 2 — WEB DEVELOPMENT */}
        <ClipPathTitle
          className='second-title'
          wrapperClassName='-rotate-[0deg] relative z-20 -mt-[4vw] md:-mt-[2vw]'
          title='WEB DEVELOPMENT'
          color='#F3EAE1'
          bg='#714227'
          borderColor='#000000'
          fontSize='clamp(2.5rem, 8vw, 8rem)'
        />

        {/* 3 — 3D DEVELOPMENT */}
        <ClipPathTitle
          className='third-title'
          wrapperClassName='rotate-[1deg] relative z-10 -mt-[3vw] md:-mt-[1.5vw]'
          title='3D DEVELOPMENT'
          color='#FF7A00'
          bg='#FDE4CE'
          borderColor='#000000'
          fontSize='clamp(2.5rem, 8vw, 8rem)'
        />

        {/* 4 — BRANDING */}
        <ClipPathTitle
          className='fourth-title'
          wrapperClassName='-rotate-[2deg] relative z-20 -mt-[4vw] md:-mt-[2vw]'
          title='BRANDING'
          color='#000000'
          bg='#E96E01'
          borderColor='#000000'
          fontSize='clamp(2.5rem, 8vw, 8rem)'
        />

        {/* 5 — CHAT BOT SOLUTION */}
        <ClipPathTitle
          className='fifth-title'
          wrapperClassName='rotate-[3deg] relative z-30 -mt-[3vw] md:-mt-[1.5vw]'
          title='CHAT BOT SOLUTION'
          color='#FFFFFF'
          bg='#1E1E1E'
          borderColor='#000000'
          fontSize='clamp(2.5rem, 8vw, 8rem)'
        />
      </div>

      {/* ── Pinned video section ── */}
      <div className='vd-pin-section relative'>
        <video ref={videoRef} autoPlay muted loop playsInline>
          <source src='/videos/benefit.mp4' type='video/mp4' />
        </video>

        <button
          className='play-btn'
          onClick={togglePlay}
          aria-label={playing ? 'Pause video' : 'Play video'}
        >
          <img
            src={playing ? '/icons/pause.svg' : '/icons/play.svg'}
            alt={playing ? 'Pause' : 'Play'}
          />
        </button>
      </div>
    </section>
  );
};

export default BenefitSection;