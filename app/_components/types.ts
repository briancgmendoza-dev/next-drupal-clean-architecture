import { BoxProps, TypographyProps } from '@mui/material'
import { SxProps, Theme } from "@mui/system"

export type TDefaultProps = SxProps<Theme>

export type TContainerProps = BoxProps & {
  component?: React.ElementType;
  sx?: SxProps<Theme>;
}

export type TCardProps = BoxProps & {
  sx?: SxProps<Theme>;
}

export type TMenuProps = BoxProps & {
  sx?: SxProps<Theme>;
}

export type TPointsProps = TypographyProps & {
  sx?: SxProps<Theme>;
  points: string;
}

export type TLogoProps = BoxProps & {
  src: string;
  alt: string;
}

export type TPagesProps = {
  children: React.ReactNode | React.ReactElement;
}
