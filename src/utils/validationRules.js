export const validationRules = {
  // Email Validation
  email: {
    required: "Email is required",
    pattern: {
      value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      message: "Please enter a valid email address"
    },
    maxLength: {
      value: 100,
      message: "Email must be less than 100 characters"
    },
    validate: {
      noSpaces: (value) => !/\s/.test(value) || "Email cannot contain spaces",
      lowercase: (value) => value === value.toLowerCase() || "Email must be lowercase"
    }
  },

  // Password Validation
  password: {
    required: "Password is required",
    minLength: {
      value: 8,
      message: "Password must be at least 8 characters"
    },
    maxLength: {
      value: 50,
      message: "Password must be less than 50 characters"
    },
    pattern: {
      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
      message: "Password must contain uppercase, lowercase, number and special character (@$!%*?&)"
    },
    validate: {
      noSpaces: (value) => !/\s/.test(value) || "Password cannot contain spaces"
    }
  },

  // First Name Validation
  firstName: {
    required: "First name is required",
    minLength: {
      value: 2,
      message: "First name must be at least 2 characters"
    },
    maxLength: {
      value: 50,
      message: "First name must be less than 50 characters"
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: "First name can only contain letters"
    },
    validate: {
      noNumbers: (value) => !/\d/.test(value) || "First name cannot contain numbers",
      noSpecialChars: (value) => !/[!@#$%^&*(),.?":{}|<>]/.test(value) || "First name cannot contain special characters"
    }
  },

  // Last Name Validation
  lastName: {
    required: "Last name is required",
    minLength: {
      value: 2,
      message: "Last name must be at least 2 characters"
    },
    maxLength: {
      value: 50,
      message: "Last name must be less than 50 characters"
    },
    pattern: {
      value: /^[a-zA-Z\s]+$/,
      message: "Last name can only contain letters"
    },
    validate: {
      noNumbers: (value) => !/\d/.test(value) || "Last name cannot contain numbers",
      noSpecialChars: (value) => !/[!@#$%^&*(),.?":{}|<>]/.test(value) || "Last name cannot contain special characters"
    }
  },

  // OTP Validation
  otp: {
    required: "OTP is required",
    pattern: {
      value: /^\d{6}$/,
      message: "OTP must be exactly 6 digits"
    },
    minLength: {
      value: 6,
      message: "OTP must be 6 digits"
    },
    maxLength: {
      value: 6,
      message: "OTP must be 6 digits"
    }
  }
};