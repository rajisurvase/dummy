import { Stack } from "@mui/material"
import React from "react"
import FooterComponent from "./FooterComponent"
import HeaderComponent from "./HeaderComponent"
import { useSession } from "next-auth/react"
const LayoutComponent = ({ children }) => {
  const { data: session } = useSession()
  return (
    <>
     <Stack py={2}>
      {/* {session  &&  <HeaderComponent />}  */}
      <HeaderComponent />
      </Stack>
      {children}
      <FooterComponent />
     {/* {session  &&  <FooterComponent />}  */}
      
    </>
  )
}

export default LayoutComponent