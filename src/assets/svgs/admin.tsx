import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function AdminIcon({
  width = 32,
  height = 32,
  color = '#000000',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.6829 16.6802C14.4372 16.6672 14.1915 16.6543 13.9346 16.6543C11.2319 16.6543 8.70787 17.5219 6.55239 19.011C5.56958 19.6844 5 20.9534 5 22.2871V24.4237C5 25.1359 5.50257 25.7186 6.11683 25.7186H15.3418C14.553 24.4139 14.0764 22.8901 13.9607 21.3025C13.845 19.7148 14.0941 18.1199 14.6829 16.6802Z"
        fill={color}
      />
      <path
        d="M13.9346 15.3592C16.4018 15.3592 18.4019 13.0402 18.4019 10.1796C18.4019 7.31899 16.4018 5 13.9346 5C11.4674 5 9.46729 7.31899 9.46729 10.1796C9.46729 13.0402 11.4674 15.3592 13.9346 15.3592Z"
        fill={color}
      />
      <path
        d="M25.9411 20.5382C25.9411 20.2533 25.9076 19.9944 25.8741 19.7224L26.8122 18.7771C27.0133 18.57 27.0579 18.2333 26.9239 17.9614L26.265 16.6406C26.2019 16.5105 26.1011 16.4106 25.9805 16.3584C25.8599 16.3063 25.7272 16.3053 25.6061 16.3557L24.4222 16.8218C24.0648 16.4722 23.6628 16.2003 23.2161 16.0061L22.9704 14.5946C22.944 14.4487 22.8753 14.3177 22.7757 14.2234C22.6761 14.1292 22.5517 14.0774 22.4231 14.0767H21.1053C20.8372 14.0767 20.6138 14.2968 20.558 14.5946L20.3123 16.0061C19.8656 16.2003 19.4635 16.4722 19.1061 16.8218L17.9223 16.3557C17.801 16.3074 17.669 16.3094 17.5488 16.3613C17.4287 16.4133 17.3278 16.512 17.2634 16.6406L16.6044 17.9614C16.4704 18.2333 16.5151 18.57 16.7161 18.7771L17.6543 19.7224C17.6208 19.9944 17.5872 20.2533 17.5872 20.5382C17.5872 20.8231 17.6208 21.0821 17.6543 21.354L16.7161 22.2993C16.5151 22.5065 16.4704 22.8431 16.6044 23.1151L17.2634 24.4359C17.3974 24.7078 17.6766 24.8243 17.9223 24.7207L19.1061 24.2546C19.4635 24.6042 19.8656 24.8761 20.3123 25.0704L20.558 26.4818C20.6138 26.7796 20.8372 26.9998 21.1053 26.9998H22.4231C22.6911 26.9998 22.9145 26.7796 22.9704 26.4818L23.2161 25.0704C23.6628 24.8761 24.0648 24.6042 24.4222 24.2546L25.6061 24.7207C25.8629 24.8243 26.131 24.6948 26.265 24.4359L26.9239 23.1151C27.0579 22.8431 27.0133 22.5065 26.8122 22.2993L25.8741 21.354C25.9076 21.0821 25.9411 20.8231 25.9411 20.5382ZM21.753 23.128C20.5245 23.128 19.5194 21.9626 19.5194 20.5382C19.5194 19.1138 20.5245 17.9484 21.753 17.9484C22.9815 17.9484 23.9867 19.1138 23.9867 20.5382C23.9867 21.9626 22.9815 23.128 21.753 23.128Z"
        fill={color}
      />
    </svg>
  );
}
