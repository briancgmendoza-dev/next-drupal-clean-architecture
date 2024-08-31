import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultProps, TBoxProps } from './types'
import { mergeSx } from '@/lib/helpers'

const Container = React.forwardRef<HTMLDivElement, TBoxProps>(({ sx, ...props }, ref) => {
  const containerDefaultSx: TDefaultProps = {
    width: "100%",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    bgcolor: "#000"
  }

  return (
    <Box
      ref={ref}
      sx={mergeSx(containerDefaultSx, sx ? sx : {})}
      {...props}
    />
  )
})

Container.displayName = "Container"

export { Container }
