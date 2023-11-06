import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function CGIndustrialIcon({
  width = 60,
  height = 60,
  color = '#C5C5C5',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.4061 10.9117L11.9968 5.50247C11.481 4.98666 11.6797 4.11826 12.3977 3.98918C15.3359 3.46097 18.5506 4.38825 20.9032 6.74087L21.577 7.41461C24.3397 10.1773 25.1368 14.1288 23.9196 17.4253L42.5579 36.0635C45.8543 34.8463 49.8058 35.6435 52.5685 38.4062L53.2422 39.0799C55.5949 41.4326 56.5222 44.6473 55.994 47.5855C55.8649 48.3035 54.9965 48.5022 54.4807 47.9864L49.0714 42.577L44.5116 43.7682L43.6399 48.0085L49.0492 53.4179C49.565 53.9337 49.3663 54.8021 48.6483 54.9312C45.7102 55.4594 42.4954 54.5321 40.1427 52.1794L39.469 51.5057C36.9753 49.0119 36.083 45.5496 36.8281 42.4747L17.5084 23.155C14.4335 23.9001 10.9712 23.0079 8.47745 20.5141L7.80372 19.8404C5.4511 17.4878 4.52382 14.273 5.05203 11.3349C5.18111 10.6169 6.0495 10.4182 6.56532 10.934L11.9746 16.3432L16.2149 15.4716L17.4061 10.9117Z"
        stroke={color}
        strokeWidth="3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M53.4979 9.19859L50.8186 6.51926L41.7288 11.5901L39.4314 16.5667L43.4504 20.5857L48.4271 18.2884L53.4979 9.19859ZM43.4503 20.5856L39.4313 16.5666L22.0157 33.9823L26.0347 38.0013L43.4503 20.5856Z"
        fill="white"
      />
      <path
        d="M50.8186 6.51926L51.8792 5.4586L51.0777 4.65708L50.0878 5.20931L50.8186 6.51926ZM53.4979 9.19859L54.8079 9.92936L55.3601 8.93945L54.5586 8.13793L53.4979 9.19859ZM41.7288 11.5901L40.998 10.2801L40.5715 10.518L40.3669 10.9614L41.7288 11.5901ZM39.4314 16.5667L38.0695 15.9381L37.6311 16.8878L38.3708 17.6274L39.4314 16.5667ZM43.4504 20.5857L42.3898 21.6464L43.1294 22.386L44.0791 21.9476L43.4504 20.5857ZM48.4271 18.2884L49.0558 19.6503L49.4991 19.4456L49.737 19.0192L48.4271 18.2884ZM39.4313 16.5666L40.492 15.506L39.4313 14.4453L38.3707 15.506L39.4313 16.5666ZM43.4503 20.5856L44.511 21.6463L45.5716 20.5856L44.511 19.525L43.4503 20.5856ZM22.0157 33.9823L20.955 32.9216L19.8944 33.9823L20.955 35.0429L22.0157 33.9823ZM26.0347 38.0013L24.974 39.0619L26.0347 40.1226L27.0953 39.0619L26.0347 38.0013ZM49.7579 7.57992L52.4372 10.2592L54.5586 8.13793L51.8792 5.4586L49.7579 7.57992ZM42.4595 12.9L51.5493 7.82922L50.0878 5.20931L40.998 10.2801L42.4595 12.9ZM40.7933 17.1954L43.0907 12.2188L40.3669 10.9614L38.0695 15.9381L40.7933 17.1954ZM44.5111 19.5251L40.4921 15.5061L38.3708 17.6274L42.3898 21.6464L44.5111 19.5251ZM47.7984 16.9265L42.8217 19.2238L44.0791 21.9476L49.0558 19.6503L47.7984 16.9265ZM52.188 8.46782L47.1171 17.5576L49.737 19.0192L54.8079 9.92936L52.188 8.46782ZM38.3707 17.6273L42.3897 21.6463L44.511 19.525L40.492 15.506L38.3707 17.6273ZM23.0764 35.0429L40.492 17.6273L38.3707 15.506L20.955 32.9216L23.0764 35.0429ZM27.0953 36.9406L23.0764 32.9216L20.955 35.0429L24.974 39.0619L27.0953 36.9406ZM42.3897 19.525L24.974 36.9406L27.0953 39.0619L44.511 21.6463L42.3897 19.525Z"
        fill={color}
      />
      <mask id="path-4-inside-1_92_2622" fill="white">
        <path d="M13.2706 34.6895C13.6611 34.299 14.2942 34.299 14.6848 34.6895L25.3275 45.3323C25.7181 45.7228 25.7181 46.356 25.3275 46.7465L18.6665 53.4075C15.337 56.737 9.93895 56.737 6.60951 53.4075C3.28007 50.0781 3.28007 44.68 6.60951 41.3506L13.2706 34.6895Z" />
      </mask>
      <path
        d="M13.2706 34.6895C13.6611 34.299 14.2942 34.299 14.6848 34.6895L25.3275 45.3323C25.7181 45.7228 25.7181 46.356 25.3275 46.7465L18.6665 53.4075C15.337 56.737 9.93895 56.737 6.60951 53.4075C3.28007 50.0781 3.28007 44.68 6.60951 41.3506L13.2706 34.6895Z"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
        mask="url(#path-4-inside-1_92_2622)"
      />
      <path
        d="M15.6523 36.3268C15.8431 36.136 17.2906 34.6884 18.5921 33.387C19.3731 32.6059 20.6393 32.6061 21.4204 33.3871L26.6299 38.5967C27.411 39.3777 27.411 40.644 26.6299 41.4251L23.3553 44.6997"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
