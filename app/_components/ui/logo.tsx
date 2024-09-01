import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultProps, TLogoProps } from '@/app/_components/types'
import { mergeSx } from '@/app/_components/utils'

const Logo = React.forwardRef<HTMLDivElement, TLogoProps>(({ sx = {}, src, alt, ...props }, ref) => {
  const logoDefaultSx: TDefaultProps = {
    width: "100%",
    height: "100%",
    objectFit: "contain"
  }

  return (
    <Box
      ref={ref}
      component="img"
      src={src}
      alt={alt}
      sx={mergeSx(logoDefaultSx, sx)}
      {...props}
    />
  )
})

Logo.displayName = "Logo"

export { Logo }
