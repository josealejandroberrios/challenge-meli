import { useMemo } from "react";
import { useLocation } from "react-router-dom";

import { parseQueryString } from "../../utils/formatterQueryString";

export const useParseLocationSearch = () => {
  const location = useLocation();

  const parseLocationSearch = useMemo(
    () => parseQueryString(location.search),
    [location]
  );

  return parseLocationSearch;
};
