import { fn as fn1 } from './subModule1';
import { fn as fn2 } from './subModule2';
import { fn as fn3 } from './subModule3';
import { fn as fn4 } from './subModule4';
import { fn as fn5 } from './subModule5';
import { fn as fn6 } from './subModule6';
import { fn as fn7 } from './subModule7';
import { fn as fn8 } from './subModule8';
import { fn as fn9 } from './subModule9';
import { fn as fn10 } from './subModule10';

export function moduleFn() {
  return [
    fn1(),
    fn2(),
    fn3(),
    fn4(),
    fn5(),
    fn6(),
    fn7(),
    fn8(),
    fn9(),
    fn10(),
  ]
};
