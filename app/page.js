import Link from "next/link"
import Header from "@/components/Header"
import Navigation from "@/components/Navigation"

export default function Home() {
  return (
    <div >
      <div className="pb-12">
        <Navigation/>
      </div>

      <div className="container pt-8 mx-auto">
        Input here
      </div>

    </div>
  )
}