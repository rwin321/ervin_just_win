import { lazy } from "react";

export const MinimumSpinnerDelay = (path: any): any =>
  lazy(() =>
    Promise.all([
      path,
      new Promise((resolve) => setTimeout(resolve, 300)),
    ]).then(([moduleExports]) => moduleExports)
  );
