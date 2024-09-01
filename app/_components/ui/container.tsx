import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultSx, TContainerProps, TWithBoxSxProps } from '@/app/_components/types'
import { mergeSx } from '@/app/_components/utils'

const Container = React.forwardRef<HTMLDivElement, TContainerProps>(({ sx = {}, component = "div",...props }, ref) => {
  const containerDefaultSx: TDefaultSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "transparent",
    border: "1px solid red"
  }

  return (
    <Box
      component={component}
      ref={ref}
      sx={mergeSx(containerDefaultSx, sx)}
      {...props}
    />
  )
})

Container.displayName = "Container"


const RoundedContainer = React.forwardRef<HTMLDivElement, TWithBoxSxProps>(({ sx = {}, ...props }, ref) => {
  const roundedContainerDefaultSx: TDefaultSx = {
    width: "50px",
    height: "50px",
    borderRadius: "50%"
  }

  return (
    <Box
      component="div"
      ref={ref}
      sx={mergeSx(roundedContainerDefaultSx, sx)}
      {...props}
    />
  )
})

RoundedContainer.displayName = "RoundedContainer"
export { Container, RoundedContainer}
