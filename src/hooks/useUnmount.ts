import { useEffect } from "react";

const useUnmount = (callback: () => void) => {
  useEffect(() => {
    return () => {
      callback();
    };
  }, []); // Mảng phụ thuộc rỗng nghĩa là hook chỉ đăng ký cleanup khi unmount
};

export default useUnmount;
