const isWithin = (min, max, value) => value >= min && value <= max;

export const executeAsyncRequest = async ({
  values,
  request,
  onPrefetch,
  onSuccess,
  onError,
  onPostFetch,
  onFinally,
}) => {
  try {
    onPrefetch();
    const response = await request(values);
    const isSuccessResponse = isWithin(200, 299, response.status);

    if (isSuccessResponse) {
      onSuccess(response.data);
    } else {
      onError({
        problem: response.problem,
        errorData: response.data,
        status: response.status,
      });
    }
    onPostFetch(response);
  } catch (err) {
    const dataErr = err?.response?.data || err;

    onError(dataErr);
  } finally {
    onFinally();
  }
};
