import { BaseController } from "@app/controllers/base-controller";


export type ClassType<T> = new (...args: unknown[]) => T;

export const CONTROLLERS: ClassType<BaseController>[] = [];
