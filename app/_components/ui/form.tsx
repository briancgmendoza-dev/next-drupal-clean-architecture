import * as React from 'react'
import { Box } from '@mui/material'
import { mergeSx } from '../utils'
import { TDefaultSx, TFormProps } from '../types'

const Form = React.forwardRef<HTMLFormElement, TFormProps>(({ sx = {}, ...props }, ref) => {
  const formDefaultSx: TDefaultSx = {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }
  return (
    <Box
      component="form"
      ref={ref}
      sx={mergeSx(formDefaultSx, sx)}
      {...props}
    />
  )
})

Form.displayName = "Form"

export { Form }
