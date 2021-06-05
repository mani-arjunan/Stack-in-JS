import { Stack } from "../stack";

describe("testing stack", () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  test("test push method", () => {
    const firstItem = 2;
    stack.push(firstItem);

    expect(stack.top).toEqual(0);
    expect(stack.currentItem()).toEqual(firstItem);
  });

  test("test pop method", () => {
    const firstItem = 2;
    stack.push(firstItem);

    stack.pop();

    expect(stack.top).toEqual(-1);
    expect(stack.items).toEqual({});
  });
});
