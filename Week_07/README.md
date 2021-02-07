## 学习笔记
- 岛屿类的模板DFS
```
  function deep(grid, m, n) {
      if (m < 0 || n < 0 || m >= ml || n >= nl || grid[m][n] !== 1) {
          return
      }

      deep(grid, m + 1, n)
      deep(grid, m - 1, n)
      deep(grid, m, n + 1)
      deep(grid, m, n - 1)
  }

```