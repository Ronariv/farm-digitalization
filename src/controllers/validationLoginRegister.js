export const validateEmailOrPhone = (input) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    const isPhone = /^\d{10,15}$/.test(input);
    if (isEmail) return { valid: true, type: "email" };
    if (isPhone) return { valid: true, type: "phone" };
    return { valid: false, type: null };
  };

  export const validatePassword = (password, rePassword) => {
    if (!password) {
      return { valid: false, message: "Password tidak boleh kosong." };
    }
    if (password !== rePassword) {
      return { valid: false, message: "Password dan konfirmasi password tidak cocok." };
    }
    return { valid: true, message: "" };
  };