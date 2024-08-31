import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultProps, TCardProps } from '@/app/_components/types'
import { mergeSx } from '@/lib/helpers'

const Card = React.forwardRef<HTMLDivElement, TCardProps>(({ sx = {}, ...props }, ref) => {
  const cardDefaultSx: TDefaultProps = {
    width: "100%",
    maxWidth: { xs: "375px", sm: "650px", md: "700px" },
    color: "#fff"
  }

  return (
    <Box
      component="section"
      ref={ref}
      sx={mergeSx(cardDefaultSx, sx)}
      {...props}
    />
  )
})

Card.displayName = "Card"

export { Card }
