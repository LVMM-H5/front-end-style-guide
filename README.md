# 驴妈妈H5开发规范

**本规范的主要目标**：

* 代码风格一致

  通过保持代码风格的一致，使代码具有良好的可读性，降低代码的维护成本，提高团队间的协作效率。

* 最佳实践

  通过遵守最佳实践，可以降低bug引入的可能，提高页面性能，编写出可扩展可维护的代码。

**本规范的编写原则**：努力兼顾代码风格与开发效率的平衡，既要努力做到 “使每一行代码都像是同一个人编写的”，又要尽量避免 “大家都觉得这样很麻烦”。

**本规范的更新**：本规范是当前阶段的一个总结，不是最终版，也不会有最终版，随着代码风格的优化、最佳实践的发展，本规范也会变化。

**本规范的代码说明**：不符合规范的代码写法，会有注释 `// 不好`，符合规范的代码写法，会有注释 `// 好`，最佳写法，会有注释 `// 最佳`；在空格相关的规范中，使用 `·` 号来强调表示空格。

### **规范最重要的是执行。**

## 目录

TODO

## JavaScript

### 空格

* 将 Tab 设置为4个空格。

    > 主流的编辑器一般都支持设定 Tab 对应的空格数，以 Visual Studio Code 为例，设置方式：点击文件 -> 首选项 -> 设置，搜索 "editor.tabSize"。

    ```js
    // 不好
    function foo() {
    ∙let name;
    }

    // 不好
    function bar() {
    ∙∙let name;
    }

    // 好
    function foo() {
    ∙∙∙∙let name;
    }
    ```

* 不要混用 Tab 和空格。

    > 这可能会导致一些格式上的异常，例如：在 Jade 中混用 Tab 和空格就会出错。

* 在左大括号之前加 1 个空格。

    ```js
    // 不好
    function test(){
        console.log('test');
    }

    // 好
    function test()∙{
        console.log('test');
    }
    ```

* 在流程控制语句（如 `if`, `while` 等）的左小括号之前加 1 个空格。

    ```js
    // 不好
    if(true) {
        done ();
    }

    // 好
    if∙(true) {
        done();
    }
    ```
* 在函数的定义和调用中，函数名与参数列表之间不要有空格。

    ```js
    // 不好
    function test∙() {
        console.log∙('test');
    }

    // 好
    function test() {
        console.log('test');
    }
    ```
* 运算符之间使用空格隔开。

    ```js
    // 不好
    const x=y+5;

    // 好
    const x∙=∙y∙+∙5;
    ```

* 在文件的末尾加上一行空白行。

    ```js
    // 不好
    import { es6 } from './test';
        // ...
    export default es6;
    ```

    ```js
    // 不好
    import { es6 } from './test';
        // ...
    export default es6;↵
    ↵
    ```

    ```js
    // 好
    import { es6 } from './test';
        // ...
    export default es6;↵
    ```

* 多个方法（大于 2 个）形成的方法链调用，从第 1 或第 2 个方法开始换行调用，并将 `.` 号置于行首以说明该行是方法调用，而不是开始一个新的语句。

    ```js
    // 好
    const result1 = data.replace('[str1]', 'str1').replace('[str2]', 'str2');

    // 不好
    const result2 = data.replace('[str1]', 'str1').replace('[str2]', 'str2').replace('[str3]', 'str3');

    // 好
    const result3 = data
        .replace('[str1]', 'str1')
        .replace('[str2]', 'str2')
        .replace('[str3]', 'str3');

    // 好
    const result4 = data.replace('[str1]', 'str1')
        .replace('[str2]', 'str2')
        .replace('[str3]', 'str3');
    ```

* 不要在语句块的开始和结尾处放置空行。

    ```js
    // 不好
    function bar() {

        console.log(foo);

    }

    // 好
    function bar() {
        console.log(foo);
    }
    ```

* 不要在小括号内的两侧放置空格。

    ```js
    // 不好
    function bar(·foo·) {
        return foo;
    }

    // 好
    function bar(foo) {
        return foo;
    }

    // 不好
    if (·foo·) {
        console.log(foo);
    }

    // 好
    if (foo) {
        console.log(foo);
    }
    ```

* 不要在中括号内的两侧放置空格。

    ```js
    // 不好
    const foo = [·1, 2, 3·];
    console.log(foo[·0·]);

    // 好
    const foo = [1, 2, 3];
    console.log(foo[0]);
    ```

* 在大括号内的两侧放置空格。

    ```js
    // 不好
    const person = {name: 'Kathy'};

    // 好
    const person = {·name: 'Kathy'·};
    ```

### 逗号

* 不要将逗号放在前面。

    ```js
    // 不好
    const story = [
          once
        , upon
        , aTime
    ];

    // 好
    const story = [
        once,
        upon,
        aTime,
    ];
    ```

* 多行情况下，最后一行的参数或属性的末尾添加额外逗号。

    > 这会让 git 的差异列表更清晰。

    ```diff
    // 不好 - git 差异列表会展示 3 行改动
    const hero = {
         firstName: 'Florence',
    -    lastName: 'Nightingale'
    +    lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing']
    };

    // 好 - git 差异列表会展示 1 行改动
    const hero = {
         firstName: 'Florence',
         lastName: 'Nightingale',
    +    inventorOf: ['coxcomb chart', 'modern nursing'],
    };
    ```

    ```js
    // 不好
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully'
    };

    const heroes = [
        'Batman',
        'Superman'
    ];

    // 好
    const hero = {
        firstName: 'Dana',
        lastName: 'Scully',
    };

    const heroes = [
        'Batman',
        'Superman',
    ];

    // 不好
    function createHero(
        firstName,
        lastName,
        inventorOf
    ) {
        // does nothing
    }

    // 好
    function createHero(
        firstName,
        lastName,
        inventorOf,
    ) {
        // does nothing
    }

    // 好（注意：可变参数后面不可以有逗号）
    function createHero(
        firstName,
        lastName,
        inventorOf,
        ...heroArgs
    ) {
        // does nothing
    }

    // 好（因为该条规则仅适用于多行）
    function createHero(firstName, lastName, inventorOf) {
        // does nothing
    }
    ```

### 分号

* 语句的结尾处必须要有分号。

    ```js
    // 不好
    const name = 'ESLint'

    object.method = () => {
        // ...
    }

    // 好
    const name = 'ESLint';

    object.method = () => {
        // ...
    };
    ```

### 变量

* 总是使用 `const` 来定义变量，避免使用 `var`。

    > 这能够确保你无法对变量重新赋值，在开发阶段就发现可能的问题。
    
    ```js
    // 不好
    var a = 1;
    var b = 2;

    // 好
    const a = 1;
    const b = 2;
    ```

* 如果你需要为变量重新赋值，使用 `let` 而不是 `var`。

    > `let` 是块作用域，`var` 是函数作用域。

    ```js
    // 不好
    var count = 1;
    if (true) {
        count += 1;
    }

    // 好
    let count = 1;
    if (true) {
        count += 1;
    }

    // 不好
    for (var i = 0; i < 3; i++) {
        // ...
    }

    // 好
    for (let i = 0; i < 3; i++) {
        // ...
    }
    ```
* 请注意：`let` 和 `const` 都是块级作用域。

    ```js
    // const 和 let 只存在于它们被定义的区块内。
    {
        let a = 1;
        const b = 1;
    }
    console.log(a); // 引用错误：a未定义
    console.log(b); // 引用错误：b未定义
    ```

### 命名

* 避免使用单一字母命名，让你的名字具有实际含义。

    ```js
    // 不好
    function q() {
        // ...
    }

    // 好
    function query() {
        // ...
    }
    ```
* 使用[小驼峰命名法](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB)来命名对象和函数。

    ```js
    // 不好
    const this_is_my_object = {};
    function c() {}

    // 好
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

* 使用[Pascal命名法](https://zh.wikipedia.org/wiki/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95)来命名构造函数和类。

    ```js
    // 不好
    function user(options) {
        this.name = options.name;
    }

    const bad = new user({
        name: 'Jack',
    });

    // 好
    class User {
        constructor(options) {
            this.name = options.name;
        }
    }

    const good = new User({
        name: 'Jack',
    });
    ```

* 缩略词应该保持全部大写或者全部小写。

    ```js
    // 不好
    import SmsContainer from './containers/SmsContainer';

    // 不好
    const HttpRequests = [
        // ...
    ];

    // 好
    import SMSContainer from './containers/SMSContainer';

    // 好
    const HTTPRequests = [
        // ...
    ];
    ```

## HTML

## CSS

## 性能相关

## 业务相关