import {useMutation, useQueryClient} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../../shared/config";
import {QueryKeys} from "../keys";

export function usePayOrder() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: payOrder,
    onSuccess: () => queryClient.invalidateQueries({queryKey: [QueryKeys.orders.list]})
  });
}

const payOrder = async (orderId) => {
  const token = JSON.parse(localStorage.getItem("User")).token;
  const resp = await axios.post(API_BASE + 'orders/payOrder/' + orderId, {}, {headers: {"Authorization": `Bearer ${token}`}})
  return resp.data;
};