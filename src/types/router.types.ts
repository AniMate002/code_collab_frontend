import { type ComponentType, type LazyExoticComponent } from "react";

export type RouterType = {
  title: string;
  path: string;
  element: LazyExoticComponent<ComponentType<any>>;
};
