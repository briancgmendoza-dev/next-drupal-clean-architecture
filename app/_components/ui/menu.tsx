import * as React from 'react'
import { Box } from '@mui/material'

import { TWithBoxSxProps, TDefaultSx } from '@/app/_components/types'
import { mergeSx } from '@/app/_components/utils'

const Menu = React.forwardRef<HTMLDivElement, TWithBoxSxProps>(({ sx = {}, ...props }, ref) => {
  const menuDefaultSx: TDefaultSx = {
    width: "50px",
    color: "#fff"
  }

  return (
    <Box
      component="nav"
      ref={ref}
      sx={mergeSx(menuDefaultSx, sx)}
      {...props}
    />
  )
})

Menu.displayName = "Menu"

export { Menu }
