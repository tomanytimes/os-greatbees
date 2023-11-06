/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { api } from './api';
import { ISignInReq, ISignInRes, ISignUpReq, ISignUpRes } from '../interfaces/reservation';

const base = '/api/cm'

export const getReservationRoomList = () => {
  const url = base + '/reservation/room'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};
export const getBusinessReservationRoomList = () => {
  const url = base + '/reservation/businessRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};

export const addReservationRoom = () => {
  const url = base + '/reservation/addReservationRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.put(url, data),
    },
  );
};

export const isConfirmReservationRoom = () => {
  const url = base + '/reservation/reservationRoomConfirm'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};

export const modReservationRoom = () => {
  const url = base + '/reservation/modifyReservationRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.patch(url, data),
    },
  );
};

export const deleteReservationRoom = () => {
  const url = base + '/reservation/deleteRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.delete(url, data),
    },
  );
};

export const addRoom = () => {
  const url = base + '/reservation/addRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.put(url, data),
    },
  );
};

export const modRoom = () => {
  const url = base + '/reservation/modRoom'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.patch(url, data),
    },
  );
};
// Business Vehicle Reservation