---
outline: deep
---

# Jupyter Notebook 工具

## 一、安装方式介绍

1. **共享安装（全局使用）** ：如果你在 base（默认）环境 中安装了 Jupyter Notebook，并且未在其他环境中单独安装，那么所有 Conda 环境都可以通过以下方式共享使用：

    - 在 base 环境启动 Jupyter Notebook。
    - 通过 内核（Kernel）切换 选择其他 Conda 环境的 Python 解释器（需提前注册内核）。

-   优点：只需维护一个 Jupyter Notebook 实例。
-   缺点：Notebook 的依赖（如 ipykernel、notebook 等）需与 base 环境兼容。

```bash
# 激活目标环境
conda activate d2l

# 安装 ipykernel (可省略)
conda install ipykernel

# 注册内核（可自定义显示名称）
python -m ipykernel install --user --name d2l --display-name "Python (d2l)"
```

2.**独立安装（每个环境一套）** ：如果你在每个 Conda 环境中单独安装 Jupyter Notebook，那么你需要在每个 Conda 环境中单独安装 Jupyter Notebook（例如在每个环境中运行 conda install jupyter），则每个环境会拥有独立的 Jupyter Notebook 副本及其依赖。

-   优点：环境完全隔离，避免依赖冲突。
-   缺点：占用更多磁盘空间，需分别维护。

## 二、常用命令

### 1. 启动 Jupyter Notebook

```bash
jupyter notebook
```

### 2. 查看 jupyter 版本

```bash
jupyter notebook --version
```

### 3. 列出所有已注册内核

```bash
jupyter kernelspec list
```
