import { useEffect } from "react";

import { useLazyRequest } from "./useLazyRequest";

// Executes a request each time a dependency changes and returns the values and the refetch function
// in case you want to execute it again
export const useRequest = (
  {
    request,
    payload,
    withPostSuccess,
    withPostFailure,
    initialState = null,
    withPostFetch,
    transformResponse = (response) => response,
  },
  dependencies
) => {
  const [state, loading, error, sendRequest] = useLazyRequest({
    request,
    withPostSuccess,
    withPostFailure,
    initialState,
    initialLoading: true,
    withPostFetch,
    transformResponse,
  });

  useEffect(
    () => {
      sendRequest(payload);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    dependencies
  );

  return [state, loading, error, sendRequest];
};
