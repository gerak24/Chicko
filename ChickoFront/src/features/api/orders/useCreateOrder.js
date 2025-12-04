import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../../shared/config";
import {QueryKeys} from "../keys";

export function useCreateOrder() {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: createOrder,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.orders.list]})
  });
}

const createOrder = async ({name, contact, comment, items}) => {
  const resp = await axios.post(API_BASE + 'orders', {
    customer: name,
    contact: contact,
    comment: comment,
    products: items,
  })
  return resp.data;
};