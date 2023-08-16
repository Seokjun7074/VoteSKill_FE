const { useState, useCallback } = require('react');

const useInput = (defaultInputValue) => {
  const [input, setInput] = useState(defaultInputValue);

  const handler = useCallback((e) => {
    setInput(e.target.value);
  }, []);

  return [input, setInput, handler];
};

export default useInput;
