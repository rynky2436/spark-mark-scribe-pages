/**
 * Security monitoring and logging utilities
 */

interface SecurityEvent {
  type: 'form_submission' | 'rate_limit_exceeded' | 'validation_error' | 'xss_attempt' | 'suspicious_activity';
  details: Record<string, any>;
  timestamp: number;
  userAgent?: string;
  ip?: string;
}

class SecurityMonitor {
  private events: SecurityEvent[] = [];
  private readonly maxEvents = 100; // Keep last 100 events in memory

  logEvent(event: Omit<SecurityEvent, 'timestamp'>): void {
    const securityEvent: SecurityEvent = {
      ...event,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
    };

    this.events.push(securityEvent);

    // Keep only the most recent events
    if (this.events.length > this.maxEvents) {
      this.events = this.events.slice(-this.maxEvents);
    }

    // Log to console in development
    if (import.meta.env.DEV) {
      console.warn('Security Event:', securityEvent);
    }

    // In production, you would send this to your monitoring service
    this.sendToMonitoring(securityEvent);
  }

  private sendToMonitoring(event: SecurityEvent): void {
    // In a real application, send to your monitoring service
    // Example: send to Sentry, LogRocket, or custom endpoint
    if (!import.meta.env.DEV) {
      // Production monitoring would go here
      console.info('Security event logged:', event.type);
    }
  }

  getRecentEvents(): SecurityEvent[] {
    return [...this.events];
  }

  clearEvents(): void {
    this.events = [];
  }
}

export const securityMonitor = new SecurityMonitor();

// Security-focused error boundary hook
export const useSecurityErrorHandler = () => {
  const handleSecurityError = (error: Error, errorInfo?: any) => {
    securityMonitor.logEvent({
      type: 'suspicious_activity',
      details: {
        error: error.message,
        stack: error.stack,
        errorInfo,
      },
    });
  };

  return { handleSecurityError };
};

// Production security configuration
export const securityConfig = {
  // Environment checks
  isProduction: import.meta.env.PROD,
  isDevelopment: import.meta.env.DEV,
  
  // Security settings
  maxFormSubmissions: 3,
  rateLimitWindow: 300000, // 5 minutes
  maxInputLength: 1000,
  allowedFileTypes: ['image/jpeg', 'image/png', 'image/gif', 'application/pdf'],
  
  // Content Security Policy
  csp: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "https:"],
    fontSrc: ["'self'", "data:"],
    connectSrc: ["'self'"],
    frameAncestors: ["'none'"],
  },
};

// Secure storage utility
export const secureStorage = {
  set: (key: string, value: any): void => {
    try {
      const encrypted = btoa(JSON.stringify(value)); // Basic encoding (use proper encryption in production)
      localStorage.setItem(key, encrypted);
    } catch (error) {
      securityMonitor.logEvent({
        type: 'suspicious_activity',
        details: { action: 'storage_set_failed', key, error: error instanceof Error ? error.message : 'Unknown error' },
      });
    }
  },

  get: (key: string): any => {
    try {
      const encrypted = localStorage.getItem(key);
      if (!encrypted) return null;
      return JSON.parse(atob(encrypted));
    } catch (error) {
      securityMonitor.logEvent({
        type: 'suspicious_activity',
        details: { action: 'storage_get_failed', key, error: error instanceof Error ? error.message : 'Unknown error' },
      });
      return null;
    }
  },

  remove: (key: string): void => {
    localStorage.removeItem(key);
  },

  clear: (): void => {
    localStorage.clear();
  },
};
