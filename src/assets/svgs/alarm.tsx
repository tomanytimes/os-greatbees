import React from 'react';

interface Props {
  width?: number;
  height?: number;
  color?: string;
}

export default function AlarmIcon({
  width = 12,
  height = 12,
  color = '#000000',
}: Props) {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.2191 20.5299C9.88909 20.5299 7.55909 20.1599 5.34909 19.4199C4.50909 19.1299 3.86909 18.5399 3.58909 17.7699C3.29909 16.9999 3.39909 16.1499 3.85909 15.3899L5.00909 13.4799C5.24909 13.0799 5.46909 12.2799 5.46909 11.8099V8.91992C5.46909 5.19992 8.49909 2.16992 12.2191 2.16992C15.9391 2.16992 18.9691 5.19992 18.9691 8.91992V11.8099C18.9691 12.2699 19.1891 13.0799 19.4291 13.4899L20.5691 15.3899C20.9991 16.1099 21.0791 16.9799 20.7891 17.7699C20.4991 18.5599 19.8691 19.1599 19.0791 19.4199C16.8791 20.1599 14.5491 20.5299 12.2191 20.5299ZM12.2191 3.66992C9.32909 3.66992 6.96909 6.01992 6.96909 8.91992V11.8099C6.96909 12.5399 6.66909 13.6199 6.29909 14.2499L5.14909 16.1599C4.92909 16.5299 4.86909 16.9199 4.99909 17.2499C5.11909 17.5899 5.41909 17.8499 5.82909 17.9899C10.0091 19.3899 14.4391 19.3899 18.6191 17.9899C18.9791 17.8699 19.2591 17.5999 19.3891 17.2399C19.5191 16.8799 19.4891 16.4899 19.2891 16.1599L18.1391 14.2499C17.7591 13.5999 17.4691 12.5299 17.4691 11.7999V8.91992C17.4691 6.01992 15.1191 3.66992 12.2191 3.66992Z"
        fill="black"
      />
      <path
        d="M14.0788 3.93993C14.0088 3.93993 13.9388 3.92993 13.8688 3.90993C13.5788 3.82993 13.2988 3.76993 13.0288 3.72993C12.1788 3.61993 11.3588 3.67993 10.5888 3.90993C10.3088 3.99993 10.0088 3.90993 9.81884 3.69993C9.62884 3.48993 9.56884 3.18993 9.67884 2.91993C10.0888 1.86993 11.0888 1.17993 12.2288 1.17993C13.3688 1.17993 14.3688 1.85993 14.7788 2.91993C14.8788 3.18993 14.8288 3.48993 14.6388 3.69993C14.4888 3.85993 14.2788 3.93993 14.0788 3.93993Z"
        fill="black"
      />
      <path
        d="M12.2188 22.8101C11.2287 22.8101 10.2687 22.4101 9.56875 21.7101C8.86875 21.0101 8.46875 20.0501 8.46875 19.0601H9.96875C9.96875 19.6501 10.2087 20.2301 10.6287 20.6501C11.0487 21.0701 11.6288 21.3101 12.2188 21.3101C13.4587 21.3101 14.4688 20.3001 14.4688 19.0601H15.9688C15.9688 21.1301 14.2887 22.8101 12.2188 22.8101Z"
        fill="black"
      />
    </svg>
  );
}
