import { instance } from "../../../api/apiConfig";

export const registrationRequest = ({ email, password }) => {
  return instance.post("users", {
    email,
    password,
  });
};
