# 🧠 Two Sum - Problem Explanation

## 📘 Problem Statement

Given an array of integers `nums` and an integer `target`, return the **indices** of the two numbers such that they add up to the target.

**Constraints:**

- Each input has exactly one solution.
- You may not use the same element twice.

---

## 🚬 Brute Force Approach

### ✅ Idea:

Check all possible pairs `(i, j)` to see if `nums[i] + nums[j] === target`.

### 💡 Code:

```js
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```

### ⏱️ Time Complexity:

O(n²) — nested loops for all pairs

### 🧠 Space Complexity:

O(1) — no extra space used

---

## ⚡ Optimized Approach (Hash Map)

### ✅ Idea:

While traversing the array, store the value and its index in a `Map`. For each element, check if its complement (`target - current value`) exists in the map.

### 💡 Code:

```js
function twoSum(nums, target) {
  const map = new Map(); // value -> index

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }

  return [];
}
```

### ⏱️ Time Complexity:

O(n) — single pass through the array

### 🧠 Space Complexity:

O(n) — storing up to `n` elements in the map

---

## 📊 Complexity Comparison

| Approach        | Time Complexity | Space Complexity |
| --------------- | --------------- | ---------------- |
| Brute Force     | O(n²)           | O(1)             |
| Hash Map (Fast) | O(n)            | O(n)             |

---

## 🧠 Learnings & Takeaways

- **Start simple**: Brute-force helps in understanding the problem deeply.
- **Hash maps**: Ideal for fast lookups of complements or previously seen values.
- **Tradeoffs**: We often trade space (with extra storage) for time (faster lookups).
- **Pattern**: This map-based lookup strategy is commonly used in problems involving pairs/sums.

---

## ✍️ Author

Victor Rajkumar
