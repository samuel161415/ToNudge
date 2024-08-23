declare module 'aos' {
    interface AosOptions {
      duration?: number;
      easing?: string;
      once?: boolean;
      mirror?: boolean;
      delay?: number;
      // Add other AOS options here if needed
    }
  
    export function init(options?: AosOptions): void;
    export function refresh(): void;
    export function refreshHard(): void;
  }
  