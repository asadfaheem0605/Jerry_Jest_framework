import RangeList from './rangeList.js';

const rl = new RangeList();

test('test range list add [1, 5) and print' , () => {
    rl.add([1, 5])
    expect(rl.print()).toBe([1, 5])
})

test('test range list add [10, 20) and print' , () => {
    rl.add([10, 20])
    expect(rl.print()).toBe([1, 5] [10, 20])
})

test('test range list add [20, 20) and print' , () => {
    rl.add([20, 20])
    expect(rl.print()).toBe([1, 5] [10, 20])
})

test('test range list add [20, 21) and print' , () => {
    rl.add([20, 21])
    expect(rl.print()).toBe([1, 5] [10, 21])
})

test('test range list remove [20, 21) and print' , () => {
    rl.remove([20, 21])
    expect(rl.print()).toBe([1, 5] [10, 20])
})

test('test range list remove [20, 20) and print' , () => {
    rl.remove([20, 20])
    expect(rl.print()).toBe([1, 5] [10, 20])
})

test('test range list remove [10, 20) and print' , () => {
    rl.remove([10, 20])
    expect(rl.print()).toBe([1, 5])
})

test('test range list remove [4, 5) and print' , () => {
    rl.remove([4, 5])
    expect(rl.print()).toBe([1, 4])
})

test('test range list remove [1, 4) and print' , () => {
    rl.remove([1, 4])
    expect(rl.print()).toBe()
})