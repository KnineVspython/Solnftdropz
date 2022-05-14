function ArrowIcon(props) {
  const { color = 'text-primary' } = props
  // prettier-ignore
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg" fill="none"
      viewBox="0 0 24 24" width={24} height={24}
      {...props}
    >
      <path
        className={`stroke-current ${color}`}
        strokeLinecap="round" strokeLinejoin="round"
        strokeWidth={2} d="M5 12h14M12 19l7-7-7-7"
      />
    </svg>
  )
}

export default ArrowIcon
