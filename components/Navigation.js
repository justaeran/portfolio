import Link from "next/link"

function Navigation() {
  return (
    <div className="h-12 fixed w-full">
      <div className="space-x-3">
        <button type="button">
          <Link href="/">HOME</Link>
        </button>
        <button>
          <Link href="/skills">SKILLS</Link>
        </button>
        <button>
          <Link href="/about">ABOUT</Link>
        </button>
      </div>
    </div>
  )
}

export default Navigation