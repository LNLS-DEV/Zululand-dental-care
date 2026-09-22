export default function ToothMark({ className = 'h-7 w-7', color = 'currentColor' }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path
        d="M32 14c-6.5 0-11 4.2-11 10.4 0 4.9 1.7 8.7 2.9 13.9.9 3.8 1.6 8.7 4.6 8.7 3.4 0 3-6.8 3.5-10.9.2-1.7 1-2.9 2-2.9s1.8 1.2 2 2.9c.5 4.1.1 10.9 3.5 10.9 3 0 3.7-4.9 4.6-8.7C45.3 33.1 47 29.3 47 24.4 47 18.2 42.5 14 36 14c-1.7 0-2.9.5-4 1.1-1.1-.6-2.3-1.1-4-1.1z"
        fill={color}
      />
    </svg>
  )
}
