// email control fonksiyonu
export const validateEmail = (email: string) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
}

// password control fonksiyonu
export const validatePassword = (password: string) => {
  // en az 8 karakter, en az bir büyük harf, en az bir küçük harf, en az bir rakam ve en az bir özel karakter
  const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return re.test(password);
}