import { instance } from "../../../../../api/apiConfig";

export const loginRequest = (data) => {
  return instance.post("auth", data);
};
