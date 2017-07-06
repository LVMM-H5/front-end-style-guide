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

* [JavaScript](#javascript)
    * [命名](#命名)
    * [空格](#空格)
    * [逗号](#逗号)
    * [分号](#分号)
    * [变量](#变量)
    * [字符串](#字符串)
    * [对象](#对象)
    * [数组](#数组)
    * [函数](#函数)
    * [箭头函数](#箭头函数)
    * [类](#类)
* [HTML](#html)
* [CSS](#css)
* [性能相关](#性能相关)
* [业务相关](#业务相关)

## JavaScript

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
* 使用 [小驼峰命名法](https://zh.wikipedia.org/wiki/%E9%A7%9D%E5%B3%B0%E5%BC%8F%E5%A4%A7%E5%B0%8F%E5%AF%AB) 来命名对象和函数。

    ```js
    // 不好
    const this_is_my_object = {};
    function c() {}

    // 好
    const thisIsMyObject = {};
    function thisIsMyFunction() {}
    ```

* 使用 [Pascal命名法](https://zh.wikipedia.org/wiki/%E5%B8%95%E6%96%AF%E5%8D%A1%E5%91%BD%E5%90%8D%E6%B3%95) 来命名构造函数和类。

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

### 空格

* 将 Tab 设置为 4 个空格。

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
        done();
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

* 对象的键和冒号间不加空格，冒号和值间加空格。

    ```js
    // 不好
    const foo = {
        key1∙:∙value1,
        key2:value2,
        key3∙:value3
    };

    // 好
    const foo = {
        key1:∙value1,
    };
    ```

* 逗号之前不加空格，逗号之后加空格。

    ```js
    // 不好
    const foo = 1,bar = 2;
    const arr = [1 ,2];
    const obj = {"foo": "bar" , "baz": "qur"};
    foo(a,b);
    new Foo(a ,b);
    function foo(a , b){}
    a,b

    // 好
    const foo = 1, bar = 2;
    const arr = [1, 2];
    const obj = {"foo": "bar", "baz": "qur"};
    foo(a, b);
    new Foo(a, b);
    function foo(a, b){}
    a, b
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

* 总是使用 `const` 来定义常量，避免使用 `var`。

    > 这能够确保你无法对变量重新赋值，在开发阶段就发现可能的问题。
    
    ```js
    // 不好
    var a = 1;
    var b = 2;

    // 好
    const a = 1;
    const b = 2;
    ```

* 如果你需要为引用重新赋值，使用 `let` 而不是 `var`。

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

### 字符串

* 字符串使用单引号 `''` 。

    ```js
    // 不好
    const name = "Kathy";

    // 不好 - 仅当字符串中需要插入变量或换行时才使用模板字符串
    const name = `Kathy`;

    // 好
    const name = 'Kathy';
    ```

* 对于长字符串不要人为分割。

    > 多数规范都不允许字符串过长，推荐进行字符串拼接分割，但事实上，长字符串分割之后将难以维护，并可能导致关键字搜索无效；而长字符串难以阅读的问题，使用现代编辑器就可以解决，以 Visual Studio Code 为例：点击查看 -> 切换自动换行。

    ```js
    // 不好
    const errorMessage = 'This is a super long error that was thrown because ' +
    'of Batman. When you stop to think about how Batman had anything to do ' +
    'with this, you would get nowhere fast.';

    // 不好
    const errorMessage = 'This is a super long error that was thrown because \
    of Batman. When you stop to think about how Batman had anything to do \
    with this, you would get nowhere \
    fast.';

    // 好
    const errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
    ```

* 构建包含变量或换行的字符串时，使用模板字符串而不是字符串拼接。

    ```js
    // 不好
    function sayHi(name) {
        return 'How are you, ' + name + '?';
    }

    // 不好
    function sayHi(name) {
        return ['How are you, ', name, '?'].join();
    }

    // 好
    function sayHi(name) {
        return `How are you, ${name}?`;
    }
    ```

* 不要对字符串使用 `eval()` 方法，它可能会导致很多漏洞。

    ```js
    // 不好
    var result = eval('(function() { const a = 1; return a; }());');
    ```

* 避免无意义的转义符 `\`。

    > 转义符会降低可读性，应该仅在必要时才存在。

    ```js
    // 不好
    const foo = '\'this\' \i\s \"quoted\"';

    // 好 - 仅 this 前后的引号才需要转义
    const foo = '\'this\' is "quoted"';
    ```

### 对象

* 使用简洁语法创建对象。

    ```js
    // 不好
    const item = new Object();

    // 好
    const item = {};
    ```

* 使用对象方法的简写。

    ```js
    // 不好
    const atom = {
        value: 1,

        addValue: function (value) {
            return atom.value + value;
        },
    };

    // 好
    const atom = {
        value: 1,

        addValue(value) {
            return atom.value + value;
        },
    };
    ```

* 使用属性值的简写。

    ```js
    const name = 'Kathy';

    // 不好
    const obj = {
        name: name,
    };

    // 好
    const obj = {
        name,
    };
    ```

* 仅在无效的属性名上加引号。

    > 一般来说，我们认为这在主观上更容易阅读。它改进了语法高亮，并且更容易被许多JS引擎优化。

    ```js
    // 不好
    const bad = {
        'foo': 3,
        'bar': 4,
        'data-blah': 5,
    };

    // 好
    const good = {
        foo: 3,
        bar: 4,
        'data-blah': 5,
    };
    ```

* 不要直接使用 `Object.prototype` 上的方法，例如 `hasOwnProperty`，`isPrototypeOf` 等。

    > 这些方法可能会被对象的自定义属性覆盖，例如对象：`{hasOwnProperty: false}`，或者当该对象的 `__proto__` 属性为 `null` 时，例如使用 `Object.create(null)` 创建的对象，就不存在这些方法。

    ```js
    // 不好
    console.log(obj.hasOwnProperty(key));

    // 好
    console.log(Object.prototype.hasOwnProperty.call(obj, key));
    ```

### 数组

* 使用简洁语法创建数组。

    ```js
    // 不好
    const items = new Array();

    // 好
    const items = [];
    ```

* 使用 [Array#push](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/push) 在数组末尾添加元素。

    ```js
    const someStack = [];

    // 不好
    someStack[someStack.length] = 'abc';

    // 好
    someStack.push('abc');
    ```

* 使用 [扩展运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator) `...` 来复制数组。

    > 注意：这些示例写法都是浅拷贝，不是深拷贝。

    ```js
    const items = [1, 2, 3];

    // 不好
    const itemsCopy = [];
    for (let i = 0; i < items.length; i++) {
        itemsCopy[i] = items[i];
    }

    // 好
    const itemsCopy = items.slice();

    // 好
    const itemsCopy = Array.from(items);

    // 最佳
    const itemsCopy = [...items];
    ```

* 使用 [Array.from](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/from) 将类数组对象（arguments、NodeList 等）转换为标准数组。

    ```js
    // 不好
    const divs = Array.prototype.slice.call(document.querySelectorAll('div'));

    // 好
    const divs = Array.from(document.querySelectorAll('div'));

    // 好
    function something() {
        var args = Array.from(arguments);
        // ...
    }
    ```

### 函数

* 不要在非函数代码块（`if`、`while` 等）的内部定义函数。

    ```js
    // 不好
    if (true) {
        function test() {
            console.log(111);
        }
        // ...
    }

    // 好
    let test;
    if (true) {
        test = () => {
            console.log(111);
        };
        // ...
    }
    ```

* 将自执行函数用括号包起来。

    ```js
    // 不好
    var x = function() {
        console.log(1); 
    }();

    // 不好
    (function() {
        console.log(1); 
    })();

    // 好
    (function() {
        console.log(1); 
    }());
    ```

* 不要将参数命名为 `arguments`，这将覆盖掉传入函数作用域的 `arguments` 对象。

    ```js
    // 不好
    function foo(arguments) {
        // ...
    }

    // 好
    function foo(args) {
        // ...
    }
    ```

* 不要使用 `arguments` 对象，可以用 [剩余参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Rest_parameters) 替代。

    > 剩余参数明确表示函数会接收一系列参数，在参数列表中就能看到，不像 `arguments` 那样隐晦；另外，剩余参数是标准数组，而 `arguments` 是类数组对象，要使用数组的方法还要先转为数组。

    ```js
    // 不好
    function joinAll() {
        const args = Array.from(arguments);
        return args.join('');
    }

    // 好
    function joinAll(...args) {
        return args.join('');
    }
    ```

* 使用 [默认参数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Default_parameters) 语法而不是在函数内部处理默认值。

    ```js
    // 不好
    function handleThings(opts) {
        // 如果 opts 传值为 false，这里就会错误的重新指定默认值
        opts = opts || {};
        // ...
    }

    // 不好
    function handleThings(opts) {
        if (typeof opts === 'undefined') {
            opts = {};
        }
        // ...
    }

    // 好
    function handleThings(opts = {}) {
        // ...
    }
    ```

* 将默认参数放置于最后。

    ```js
    // 不好
    function handleThings(opts = {}, name) {
        // ...
    }

    // 好
    function handleThings(name, opts = {}) {
        // ...
    }
    ```

* 不要使用 `Function` 构造函数生成一个函数。

    > 用这种方式生成函数来计算字符串类似于 `eval`，可能造成很多漏洞。

    ```js
    // 不好
    var add = new Function('a', 'b', 'return a + b');
    ```

* 使用 [扩展运算符](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Spread_operator) `...` 给函数传参。

    ```js
    // 不好
    const x = [1, 2, 3, 4, 5];
    console.log.apply(console, x);

    // 好
    const x = [1, 2, 3, 4, 5];
    console.log(...x);
    ```

### 箭头函数

* 当你使用一个函数表达式（或者传递一个匿名函数）时，请使用 [箭头函数](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Functions/Arrow_functions)。

    ```js
    // 不好
    [1, 2, 3].map(function (x) {
        const y = x + 1;
        return x * y;
    });

    // 好
    [1, 2, 3].map(x => {
        const y = x + 1;
        return x * y;
    });
    ```

* 避免可能让人混淆箭头函数符号 `=>` 和比较运算符 `>=`、`<=` 的代码。

    ```js
    // 不好
    const itemHeight = item => item.height >= 256 ? item.largeSize : item.smallSize;

    // 好
    const itemHeight = item => (item.height >= 256 ? item.largeSize : item.smallSize);

    // 好
    const itemHeight = item => {
        const { height, largeSize, smallSize } = item;
        return height >= 256 ? largeSize : smallSize;
    };
    ```

### 类

* 总是使用 `class`，避免直接操作 `prototype`。

    > 这是因为 `class` 更简洁易懂。

    ```js
    // 不好
    function Queue(contents = []) {
        this.queue = [...contents];
    }
    Queue.prototype.pop = function () {
        const value = this.queue[0];
        this.queue.splice(0, 1);
        return value;
    };

    // 好
    class Queue {
        constructor(contents = []) {
            this.queue = [...contents];
        }
        pop() {
            const value = this.queue[0];
            this.queue.splice(0, 1);
            return value;
        }
    }
    ```

* 使用 `extends` 实现继承。

    ```js
    class Parent {
        constructor(name) {
            this.name = name;
        }
        
        print() {
            console.log(this.name);
        }
    }
    
    // 不好
    function Child(name) {
        this.name = name;
    }

    Child.prototype = Object.create(Parent.prototype);

    // 好
    class Child extends Parent {}
    ```

* 如果类的方法没有显式返回值，建议返回 `this` 。

    > 这样可以帮助构建方法链，实现链式调用。

    ```js
    // 好
    class Div {
        setHeight(height) {
            this.height = height;
        }

        setWidth(width) {
            this.width = width;
        }
    }

    var div = new Div();
    div.setHeigth(200);  // 返回 undefined
    div.setWidth(300);  // 返回 undefined

    // 最佳
    class Div {
        setHeight(height) {
            this.height = height;
            return this;
        }

        setWidth(width) {
            this.width = width;
            return this;
        }
    }

    var div = new Div();
    div.setHeight(200).setWidth(300);
    ```

* 如果没有给类显式指定构造函数，那它会有一个预设的默认构造函数。一个空的或者仅仅委派给父类的构造函数是不必要的。

    ```js
    // 不好
    class Jedi {
        constructor() {}

        getName() {
            return this.name;
        }
    }

    // 不好
    class Rey extends Jedi {
        constructor(...args) {
            super(...args);
        }
    }

    // 好
    class Rey extends Jedi {
        constructor(...args) {
            super(...args);
            this.name = 'Rey';
        }
    }
    ```

* 避免定义重复的类成员。

    > 类的重复成员会默认最后一个为有效，重复成员多数情况下都是 bug。

    ```js
    // 不好
    class Foo {
        bar() { return 1; }
        bar() { return 2; }
    }

    // 好
    class Foo {
        bar() { return 2; }
    }
    ```

## HTML

## CSS

## 性能相关

## 业务相关