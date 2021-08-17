import { useCallback, useState } from "react";

import { executeAsyncRequest } from "../../utils/asyncRequest";

// Returns a request to execute manually at some point, and the variables that will be updated when it does
export const useLazyRequest = ({
  request,
  withPostSuccess,
  withPostFailure,
  initialState = null,
  initialLoading = false,
  withPostFetch,
  transformResponse = (response) => response,
}) => {
  const [state, setState] = useState(initialState);
  const [loading, setLoading] = useState(initialLoading);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(
    (values) => {
      return executeAsyncRequest({
        values,
        request,
        onPrefetch: () => {
          setLoading(initialLoading);
          setState(initialState);
          setError(null);
        },
        onSuccess: (data) => {
          const transformedResponse = data
            ? transformResponse(data)
            : undefined;
          setState(transformedResponse);

          withPostSuccess?.(data);
        },
        onError: (errorInfo) => {
          setError(() => errorInfo);

          withPostFailure?.(errorInfo);
        },
        onPostFetch: (response) => {
          if (response.data) {
            withPostFetch?.(response.data);
          }
        },
        onFinally: () => {
          setLoading(false);
        },
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [initialState, request, withPostFailure, withPostSuccess]
  );

  return [state, loading, error, sendRequest];
};
