import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function PopupCartIcon({
  width = 98,
  height = 98,
  color = '#000000',
}: Props) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 98 98"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M81.5553 51.6878L85.7062 30.0084C85.7786 29.6361 85.7611 29.2529 85.655 28.888C85.5489 28.523 85.357 28.1859 85.0938 27.902C84.8423 27.609 84.5257 27.3728 84.1668 27.2103C83.8079 27.0478 83.4157 26.9631 83.0183 26.9623H28.1389L26.4717 18.2451C26.2414 17.055 25.5813 15.9791 24.6058 15.2038C23.6302 14.4285 22.4006 14.0026 21.1301 14H14.9719C14.25 14 13.5577 14.2731 13.0472 14.7593C12.5368 15.2455 12.25 15.9049 12.25 16.5925C12.25 17.28 12.5368 17.9394 13.0472 18.4256C13.5577 18.9118 14.25 19.1849 14.9719 19.1849H21.1301L30.4524 68.1175C29.1233 69.2326 28.1468 70.6785 27.6328 72.2929C27.1187 73.9073 27.0873 75.6262 27.5422 77.2567C27.9971 78.8871 28.9202 80.3645 30.2079 81.5229C31.4955 82.6812 33.0968 83.4748 34.8318 83.8143C36.5667 84.1539 38.3667 84.026 40.0296 83.4451C41.6925 82.8642 43.1525 81.8532 44.2455 80.5257C45.3385 79.1982 46.0213 77.6067 46.2172 75.9301C46.4132 74.2534 46.1144 72.5579 45.3546 71.034H63.523C62.6384 72.8104 62.3834 74.8123 62.7965 76.7386C63.2096 78.6649 64.2685 80.4113 65.8137 81.7149C67.3588 83.0185 69.3068 83.8088 71.3643 83.9669C73.4218 84.125 75.4776 83.6423 77.2222 82.5914C78.9668 81.5406 80.3058 79.9784 81.0378 78.1401C81.7697 76.3018 81.855 74.2868 81.2807 72.3984C80.7064 70.5099 79.5037 68.8502 77.8536 67.6691C76.2034 66.4879 74.1951 65.8492 72.1309 65.8491H35.5559L34.0589 58.0717H73.5259C75.4371 58.0709 77.2874 57.4315 78.7546 56.265C80.2218 55.0984 81.2129 53.4787 81.5553 51.6878ZM40.8295 74.9227C40.8295 75.6918 40.5901 76.4436 40.1414 77.0831C39.6928 77.7226 39.0552 78.221 38.3091 78.5154C37.5631 78.8097 36.7422 78.8867 35.9502 78.7366C35.1582 78.5866 34.4307 78.2162 33.8598 77.6724C33.2888 77.1286 32.8999 76.4357 32.7424 75.6813C32.5849 74.927 32.6657 74.1451 32.9747 73.4346C33.2837 72.724 33.807 72.1167 34.4785 71.6894C35.1499 71.2621 35.9392 71.034 36.7467 71.034C37.8296 71.034 38.868 71.4437 39.6337 72.173C40.3994 72.9022 40.8295 73.8913 40.8295 74.9227ZM76.2137 74.9227C76.2137 75.6918 75.9742 76.4436 75.5256 77.0831C75.077 77.7226 74.4393 78.221 73.6933 78.5154C72.9473 78.8097 72.1264 78.8867 71.3344 78.7366C70.5424 78.5866 69.8149 78.2162 69.2439 77.6724C68.6729 77.1286 68.2841 76.4357 68.1266 75.6813C67.969 74.927 68.0499 74.1451 68.3589 73.4346C68.6679 72.724 69.1912 72.1167 69.8626 71.6894C70.534 71.2621 71.3234 71.034 72.1309 71.034C73.2137 71.034 74.2522 71.4437 75.0179 72.173C75.7835 72.9022 76.2137 73.8913 76.2137 74.9227ZM29.1255 32.1472H79.7521L76.2137 50.748C76.1016 51.3488 75.7706 51.8927 75.2789 52.2839C74.7873 52.6751 74.1665 52.8886 73.5259 52.8868H33.0722L29.1255 32.1472Z"
        fill="#FFC74C"
      />
      <circle cx="80" cy="28" r="14" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M78.5 37.3335C78.5 38.1619 79.1716 38.8335 80 38.8335C80.8284 38.8335 81.5 38.1619 81.5 37.3335V29.5H88.667C89.4954 29.5 90.167 28.8284 90.167 28C90.167 27.1716 89.4954 26.5 88.667 26.5H81.5V19.3335C81.5 18.5051 80.8284 17.8335 80 17.8335C79.1716 17.8335 78.5 18.5051 78.5 19.3335V26.5H70.667C69.8386 26.5 69.167 27.1716 69.167 28C69.167 28.8284 69.8386 29.5 70.667 29.5H78.5V37.3335Z"
        fill="#232323"
      />
    </svg>
  );
}