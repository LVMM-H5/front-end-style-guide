# eslint-config-lvmama

[驴妈妈H5开发规范](https://github.com/LVMM-H5/front-end-style-guide) 对应的 eslint 共享规则。

## 如何使用

1. 安装 eslint-config-lvmama 到本地目录

    ```shell
    > npm install --save-dev eslint-config-lvmama
    ```

1. 在你的项目目录的 eslint 配置文件（一般命名为 `.eslintrc`）中，设置 `extends` 属性

    ```js
    {
        "extends": "lvmama"
    }
    ```

1. 启动语法检查。

## 集成VSCode

1. 全局安装 eslint

    ```shell
    > npm install -g eslint
    ```

1. 安装 VSCode 的 [Eslint 扩展](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

1. 打开 VSCode 的设置页，在用户设置中添加你的 eslint 配置文件路径

    ```js
    "eslint.options": {
        "configFile": "E:\\data\\myProject\\.eslintrc.js"
    }
    ```

1. 关闭所有 VSCode 窗口后，重启 VSCode

1. 在编辑区右侧以及 `问题` 面板（按 `Ctrl+Shift+M` 打开）可以看到检查出的问题。