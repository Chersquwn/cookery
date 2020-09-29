# cookery

---

[![codecov](https://codecov.io/gh/Chersquwn/cookery/branch/master/graph/badge.svg?token=O8A99QKRB7)](https://codecov.io/gh/Chersquwn/cookery/)
[![build status](https://github.com/Chersquwn/cookery/workflows/build/badge.svg)](https://github.com/Chersquwn/cookery/actions)

## Getting Started

### Installation

```console
npm install cookery

# or

yarn add cookery
```

### API

#### change-case

- objectKeyCamelCase(obj)

  - 参数

    | 参数 | 说明         | 类型     | 默认值 |
    | ---- | ------------ | -------- | ------ |
    | obj  | 要处理的对象 | `object` | -      |

  - 返回 `Object`

- objectKeyConstantCase(obj)

  - 参数

    | 参数 | 说明         | 类型     | 默认值 |
    | ---- | ------------ | -------- | ------ |
    | obj  | 要处理的对象 | `object` | -      |

  - 返回 `Object`

- objectKeyPascalCase(obj)

  - 参数

    | 参数 | 说明         | 类型     | 默认值 |
    | ---- | ------------ | -------- | ------ |
    | obj  | 要处理的对象 | `object` | -      |

  - 返回 `Object`

- objectKeySnakeCase(obj)

  - 参数

    | 参数 | 说明         | 类型     | 默认值 |
    | ---- | ------------ | -------- | ------ |
    | obj  | 要处理的对象 | `object` | -      |

  - 返回 `Object`

- objectKeyConvert(obj, objectKeyConverter)

  - 参数

    | 参数               | 说明           | 类型                                                                     | 默认值 |
    | ------------------ | -------------- | ------------------------------------------------------------------------ | ------ |
    | obj                | 要处理的对象   | `object`                                                                 | -      |
    | objectKeyConverter | key 的处理方法 | `type ObjectKeyConverter = (input: string, options?: Options) => string` | -      |

  - 返回 `Object`

#### format

- formatCreditCard(cardNum)

  - 参数

    | 参数    | 说明           | 类型     | 默认值 |
    | ------- | -------------- | -------- | ------ |
    | cardNum | 要格式化的卡号 | `string` | -      |

- formatPhoneNumber(phoneNum)

  - 参数

    | 参数     | 说明             | 类型     | 默认值 |
    | -------- | ---------------- | -------- | ------ |
    | phoneNum | 要格式化的手机号 | `string` | -      |

- formatNumberWithGroupSeparator(num)

  - 参数

    | 参数 | 说明           | 类型                 | 默认值 |
    | ---- | -------------- | -------------------- | ------ |
    | num  | 要格式化的数字 | `string` ｜ `number` | -      |

#### time

- getTimezoneOffset()

  - 返回 `string`

#### type-transform

- enumToObject(enumeration)

  - 参数

    | 参数        | 说明   | 类型   | 默认值 |
    | ----------- | ------ | ------ | ------ |
    | enumeration | 源枚举 | `enum` | -      |

  - 返回 `Object`

## License

cookery is licensed under [Apache 2.0 License](./LICENSE)
