import * as React from 'react'
import { Button } from '@mui/material'

import { TButtonProps, TDefaultSx } from '../types'
import { mergeSx } from '../utils'

const buttonVariants: Record<string, TDefaultSx> = {
  default: {
    backgroundColor: "#ffc107",
    color: "#000",
    borderColor: "#ffc107",
  },
  green: {
    backgroundColor: "#28a745",
    color: "#fff",
    borderColor: "#28a745",
  },
  red: {
    backgroundColor: "#dc3545",
    color: "#fff",
    borderColor: "#dc3545",
  },
  grayedout: {
    backgroundColor: "#6c757d",
    color: "#fff",
    borderColor: "#6c757d",
  },
};

const Btn = React.forwardRef<HTMLButtonElement, TButtonProps>(({ variant = 'default', sx = {}, ...props }, ref) => {
  const buttonDefaultSx: TDefaultSx = {
    color: "#fff",
    p: ".5rem 1rem"
  }

  const variantSx = buttonVariants[variant] || buttonVariants['default'];

  return (
    <Button
      ref={ref}
      sx={mergeSx(buttonDefaultSx, variantSx, sx)}
      {...props}
    />
  )
})

Btn.displayName = "Button"

export { Btn as Button }
