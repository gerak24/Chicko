import {MutationKeys} from "./keys"
import {useQuery} from "@tanstack/react-query";

export const useLogin = () => {
  return useQuery({queryKey: [MutationKeys.authorization.login]})
};