import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function StampIcon({ width = 34, height = 36, color = '#ffc74c' }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -3 43 54"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.38719 44.2815H40.2805V38.8332H3.38719V44.2815ZM35.01 22.4885H29.5287C28.1897 22.4885 27.1043 21.3665 27.1043 19.9823V19.1769C27.1043 16.847 27.8356 14.6302 28.8716 12.5607C29.6218 11.0616 29.9339 9.29261 29.6168 7.41722C29.0593 4.11591 26.4488 1.39859 23.2544 0.823971C18.2614 -0.0741404 13.9281 3.87329 13.9281 8.86782C13.9281 10.0732 14.1851 11.2123 14.6438 12.2372C15.7415 14.6932 16.5634 17.2701 16.5634 19.9763V19.9823C16.5634 21.3665 15.478 22.4885 14.1389 22.4885H8.65766C4.2914 22.4885 0.751953 26.1473 0.751953 30.6609V33.385C0.751953 34.8892 1.93204 36.1091 3.38719 36.1091H40.2805C41.7356 36.1091 42.9157 34.8892 42.9157 33.385V30.6609C42.9157 26.1473 39.3763 22.4885 35.01 22.4885Z"
        fill={color}
      />
    </svg>
  );
}
