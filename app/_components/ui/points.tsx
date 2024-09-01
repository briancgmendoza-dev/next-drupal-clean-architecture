import * as React from 'react'
import { Typography } from '@mui/material'

import { TPointsProps, TDefaultSx } from '@/app/_components/types'
import { mergeSx } from '@/app/_components/utils'

const Points = React.forwardRef<
  HTMLDivElement,
  TPointsProps
>(({ sx = {}, points ,...props }, ref) => {
  const pointsDefaultSx: TDefaultSx = {
    fontSize: {
      xs: "12px",
      sm: "14px",
      md: "16px",
      lg: "18px"
    },
    color: "#fff"
  }

  return (
    <Typography
      ref={ref}
      sx={mergeSx(pointsDefaultSx, sx)}
      {...props}
    >
      {points}
    </Typography>
  )
})

Points.displayName = "Points"

export { Points }
