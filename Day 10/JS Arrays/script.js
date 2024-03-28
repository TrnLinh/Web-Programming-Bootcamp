// Put your solution here
let nums = [];
let evenArr = [];
let oddArr = [];

function divideArray(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
      evenArr.push(nums[i]);
    } else if (nums[i] % 2 != 0) {
      oddArr.push(nums[i]);
    }
  }

  oddArr.sort((a, b) => a - b);
  evenArr.sort((a, b) => a - b);

  console.log("Even numbers:");
  if (evenArr.length != 0) {
    evenArr.forEach((number) => {
      console.log(number);
    });
  } else {
    console.log("None");
  }
  console.log("Odd numbers:");
  if (oddArr.length != 0) {
    oddArr.forEach((number) => {
      console.log(number);
    });
  } else {
    console.log("None");
  }
}

divideArray(nums);
