import {useQuery} from "@tanstack/react-query";
import axios from "axios";
import {API_BASE} from "../../../shared/config";
import {QueryKeys} from "../keys";
import toast from "react-hot-toast";

export function useFetchProduction() {
  return useQuery({
    queryKey: [QueryKeys.nomenclature.products],
    queryFn: getProduction,
    retry: 3,
  });
}


const getProduction = async () => {
  const resp = await axios.get(API_BASE + 'products')
  console.log(resp.data)
  return resp.data ?? toast.success("Жди падла");
}; 