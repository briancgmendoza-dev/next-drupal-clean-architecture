import * as React from 'react'
import { Input } from '@mui/material'

import { TDefaultSx, TInputProps } from '../types'
import { mergeSx } from '../utils'

const Textbox = React.forwardRef<HTMLInputElement, TInputProps>(({ sx = {}, type, ...props }, ref) => {
  const inputDefaultSx: TDefaultSx = {
    color: "#fff",
    p: {
      xs: ".25rem .5rem",
      sm: ".5rem .75rem",
      md: ".75rem 1rem"
    }
  }
  return (
    <Input
      type={type}
      inputRef={ref}
      sx={mergeSx(inputDefaultSx, sx)}
      {...props}
    />
  )
})

Textbox.displayName = "Textbox"

export { Textbox }
