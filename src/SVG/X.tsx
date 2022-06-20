export function X({ width, height }: { width: string; height: string }) {
  return (
    <svg
      width={width}
      height={height}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.732.732a2.5 2.5 0 0 1 3.536 0L12.5 8.964 20.732.732a2.5 2.5 0 0 1 3.536 3.536L16.035 12.5l8.233 8.232a2.5 2.5 0 0 1-3.536 3.536L12.5 16.035l-8.232 8.233a2.5 2.5 0 1 1-3.536-3.536L8.964 12.5.732 4.268a2.5 2.5 0 0 1 0-3.536Z"
        fill="#fff"
      />
    </svg>
  );
}
