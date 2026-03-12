# Max Profit Problem

## Overview

This project solves the **Max Profit Problem**, where Mr. X owns an infinite strip of land on Mars. He can construct different types of establishments that generate revenue once construction is completed.

The objective is to determine the **best combination of buildings** that maximizes profit within a given **time limit (N)**.

---

## Establishments

| Type                | Build Time | Earnings per Unit Time |
| ------------------- | ---------- | ---------------------- |
| Theatre (T)         | 5          | $1500                  |
| Pub (P)             | 4          | $1000                  |
| Commercial Park (C) | 10         | $2000                  |

---

## Rules

1. Only **one building can be constructed at a time**.
2. Construction must finish **within the total available time (N)**.
3. Once construction is complete, the building starts **earning money for the remaining time**.
4. Land availability is **infinite**, so placement constraints are ignored.

---

## Profit Calculation

When a building finishes construction at time `t`, it generates revenue for:

Remaining Time = `N - t`

Profit from that building:

Profit = `(N - t) × earning_per_unit_time`

Total profit is the **sum of all building profits**.

---

## Example

### Input

```
Time Unit: 7
```

### Output

```
Earnings: $3000
Solutions
1. T: 1 P: 0 C: 0
2. T: 0 P: 1 C: 0
```

### Explanation

**Option 1 – Theatre**

Build time = 5
Remaining time = 7 - 5 = 2

Profit:

```
2 × 1500 = 3000
```

**Option 2 – Pub**

Build time = 4
Remaining time = 7 - 4 = 3

Profit:

```
3 × 1000 = 3000
```

Both combinations generate the **same maximum profit**.

---

## Approach

The algorithm:

1. Iterate through possible numbers of **Theatres, Pubs, and Commercial Parks**.
2. Check if total **construction time ≤ N**.
3. Simulate sequential construction.
4. Calculate profit based on **remaining operational time**.
5. Store all combinations that achieve the **maximum profit**.

---

## How to Run

Make sure **Node.js** is installed.

Run the script:

```
node maxProfit.js
```

Example output:

```
Earnings: $16500
Solutions
1. T: 2 P: 0 C: 0
```

---

## Project Structure

```
max-profit-problem
│
├── maxProfit.js
└── README.md
```

---

## Concepts Used

* Algorithm Design
* Brute Force Search
* Profit Optimization
* JavaScript (Node.js)

---

## License

ISC

---

## Author

Hemamalini

---
