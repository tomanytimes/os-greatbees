import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function UsecaseIcon({ width = 39, height = 52, color = '#000000' }: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 -5 39 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.872 3.2C10.203 2.26375 10.8163 1.45321 11.6272 0.88009C12.4382 0.306969 13.407 -0.000519936 14.4 6.59957e-07H24C24.993 -0.000519936 25.9618 0.306969 26.7728 0.88009C27.5837 1.45321 28.197 2.26375 28.528 3.2H33.6C34.873 3.2 36.0939 3.70571 36.9941 4.60589C37.8943 5.50606 38.4 6.72696 38.4 8V46.4C38.4 47.673 37.8943 48.8939 36.9941 49.7941C36.0939 50.6943 34.873 51.2 33.6 51.2H4.8C3.52696 51.2 2.30606 50.6943 1.40589 49.7941C0.505712 48.8939 0 47.673 0 46.4V8C0 6.72696 0.505712 5.50606 1.40589 4.60589C2.30606 3.70571 3.52696 3.2 4.8 3.2H9.872ZM14.4 3.2C13.9757 3.2 13.5687 3.36857 13.2686 3.66863C12.9686 3.96869 12.8 4.37565 12.8 4.8C12.8 5.22435 12.9686 5.63131 13.2686 5.93137C13.5687 6.23143 13.9757 6.4 14.4 6.4H24C24.4243 6.4 24.8313 6.23143 25.1314 5.93137C25.4314 5.63131 25.6 5.22435 25.6 4.8C25.6 4.37565 25.4314 3.96869 25.1314 3.66863C24.8313 3.36857 24.4243 3.2 24 3.2H14.4ZM31.5328 16.4672C31.2328 16.1672 30.8259 15.9987 30.4016 15.9987C29.9773 15.9987 29.5704 16.1672 29.2704 16.4672L24.7488 20.9856L23.4784 19.8272C23.1627 19.5574 22.7546 19.4209 22.3401 19.4465C21.9257 19.4721 21.5374 19.6579 21.2574 19.9645C20.9774 20.2711 20.8275 20.6746 20.8395 21.0896C20.8515 21.5047 21.0244 21.8989 21.3216 22.1888L23.7216 24.3808C24.0257 24.6577 24.4247 24.8068 24.8359 24.7973C25.247 24.7877 25.6387 24.6203 25.9296 24.3296L31.5296 18.7296C31.8296 18.4296 31.9981 18.0227 31.9981 17.5984C31.9981 17.1741 31.8296 16.7672 31.5296 16.4672H31.5328ZM31.5328 34.7328C31.8332 34.4328 32.0022 34.0257 32.0025 33.6011C32.0028 33.1766 31.8344 32.7692 31.5344 32.4688C31.2344 32.1684 30.8273 31.9994 30.4027 31.9991C29.9781 31.9988 29.5708 32.1672 29.2704 32.4672L24.7488 36.9856L23.4784 35.8272C23.1627 35.5574 22.7546 35.4209 22.3401 35.4465C21.9257 35.4721 21.5374 35.6579 21.2574 35.9645C20.9774 36.2711 20.8275 36.6746 20.8395 37.0896C20.8515 37.5047 21.0244 37.8988 21.3216 38.1888L23.7216 40.3808C24.0253 40.6581 24.4241 40.8078 24.8352 40.7989C25.2463 40.7899 25.6383 40.623 25.9296 40.3328L31.5296 34.7328H31.5328ZM8 19.2C7.57565 19.2 7.16869 19.3686 6.86863 19.6686C6.56857 19.9687 6.4 20.3757 6.4 20.8C6.4 21.2243 6.56857 21.6313 6.86863 21.9314C7.16869 22.2314 7.57565 22.4 8 22.4H16C16.4243 22.4 16.8313 22.2314 17.1314 21.9314C17.4314 21.6313 17.6 21.2243 17.6 20.8C17.6 20.3757 17.4314 19.9687 17.1314 19.6686C16.8313 19.3686 16.4243 19.2 16 19.2H8ZM6.4 36.8C6.4 37.2243 6.56857 37.6313 6.86863 37.9314C7.16869 38.2314 7.57565 38.4 8 38.4H16C16.4243 38.4 16.8313 38.2314 17.1314 37.9314C17.4314 37.6313 17.6 37.2243 17.6 36.8C17.6 36.3757 17.4314 35.9687 17.1314 35.6686C16.8313 35.3686 16.4243 35.2 16 35.2H8C7.57565 35.2 7.16869 35.3686 6.86863 35.6686C6.56857 35.9687 6.4 36.3757 6.4 36.8Z"
        fill="white"
      />
    </svg>
  );
}
