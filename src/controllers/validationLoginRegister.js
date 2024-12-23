export const validateEmailOrPhone = (input) => {
    const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input);
    const isPhone = /^\d{10,15}$/.test(input);
    if (isEmail) return { valid: true, type: "email" };
    if (isPhone) return { valid: true, type: "phone" };
    return { valid: false, type: null };
  };