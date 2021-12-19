import { useState, useEffect } from "react";
import gameOfThrones from "../apis/gameOfThrones";

export default function useGameOfThronesFetch ()  {
  const [data, setData] = useState({
    slug: "",
    results: [],
  });

  useEffect(() => {
    if (data.slug !== "") {
      const timeoutId = setTimeout(() => {
        (async () => {
          try {
            const res = await gameOfThrones.get(`/${data.slug}`);
            setData({ ...data, results: res.data });
          } catch (err) {
            console.error(err);
          }
        }) ()
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [data.slug]);

  return { data, setData };
};
