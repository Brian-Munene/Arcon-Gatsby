import React from "react"

import * as styling from "./glass_styles"

const Glass = () => {
  return (
    <styling.GlassParent className="glassmorphicssm">
      <styling.GlassText></styling.GlassText>
      <styling.GlassText style={{ fontSize: 30, paddingTop: 200 }}>
      </styling.GlassText>
      <styling.Glass className="glass" />
    </styling.GlassParent>
  )
}

export default Glass