import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function SettingIcon({
  width = 12,
  height = 12,
  color = '#000000',
}: Props) {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10.5 13C8.844 13 7.5 11.656 7.5 10C7.5 8.344 8.844 7 10.5 7C12.156 7 13.5 8.344 13.5 10C13.5 11.656 12.156 13 10.5 13ZM10.5 8.2C9.508 8.2 8.7 9.008 8.7 10C8.7 10.992 9.508 11.8 10.5 11.8C11.492 11.8 12.3 10.992 12.3 10C12.3 9.008 11.492 8.2 10.5 8.2Z"
        fill="#FBC339"
      />
      <path
        d="M13.1766 18.9966C13.0009 18.9966 12.8253 18.9716 12.6496 18.9299C12.131 18.7881 11.6961 18.4628 11.4201 18.004L11.3197 17.8372C10.8262 16.9865 10.1487 16.9865 9.6552 17.8372L9.5632 17.9957C9.28717 18.4628 8.85223 18.7964 8.33364 18.9299C7.80669 19.0717 7.26301 18.9966 6.80297 18.7214L5.36431 17.8956C4.85409 17.6037 4.48606 17.1283 4.32714 16.5528C4.17658 15.9772 4.25186 15.3851 4.54461 14.8763C4.78717 14.4509 4.85409 14.0672 4.7119 13.8253C4.5697 13.5835 4.21004 13.4417 3.71654 13.4417C2.49535 13.4417 1.5 12.4491 1.5 11.2314V9.76339C1.5 8.54564 2.49535 7.55309 3.71654 7.55309C4.21004 7.55309 4.5697 7.4113 4.7119 7.16942C4.85409 6.92754 4.79554 6.54386 4.54461 6.11848C4.25186 5.6097 4.17658 5.00916 4.32714 4.44199C4.4777 3.86648 4.84572 3.39106 5.36431 3.09913L6.81134 2.2734C7.75651 1.71457 9.00279 2.03986 9.57156 2.99904L9.67193 3.16586C10.1654 4.01661 10.8429 4.01661 11.3364 3.16586L11.4284 3.00738C11.9972 2.03986 13.2435 1.71457 14.197 2.28174L15.6357 3.10747C16.1459 3.3994 16.5139 3.87482 16.6729 4.45033C16.8234 5.02585 16.7481 5.61804 16.4554 6.12682C16.2128 6.5522 16.1459 6.93588 16.2881 7.17776C16.4303 7.41964 16.79 7.56143 17.2835 7.56143C18.5046 7.56143 19.5 8.55398 19.5 9.77173V11.2397C19.5 12.4575 18.5046 13.45 17.2835 13.45C16.79 13.45 16.4303 13.5918 16.2881 13.8337C16.1459 14.0756 16.2045 14.4592 16.4554 14.8846C16.7481 15.3934 16.8318 15.9939 16.6729 16.5611C16.5223 17.1366 16.1543 17.612 15.6357 17.904L14.1887 18.7297C13.8708 18.9049 13.5279 18.9966 13.1766 18.9966ZM10.4916 15.9105C11.2361 15.9105 11.9303 16.3776 12.4071 17.2033L12.4991 17.3618C12.5994 17.537 12.7667 17.6621 12.9675 17.7121C13.1682 17.7622 13.369 17.7371 13.5362 17.6371L14.9833 16.803C15.2007 16.6779 15.368 16.4694 15.4349 16.2191C15.5019 15.9689 15.4684 15.7103 15.3429 15.4935C14.8662 14.6761 14.8076 13.8337 15.1757 13.1914C15.5437 12.5492 16.3048 12.1822 17.2584 12.1822C17.7937 12.1822 18.2203 11.7568 18.2203 11.223V9.75505C18.2203 9.22958 17.7937 8.79586 17.2584 8.79586C16.3048 8.79586 15.5437 8.42887 15.1757 7.78663C14.8076 7.1444 14.8662 6.30198 15.3429 5.48459C15.4684 5.26773 15.5019 5.00916 15.4349 4.75894C15.368 4.50872 15.2091 4.30854 14.9916 4.17509L13.5446 3.34935C13.1849 3.1325 12.7082 3.25761 12.4907 3.6246L12.3987 3.78307C11.9219 4.60881 11.2277 5.07589 10.4833 5.07589C9.73885 5.07589 9.04461 4.60881 8.56784 3.78307L8.47584 3.61626C8.26673 3.26595 7.79833 3.14084 7.43866 3.34935L5.99164 4.18343C5.77416 4.30854 5.60688 4.51706 5.53996 4.76728C5.47305 5.0175 5.50651 5.27607 5.63197 5.49293C6.10874 6.31032 6.16729 7.15274 5.79926 7.79497C5.43123 8.43721 4.67007 8.8042 3.71654 8.8042C3.18123 8.8042 2.75465 9.22958 2.75465 9.76339V11.2314C2.75465 11.7568 3.18123 12.1905 3.71654 12.1905C4.67007 12.1905 5.43123 12.5575 5.79926 13.1998C6.16729 13.842 6.10874 14.6844 5.63197 15.5018C5.50651 15.7187 5.47305 15.9772 5.53996 16.2275C5.60688 16.4777 5.7658 16.6779 5.98327 16.8113L7.4303 17.6371C7.60595 17.7455 7.81506 17.7705 8.00743 17.7205C8.20818 17.6704 8.37546 17.537 8.4842 17.3618L8.57621 17.2033C9.05297 16.3859 9.74721 15.9105 10.4916 15.9105Z"
        fill="#FBC339"
      />
    </svg>
  );
}