/**
 * Security utilities for input sanitization and validation
 */

// Basic HTML sanitization - removes potentially dangerous characters
export const sanitizeHtml = (input: string): string => {
  return input
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;')
    .replace(/\//g, '&#x2F;');
};

// Sanitize user input for safe storage and display
export const sanitizeUserInput = (input: string): string => {
  // Remove any potential script tags or dangerous content
  return input
    .trim()
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
    .replace(/javascript:/gi, '')
    .replace(/on\w+\s*=/gi, '')
    .replace(/data:text\/html/gi, '');
};

// Enhanced phone number validation
export const validatePhoneNumber = (phone: string): boolean => {
  // Allow various phone formats but be strict about content
  const phoneRegex = /^[\+]?[1-9][\d\s\-\(\)\.]{7,15}$/;
  const sanitized = phone.replace(/[^\d\+\-\(\)\s\.]/g, '');
  return phoneRegex.test(sanitized) && sanitized.length >= 8;
};

// Enhanced email validation with additional security checks
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const hasValidLength = email.length <= 254; // RFC 5321 limit
  const hasNoScripts = !/<script|javascript:|data:/i.test(email);
  
  return emailRegex.test(email) && hasValidLength && hasNoScripts;
};

// Rate limiting helper (client-side basic implementation)
class SimpleRateLimit {
  private attempts: Map<string, number[]> = new Map();
  
  isAllowed(key: string, maxAttempts: number = 5, windowMs: number = 60000): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Remove old attempts outside the window
    const validAttempts = attempts.filter(time => now - time < windowMs);
    
    if (validAttempts.length >= maxAttempts) {
      return false;
    }
    
    // Add new attempt
    validAttempts.push(now);
    this.attempts.set(key, validAttempts);
    
    return true;
  }
  
  reset(key: string): void {
    this.attempts.delete(key);
  }
}

export const formRateLimit = new SimpleRateLimit();

// Secure form data processing
export const processFormData = (data: Record<string, any>) => {
  const processed: Record<string, any> = {};
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      processed[key] = sanitizeUserInput(value);
    } else {
      processed[key] = value;
    }
  }
  
  return processed;
};