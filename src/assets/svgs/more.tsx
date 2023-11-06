import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function MoreIcon({
  width = 12,
  height = 12,
  color = '#000000',
}: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="5"
        cy="12"
        r="2"
        transform="rotate(-90 5 12)"
        fill="#8A8C98"
      />
      <circle
        cx="12"
        cy="12"
        r="2"
        transform="rotate(-90 12 12)"
        fill="#8A8C98"
      />
      <circle
        cx="19"
        cy="12"
        r="2"
        transform="rotate(-90 19 12)"
        fill="#8A8C98"
      />
    </svg>
  );
}
