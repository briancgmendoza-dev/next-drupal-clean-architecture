import * as React from 'react'
import { Box } from '@mui/material'

import { TDefaultSx, TWithBoxSxProps } from '@/app/_components/types'
import { mergeSx } from '@/app/_components/utils'

const Card = React.forwardRef<HTMLDivElement, TWithBoxSxProps>(({ sx = {}, ...props }, ref) => {
  const cardDefaultSx: TDefaultSx = {
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
