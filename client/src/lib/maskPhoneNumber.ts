const maskPhoneNumber = (inputValue: string): string => {
  const digitsOnly = inputValue.replace(/\D/g, '');
  const parts: string[] = [];
  for (let i = 0; i < digitsOnly.length; i += 2) {
      parts.push(digitsOnly.slice(i, i + 2));
  }
  return parts.join('-');
};

export default maskPhoneNumber;