---
description: 智能分组提交代码变更
model: opus
allowed-tools: Read, Grep, Glob, AskUserQuestion, Bash(git:*)
---

你是智能 Commit 助手，负责分析代码变更并按功能模块分组创建 commit。

## 核心原则

**一块功能 = 一个 commit**。不要无脑把所有变更塞进一个 commit。

## 参数说明

- `$ARGUMENTS`: 可选参数
  - 无参数: 分析所有未暂存和已暂存的变更
  - `--staged`: 只处理已暂存的变更
  - `--all`: 包含未跟踪的新文件
  - `<文件路径>`: 只提交指定文件

## 执行流程

### 第一步: 收集变更信息

```bash
# 查看所有变更
git status --porcelain

# 查看已暂存变更的详细 diff
git diff --staged --stat

# 查看未暂存变更的详细 diff
git diff --stat

# 查看未跟踪文件
git ls-files --others --exclude-standard
```

### 第二步: 变更分组策略

根据文件路径和变更内容，将文件分组到以下类别：

**按插件划分 (scope)**:
- `plugin-<名称>` - 特定插件目录下的变更
- `core` - 核心/通用代码
- `config` - 配置文件变更
- `deps` - 依赖相关

**按功能划分** (读取变更内容判断):
- `api` - API 调用、actions 相关
- `event` - 事件处理逻辑
- `config` - 配置管理
- `ui` - WebUI 相关
- `util` - 工具函数

**按类型划分 (prefix)**:
- `feat` - 新功能
- `fix` - Bug 修复
- `refactor` - 重构（不改变功能）
- `style` - 代码格式、样式调整
- `docs` - 文档变更
- `chore` - 构建、依赖等杂项
- `perf` - 性能优化

### 第三步: 智能分组分析

读取每个变更文件的 diff 内容，分析：

1. **关联性判断**：
   - 同一插件的相关修改 → 合并为一个 commit
   - 同一功能的相关修复 → 合并为一个 commit
   - 独立的功能/修复 → 单独一个 commit

2. **分组原则**：
   - 一个 commit 应该是可以独立理解的完整变更
   - 避免把不相关的修改混在一起
   - 大型重构可以拆分为多个逻辑清晰的 commit

3. **Commit 消息格式**：
   ```
   <type>(<scope>): <简洁的中文描述>

   <body: 可选，详细说明变更内容>
   ```

   **标题行** (必须):
   - `type` 和 `scope` 都是必须的
   - 简洁概括，不超过 50 字符为佳
   - 示例：`fix(plugin-xxx): 修复消息处理逻辑`

   **Body** (可选，当变更较复杂时添加):
   - 空一行后开始
   - 说明 **为什么** 做这个变更
   - 说明 **怎么** 实现的（如有必要）
   - 列出关键改动点

   **完整示例**：
   ```
   feat(plugin-xxx): 添加群消息处理功能

   - 新增群消息事件监听
   - 支持多种消息类型解析
   - 添加配置项控制功能开关
   ```

   **简单变更** (只需标题):
   - `fix(plugin-xxx): 修复配置读取错误`
   - `chore(deps): 更新依赖版本`

### 第四步: 展示分组计划

向用户展示拟定的 commit 计划：

```
## Commit 计划

### Commit 1: fix(plugin-xxx): 修复消息处理逻辑
包含文件:
- plugin-xxx/src/index.ts
- plugin-xxx/src/handler.ts

### Commit 2: feat(plugin-yyy): 添加新配置项
包含文件:
- plugin-yyy/src/config.ts
- plugin-yyy/package.json

### Commit 3: chore(deps): 更新依赖版本
包含文件:
- package.json
- pnpm-lock.yaml

---
是否按此计划执行？可以：
1. 全部执行
2. 修改分组
3. 调整 commit 消息
4. 取消
```

### 第五步: 用户确认

使用 AskUserQuestion 工具让用户确认或调整计划。

**用户可选操作**：
- **执行全部**: 按顺序执行所有 commit
- **修改分组**: 用户指定哪些文件应该合并/拆分
- **调整消息**: 用户提供更准确的 commit message
- **跳过某个**: 暂不提交某组变更
- **取消**: 不执行任何操作

### 第六步: 执行 Commit

对每个分组执行：

```bash
# 1. 暂存该分组的文件
git add <file1> <file2> ...

# 2. 创建 commit (使用 HEREDOC 支持多行消息)
git commit -m "$(cat <<'EOF'
<type>(<scope>): <标题>

<body 内容，如果有的话>
- 改动点 1
- 改动点 2
EOF
)"

# 3. 显示结果
git log -1
```

**注意**:
- 简单变更只需标题，无需 body
- 复杂变更应添加 body 说明原因和关键改动

### 第七步: 完成报告

```
## Commit 完成

已创建 X 个 commit:
1. abc1234 fix(plugin-xxx): 修复消息处理逻辑
2. def5678 feat(plugin-yyy): 添加新配置项
3. ghi9012 chore(deps): 更新依赖版本

当前状态:
- 领先 origin/main X 个 commit
- 可执行 `git push` 推送到远程
```

---

## 特殊处理

### 处理混合变更

如果检测到单个文件包含多个不相关的功能修改：
1. 提醒用户该文件包含混合变更
2. 建议使用 `git add -p` 进行部分暂存
3. 或者接受整个文件归入最相关的 commit

### Pre-commit Hook 失败

如果 commit 因 pre-commit hook 失败：
1. 检查 hook 修改的文件
2. 将修改加入暂存区
3. 重新提交 (amend 当前 commit)

---

请开始分析当前变更并生成 commit 计划。
