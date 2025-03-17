const testCases = [
  {
    input_args: {
      array: [1, 2, 3, 4],
      shift: 1,
    },
    expected_output: [4, 1, 2, 3],
  },
  {
    input_args: {
      array: [1, 2, 3, 4, 5, 6],
      shift: 2,
    },
    expected_output: [5, 6, 1, 2, 3, 4],
  },
  {
    input_args: {
      array: [1, 2, 3, 4],
      shift: 3,
    },
    expected_output: [2, 3, 4, 1],
  },
  {
    input_args: {
      array: [1, 2, 3, 4],
      shift: 0,
    },
    expected_output: [1, 2, 3, 4],
  },
  {
    input_args: {
      array: [1],
      shift: 0,
    },
    expected_output: [1],
  },
  {
    input_args: {
      array: [1, 2],
      shift: 1,
    },
    expected_output: [2, 1],
  },
];

function shiftArray(array, shift) {
  // your code here

  let rightPart = array.slice(array.length - shift);
  let leftPart = array.slice(0, array.length - shift);
  let result = rightPart.concat(leftPart);
  return result;
}

for (const testCase of testCases) {
  const { input_args, expected_output } = testCase;
  const result = shiftArray(input_args.array, input_args.shift);

  console.log('\n\n');
  console.log({ input_args, result, expected_output });
}
