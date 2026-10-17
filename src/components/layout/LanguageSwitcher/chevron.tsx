
type Props = {
  className?: string;
};

export const Chevron = ({ className }: Props) => {
  return (
    <svg className={className} viewBox="0 0 12 8" width="10" height="6" aria-hidden="true">
      <path
        d="M1 1.4 6 6.2 11 1.4"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}