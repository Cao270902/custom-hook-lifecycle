import { useEffect } from "react";

const useDidMount = (callback: () => void) => {
  useEffect(() => {
    callback();
  }, []); // Mảng phụ thuộc rỗng nghĩa là useEffect chỉ chạy một lần sau khi component mount
};

export default useDidMount;
