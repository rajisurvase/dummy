import { Stack } from "@mui/material"
import React from "react"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
const LayoutComponent = ({ children }) => {
  return (
    <>
     <Stack py={4}>
     <HeaderComponent />
     </Stack>
      {children}
      <FooterComponent />
    </>
  )
}

export default LayoutComponent