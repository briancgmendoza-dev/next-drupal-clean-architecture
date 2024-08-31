import { BoxProps } from '@mui/material'
import { SxProps, Theme } from "@mui/system"

export type TDefaultProps = SxProps<Theme>

export type TBoxProps = BoxProps & {
  component?: React.ElementType;
  sx?: SxProps<Theme>;
}
