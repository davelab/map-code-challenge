const mockAddress1 = '29 rue du 4 septembre';
const mockAddress2 = '15 rue de bourgogne';

export function getGeocode(address, delay, hasError = false) {
  const normalizedAddress = address.trim().toLowerCase();

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let latLong = {};

      if (
        hasError ||
        (normalizedAddress !== mockAddress1 &&
          normalizedAddress !== mockAddress2)
      ) {
        reject(new Error('something went wrong'));
      }

      if (normalizedAddress == mockAddress1) {
        latLong = {
          lat: 48.86985,
          lng: 2.33457,
        };
      }

      if (normalizedAddress == mockAddress2) {
        latLong = {
          lat: 48.85908,
          lng: 2.31804,
        };
      }

      resolve({
        address: normalizedAddress,
        ...latLong,
      });
    }, delay || 500);
  });
}

export function createJob(body, delay, hasError = false) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      hasError && reject(new Error('something went wrong'));
      resolve({ status: 200, code: 'ok', body });
    }, delay || 1000);
  });
}
