import {useMutation} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../../shared/config";

export function useCreateOrder() {
  return useMutation({
    mutationFn: createOrder,
  });
}

const createOrder = async ({name, contact, comment, items}) => {
  console.log(items)
  const resp = await axios.post(API_BASE + 'orders', {
    customer: name,
    contact: contact,
    comment: comment,
    products: items,
  })
  return resp.data;
};