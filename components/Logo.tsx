export function LogoMark({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      aria-hidden="true"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="1" y="1" width="46" height="46" rx="12" fill="#3E7C6F" />
      <rect
        x="1"
        y="1"
        width="46"
        height="46"
        rx="12"
        stroke="#FBF7F0"
        strokeWidth="2"
      />
      {/* brain outline */}
      <path
        d="M18.5 34c-3.6 0-6.5-2.9-6.5-6.5 0-1.6.6-3.1 1.5-4.2-.6-1-1-2.2-1-3.4 0-3.5 2.9-6.4 6.4-6.4.8 0 1.6.2 2.3.4C22.3 12.7 23.9 12 25.7 12c3.5 0 6.3 2.8 6.3 6.3v.2"
        stroke="#FBF7F0"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      <path
        d="M18.5 34c.4 1.6 1.9 2.8 3.6 2.8 1.3 0 2.5-.7 3.2-1.8"
        stroke="#FBF7F0"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0.55"
      />
      {/* checkmark */}
      <path
        d="M17.5 24.5l6.5 6.5L36.5 15"
        stroke="#FBF7F0"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark />
      <span className="font-heading text-2xl font-bold tracking-tight text-ink">
        MindTidy
      </span>
    </span>
  );
}
