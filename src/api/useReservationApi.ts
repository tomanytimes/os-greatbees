/* eslint-disable react-hooks/rules-of-hooks */
import { useMutation, useQuery } from 'react-query';
import { AxiosError, AxiosResponse } from 'axios';

import { api } from './api';
import { ISignInReq, ISignInRes, ISignUpReq, ISignUpRes } from '../interfaces/reservation';

const base = 'localhost:8080/api/cm'

export const getReservationVehicleList = () => {
  const url = base + '/reservation/vehicle'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};

export const getBusinessReservationVehicleList = () => {
  const url = base + '/reservation/businessVehicle'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};

export const addReservation = () => {
  const url = base + '/reservation/addReservation'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.put(url, data),
    },
  );
};

export const isConfirmReservation = () => {
  const url = base + '/reservation/reservationConfirm'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.get(url, data),
    },
  );
};

export const modReservation = () => {
  const url = base + '/reservation/modifyReservation'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.patch(url, data),
    },
  );
};

export const deleteReservation = () => {
  const url = base + '/reservation/delete'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.delete(url, data),
    },
  );
};

export const addVehicle = () => {
  const url = base + '/reservation/addReservation'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.put(url, data),
    },
  );
};

export const modVehicle = () => {
  const url = base + '/reservation/modVehicle'
  return useMutation<ISignUpRes, AxiosError, ISignUpReq>({
      mutationFn: (data) => api.patch(url, data),
    },
  );
};
// Business Vehicle Reservation