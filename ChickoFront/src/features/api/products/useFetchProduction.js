import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../../shared/config";
import {QueryKeys} from "../keys";
import toast from "react-hot-toast";

export function useFetchProduction(showDeleted = false) {
  return useQuery({
    queryKey: [QueryKeys.nomenclature.products, {showDeleted}],
    queryFn: async () => {
     return await getProduction(showDeleted)
    },
    retry: 3,
  });
}


const getProduction = async (showDeleted = false) => {
  const resp = await axios.get(API_BASE + 'products?showDeleted=' + showDeleted);
  console.log(resp.data)
  return resp.data ?? toast.success("Ожидайте");
}; 