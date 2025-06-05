---
outline: deep
---

# 安装

```bash
conda init

# 现在关闭并重新打开当前的shell。并使用下面的命令创建一个新的环境：
conda create --name d2l python=3.12 -y
# 现在激活 d2l 环境：
conda activate d2l
```

## 安装深度学习框架和 d2l 软件包

```bash
pip install torch
pip install torchvision
```

## Results

### Theme Data

<pre>{{ theme }}</pre>

### Page Data

<pre>{{ page }}</pre>

### Page Frontmatter

<pre>{{ frontmatter }}</pre>

## More

Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).
