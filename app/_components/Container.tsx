import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultProps, TContainerProps } from '@/app/_components/types'
import { mergeSx } from '@/lib/helpers'

const Container = React.forwardRef<HTMLDivElement, TContainerProps>(({ sx = {}, ...props }, ref) => {
  const containerDefaultSx: TDefaultProps = {
    width: "100%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "#000"
  }

  return (
    <Box
      ref={ref}
      sx={mergeSx(containerDefaultSx, sx)}
      {...props}
    />
  )
})

Container.displayName = "Container"


const RoundedContainer = React.forwardRef<HTMLDivElement, TBoxProps>(({ sx = {}, ...props }, ref) => {
  const roundedContainerDefaultSx: TDefaultProps = {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }

  return (
    <Box
      ref={ref}
      sx={mergeSx(roundedContainerDefaultSx, sx)}
      {...props}
    />
  )
})

RoundedContainer.displayName = "RoundedContainer"
export { Container, RoundedContainer}
