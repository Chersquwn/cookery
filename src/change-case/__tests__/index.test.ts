import { objectKeyCamelCase, objectKeyConstantCase, objectKeySnakeCase, objectKeyPascalCase, objectKeyConvert } from '..'

const source = {
  user: {
    user_name: 'Alice',
    userAge: 18,
    GENDER: 'woman',
    MOBILE_PHONE: 18888888888
  }
}

describe('change-case', () => {
  test('objectKeyCamelCase', () => {
    expect(objectKeyCamelCase(source)).toEqual({
      user: {
        userName: 'Alice',
        userAge: 18,
        gender: 'woman',
        mobilePhone: 18888888888
      }
    })
  })

  test('objectKeyConstantCase', () => {
    expect(objectKeyConstantCase(source)).toEqual({
      USER: {
        USER_NAME: 'Alice',
        USER_AGE: 18,
        GENDER: 'woman',
        MOBILE_PHONE: 18888888888
      }
    })
  })

  test('objectKeySnakeCase', () => {
    expect(objectKeySnakeCase(source)).toEqual({
      user: {
        user_name: 'Alice',
        user_age: 18,
        gender: 'woman',
        mobile_phone: 18888888888
      }
    })
  })

  test('objectKeySnakeCase', () => {
    expect(objectKeyPascalCase(source)).toEqual({
      User: {
        UserName: 'Alice',
        UserAge: 18,
        Gender: 'woman',
        MobilePhone: 18888888888
      }
    })
  })

  test('objectKeyConvert', () => {
    expect(objectKeyConvert(source, (input) => {
      return input.toLocaleLowerCase().replace('_', '.')
    })).toEqual({
      user: {
        'user.name': 'Alice',
        userage: 18,
        gender: 'woman',
        'mobile.phone': 18888888888
      }
    })
  })
})