export function HairShort({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 96" className={className} fill="none" aria-hidden>
      <circle cx="40" cy="38" r="16" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 36c2-14 10-22 16-22s14 8 16 22"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M28 50c2 10 6 16 12 18 6-2 10-8 12-18" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function HairBob({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 96" className={className} fill="none" aria-hidden>
      <circle cx="40" cy="34" r="15" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M22 34c1-16 11-24 18-24s17 8 18 24c0 14-4 28-18 32-14-4-18-18-18-32Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}

export function HairLong({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 80 96" className={className} fill="none" aria-hidden>
      <circle cx="40" cy="26" r="13" stroke="currentColor" strokeWidth="1.4" />
      <path
        d="M24 28c0-12 9-20 16-20s16 8 16 20c1 22-3 48-16 56-13-8-17-34-16-56Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
    </svg>
  );
}
