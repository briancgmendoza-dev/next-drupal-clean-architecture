import { SxProps, Theme } from "@mui/material/styles";

export const mergeSx = (...sxProps: SxProps<Theme>[]): SxProps<Theme> => {
  return sxProps.reduce((prev, currentValue) => {
      return [
          ...(Array.isArray(prev) ? prev : [prev]),
          ...(Array.isArray(currentValue) ? currentValue : [currentValue]),
      ];
  }, [] as SxProps<Theme>);
};
