import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../shared/config";

export function useLogin() {
  return useMutation({
    mutationFn: fetchUserLogin,
  });
}

const fetchUserLogin = async ({login, pass}) => {
  const resp = await axios.post(API_BASE + 'manager', {
    login: login,
    password: pass,
  })
  return resp.data;
};