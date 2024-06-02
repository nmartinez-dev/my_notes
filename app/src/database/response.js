export const success = (data) => ({
  success: true,
  data: data,
  errorType: '',
  errorMessage: '',
});

export const error = (message) => ({
  success: false,
  data: '',
  errorType: 'error',
  errorMessage: message,
});

export const exception = (message) => ({
  success: false,
  data: '',
  errorType: 'exception',
  errorMessage: message,
});
