import { BoxProps, TypographyProps, InputProps, ButtonProps } from '@mui/material'
import { SxProps, Theme } from "@mui/system"

export type TDefaultSx = SxProps<Theme>
export type TWithBoxSxProps = BoxProps
export type TInputProps = React.InputHTMLAttributes<HTMLInputElement> & InputProps
export type TButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & ButtonProps

export type TFormProps = React.FormHTMLAttributes<HTMLFormElement> & {
  sx?: SxProps<Theme>;
}

export type TContainerProps = BoxProps & {
  component?: React.ElementType;
}

export type TPointsProps = TypographyProps & {
  points: string;
}

export type TLogoProps = BoxProps & {
  src: string;
  alt: string;
}

export type TPagesProps = {
  children: React.ReactNode | React.ReactElement;
}
