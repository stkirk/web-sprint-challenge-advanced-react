import { useState } from "react";
// write your custom hook here to control your checkout form

const useForm = (initialValue) => {
  const [values, setValues] = useState(initialValue);

  return [values, setValues];
};

export default useForm;
