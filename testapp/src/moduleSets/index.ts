import { moduleSetFn as  moduleSetFn1 } from './moduleSet1';
import { moduleSetFn as  moduleSetFn2 } from './moduleSet2';
import { moduleSetFn as  moduleSetFn3 } from './moduleSet3';
export function moduleSetsFn() {
  return [
    moduleSetFn1(),
    moduleSetFn2(),
    moduleSetFn3(),
  ]
};
