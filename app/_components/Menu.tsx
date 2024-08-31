import * as React from 'react'
import { Box } from '@mui/material'

import { TMenuProps, TDefaultProps } from '@/app/_components/types'
import { mergeSx } from '@/lib/helpers'

const Menu = React.forwardRef<HTMLDivElement, TMenuProps>(({ sx = {}, ...props }, ref) => {
  const menuDefaultSx: TDefaultProps = {
    width: "50px",
    color: "#fff"
  }

  return (
    <Box
      ref={ref}
      sx={mergeSx(menuDefaultSx, sx)}
      {...props}
    />
  )
})

Menu.displayName = "Menu"

export { Menu }
