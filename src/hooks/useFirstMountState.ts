import { useRef, useEffect } from "react";

const useFirstMountState = (): boolean => {
  const isFirstMount = useRef(true);

  //   useEffect(() => {
  //     isFirstMount.current = false;
  //   }, []);

  if (isFirstMount.current) {
    isFirstMount.current = false;
    return true;
  }

  return false;
};

export default useFirstMountState;
