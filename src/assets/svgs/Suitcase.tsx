import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function SuitCaseIcon({
  width = 34,
  height = 36,
  color = '#000000',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -2 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M26.7109 37.1933C26.7109 36.641 27.1587 36.1933 27.7109 36.1933H31.9364C32.4887 36.1933 32.9364 36.641 32.9364 37.1933V41.6473C32.9364 42.1996 32.4887 42.6473 31.9364 42.6473H27.7109C27.1587 42.6473 26.7109 42.1996 26.7109 41.6473V37.1933ZM37.6054 37.1933C37.6054 36.641 38.0532 36.1933 38.6054 36.1933H42.8309C43.3832 36.1933 43.8309 36.641 43.8309 37.1933V41.6473C43.8309 42.1996 43.3832 42.6473 42.8309 42.6473H38.6054C38.0532 42.6473 37.6054 42.1996 37.6054 41.6473V37.1933ZM26.7109 25.8987C26.7109 25.3464 27.1587 24.8987 27.7109 24.8987H31.9364C32.4887 24.8987 32.9364 25.3464 32.9364 25.8987V30.3527C32.9364 30.905 32.4887 31.3527 31.9364 31.3527H27.7109C27.1587 31.3527 26.7109 30.905 26.7109 30.3527V25.8987ZM37.6054 25.8987C37.6054 25.3464 38.0532 24.8987 38.6054 24.8987H42.8309C43.3832 24.8987 43.8309 25.3464 43.8309 25.8987V30.3527C43.8309 30.905 43.3832 31.3527 42.8309 31.3527H38.6054C38.0532 31.3527 37.6054 30.905 37.6054 30.3527V25.8987Z"
        fill="#FBC339"
        stroke="#FBC339"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M43.7012 12.6879C43.5548 12.177 43.2875 11.7068 42.9174 11.3231C42.3338 10.7181 41.5426 10.3779 40.7173 10.377H31.3791V3.92295C31.3783 3.06735 31.0501 2.24704 30.4665 1.64204C29.8829 1.03704 29.0917 0.696777 28.2664 0.695923H15.8155C14.9902 0.696777 14.199 1.03704 13.6154 1.64204C13.0319 2.24704 12.7036 3.06735 12.7028 3.92295V10.377H3.36467C2.53938 10.3779 1.74813 10.7181 1.16456 11.3231C0.580988 11.9281 0.252777 12.7484 0.251953 13.604V36.1932C0.252777 37.0488 0.580988 37.8691 1.16456 38.4741C1.74813 39.0791 2.53938 39.4194 3.36467 39.4202H23.5973V38.8495H23.6334V25.1511C23.5973 22.7473 23.6334 21.7265 25.7549 21.7265H43.7875V21.6716H43.83V13.604C43.8299 13.5561 43.8289 13.5082 43.8268 13.4605C43.841 13.2243 43.8099 12.9531 43.7012 12.6879ZM28.2664 3.92295H15.8155V10.377H28.2664V3.92295Z"
        fill="#FBC339"
      />
    </svg>
  );
}
