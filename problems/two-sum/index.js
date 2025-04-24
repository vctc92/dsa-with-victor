import fs from "fs";

const input = fs.readFileSync(0, "utf-8").trim().split("\n");
const nums = input[0].split(" ").map(Number);
const target = Number(input[1]);

function twoSum(nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}

const result = twoSum(nums, target);
console.log(result.join(" "));
