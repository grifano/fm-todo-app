export default function SvgIcon({ name }) {
  return (
    <svg width="100%" height="100%" fill="currentColor">
      <use xlinkHref={`/icons.svg#${name}`} />
    </svg>
  );
}
