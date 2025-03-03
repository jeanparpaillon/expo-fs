const Err = (name: string) => {
  return class extends Error {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    constructor(...args: any) {
      super(...args);
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (this as any).code = name;
      if (this.message) {
        this.message = name + ': ' + this.message;
      } else {
        this.message = name;
      }
    }
  };
};

export const EEXIST = Err('EEXIST');
export const ENOENT = Err('ENOENT');
export const ENOTDIR = Err('ENOTDIR');
export const ENOTEMPTY = Err('ENOTEMPTY');
export const ETIMEDOUT = Err('ETIMEDOUT');
