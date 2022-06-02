import { useEffect, useState } from "react";

import { api } from "@/libs/api";

type Data = {
  vl1: string;
  vl2: string;
  vl3: string;
  vl4: string;
  vl5: string;
  vl6: string;
  vl7: string;
}

export function usePessoalCalc<T = unknown>(url: string) {
  const [bla, setData] = useState<T | null>(null);

  useEffect(() => {
    api.get(url)
      .then(response => {
        setData(response.data.PESSOAL_CALC);
      });
  }, [url]);

  return { bla };
}