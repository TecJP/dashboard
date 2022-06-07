import { useEffect, useState } from "react";
import axios from "axios";

export function usePessoalEscolaridade<T = unknown>(url: string) {
  const [pessoalEscolaridade, setPessoalEscolaridade] = useState<T | null>(null);

  useEffect(() => {
    axios.get(url)
      .then(response => {
        setPessoalEscolaridade(response.data);
      });
  }, [url]);

  return { pessoalEscolaridade };
}