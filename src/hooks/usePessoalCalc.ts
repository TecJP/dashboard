import { useEffect, useState } from "react";
import axios from "axios";

export function usePessoalCalc<T = unknown>(url: string) {
  const [pessoalCalc, setPessoalCalc] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPessoalCalc(response.data);
      });
  }, [url]);

  return { pessoalCalc };
}