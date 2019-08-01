import { moduleFn as moduleFn1 } from './testModule1';
import { moduleFn as moduleFn2 } from './testModule2';
import { moduleFn as moduleFn3 } from './testModule3';
import { moduleFn as moduleFn4 } from './testModule4';
import { moduleFn as moduleFn5 } from './testModule5';
import { moduleFn as moduleFn6 } from './testModule6';
import { moduleFn as moduleFn7 } from './testModule7';
import { moduleFn as moduleFn8 } from './testModule8';
import { moduleFn as moduleFn9 } from './testModule9';
import { moduleFn as moduleFn10 } from './testModule10';

export function moduleSetFn() {
  return [
    moduleFn1(),
    moduleFn2(),
    moduleFn3(),
    moduleFn4(),
    moduleFn5(),
    moduleFn6(),
    moduleFn7(),
    moduleFn8(),
    moduleFn9(),
    moduleFn10(),
  ]
};
