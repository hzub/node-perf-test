interface ITest1 {
  test: String;
}

export function test1(): Promise<ITest1> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest2 {
  test: String;
}

export function test2(): Promise<ITest2> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest3 {
  test: String;
}

export function test3(): Promise<ITest3> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest4 {
  test: String;
}

export function test4(): Promise<ITest4> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest5 {
  test: String;
}

export function test5(): Promise<ITest5> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}



interface ITest6 {
  test: String;
}

export function test6(): Promise<ITest6> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest7 {
  test: String;
}

export function test7(): Promise<ITest7> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest8 {
  test: String;
}

export function test8(): Promise<ITest8> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest9 {
  test: String;
}

export function test9(): Promise<ITest9> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

interface ITest10 {
  test: String;
}

export function test10(): Promise<ITest10> {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        test: '123'
      });
    }, 12345);
  })
}

export function fn() {
  return [
    test1(),
    test2(),
    test3(),
    test4(),
    test5(),
    test6(),
    test7(),
    test8(),
    test9(),
    test10(),
  ];
};
