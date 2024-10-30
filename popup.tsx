import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        padding: 16,
        width: "200px"
      }}>
      <h2>Plasmo with PostHog</h2>
      <p>v0.0.1 2024-10-31</p>
    </div>
  )
}

export default IndexPopup
