import axios from "axios";
import { useEffect, useState } from "react";

export function usePessoalSex<T = unknown>(url: string) {
  const [sexPessoal, setSexPessoal] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setSexPessoal(response.data);
      });
  }, [url]);

  return { sexPessoal };
}