import Link from 'next/link'

function Anchor(props) {
  const { as, href, ...attr } = props
  return (
    <Link {...{ as, href }}>
      <a {...attr} />
    </Link>
  )
}

export default Anchor
