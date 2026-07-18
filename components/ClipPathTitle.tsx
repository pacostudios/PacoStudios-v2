import React, { FC } from 'react';

interface ClipPathTitleProps {
  title: string;
  color: string;
  bg: string;
  className?: string;
  wrapperClassName?: string;
  borderColor: string;
  fontSize?: string;
}

const ClipPathTitle: FC<ClipPathTitleProps> = ({
  title,
  color,
  bg,
  className = '',
  wrapperClassName = '',
  borderColor,
  fontSize,
}: ClipPathTitleProps) => {
  return (
    <div className={`general-title ${wrapperClassName}`}>
      <div
        style={{
          clipPath: 'polygon(50% 0, 50% 0, 50% 100%, 50% 100%)',
          borderColor: borderColor,
        }}
        className={`${className} border-[3px] md:border-[6px] text-nowrap opacity-0`}
      >
        <div
          style={{
            backgroundColor: bg,
          }}
          className='pb-3 px-4 md:px-10 pt-2 md:pt-1'
        >
          <h2
            style={{
              color: color,
              fontSize: fontSize,
            }}
            className='font-black uppercase tracking-[-0.04em] leading-[1.1] scale-y-[1.1]'
          >
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;