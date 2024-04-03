//crea un slice para manejar un estado que contenga la información del dispositivo que se está utilizando
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
export type DeviceType = 'mobile' | 'tablet' | 'desktop' | null;
export type Device = {
  deviceType: DeviceType;
  os: string;
  osVersion: string | undefined;
  browserName: string;
  browserVersion: string;
  width: number | null;
  height: number | null;
};

type DeviceSliceState = Device;

const initialState: DeviceSliceState = {
  deviceType: null,
  os: '',
  osVersion: '',
  browserName: '',
  browserVersion: '',
  width: null,
  height: null,
};

const deviceSlice = createSlice({
  name: 'PLP:device',
  initialState,
  reducers: {
    setDevice: (state, { payload }: PayloadAction<Device>) => {
      state.deviceType = payload.deviceType;
      state.os = payload.os;
      state.osVersion = payload.osVersion;
      state.browserName = payload.browserName;
      state.browserVersion = payload.browserVersion;
      state.width = payload.width;
      state.height = payload.height;
    },
  },
});

export const { setDevice } = deviceSlice.actions;

export default deviceSlice;
