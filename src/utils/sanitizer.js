import DOMPurify from "dompurify";

export const sanitizeInput = (value = "") => {
  if (typeof value !== "string") return "";
  
  // تنظيف قوي + منع أي سكربت مخفي
  return DOMPurify.sanitize(value, {
    ALLOWED_TAGS: [],   // ممنوع أي HTML
    ALLOWED_ATTR: [],   // ممنوع أي Attributes
  }).trim();
};

export const sanitizeEmail = (email = "") => {
  let clean = DOMPurify.sanitize(email).trim().toLowerCase();

  // السماح بالأحرف المسموحة فقط
  clean = clean.replace(/[^a-z0-9._%+-@]/g, "");

  return clean;
};


export const sanitizeName = (name = "") => {
  // تنظيف DOMPurify
  let clean = DOMPurify.sanitize(name).trim();

  // السماح بأي لغة (عربي، إنجليزي...) + مسافات فقط
  clean = clean.replace(/[^\p{L}\s]/gu, "").replace(/\s+/g, " ");

  // كابيتال لأسماء الإنجليزية فقط
  return clean.charAt(0).toUpperCase() + clean.slice(1);
};

export const sanitizeOTP = (otp = "") => {
  let clean = DOMPurify.sanitize(otp);
  return clean.replace(/\D/g, "").slice(0, 6);
};
