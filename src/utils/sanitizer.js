export const sanitizeInput = (value) => {
  if (!value) return value;
  
  // إزالة HTML tags
  let sanitized = value.replace(/<[^>]*>/g, '');
  
  // إزالة script tags
  sanitized = sanitized.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
  
  // إزالة SQL injection attempts
  sanitized = sanitized.replace(/(\b(SELECT|INSERT|UPDATE|DELETE|DROP|CREATE|ALTER|EXEC|EXECUTE|UNION|FROM|WHERE)\b)/gi, '');
  
  // إزالة XSS attempts
  sanitized = sanitized.replace(/[<>'"]/g, '');
  
  // Trim whitespace
  sanitized = sanitized.trim();
  
  return sanitized;
};

export const sanitizeEmail = (email) => {
  if (!email) return email;
  
  // Remove spaces and convert to lowercase
  let sanitized = email.trim().toLowerCase();
  
  // Remove any characters that aren't allowed in emails
  sanitized = sanitized.replace(/[^a-z0-9._%+-@]/g, '');
  
  return sanitized;
};

export const sanitizeName = (name) => {
  if (!name) return name;
  
  // Remove numbers and special characters
  let sanitized = name.replace(/[^a-zA-Z\s]/g, '');
  
  // Trim and normalize spaces
  sanitized = sanitized.trim().replace(/\s+/g, ' ');
  
  // Capitalize first letter
  sanitized = sanitized.charAt(0).toUpperCase() + sanitized.slice(1).toLowerCase();
  
  return sanitized;
};

export const sanitizeOTP = (otp) => {
  if (!otp) return otp;
  
  // Keep only digits
  return otp.replace(/\D/g, '').slice(0, 6);
};
