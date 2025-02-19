javascript RegExp

정규표현식 : 문자열에서 특정 문자조합을 확인하기 위해 사용됨

(ex: 대소문자가 포함된 8자 이상, 대소문자,숫자,특수문자를 포함한 8자 이상)

- js에서 정규식은 객체이다. RegExp의 메서드를 사용해 문자열을 검사할 수 있다.

RegExp 생성자는 패턴을 사용해 텍스트를 판별할 때 사용된다.

# 함께 쓰이는 메서드

- RegExp :
- test : 대응되는 문자열이 있는지 검사하는 메소드로, boolean 반환
- exec : 대응되는 문자열을 찾는 메소드 정보를 가지고 있는 배열을 반환하고 찾지 못하면 null 반환
- String
- match : 대응되는 문자열을 찾는 String 메소드 정보를 가지고 있는 배열을 반환하고 찾지 못 못하면 null 반환
- replcae : 대응되는 문자열을 찾아 다른 문자열로 치환하는 String 메서드
- split : 정규식 혹은 문자열로 대상 문자열을 나누어 배열로 반환하는 String 메서드

## 자주 표현되는 정규식

비밀번호

최소 8자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
```

최소 8자, 하나 이상의 대문자, 하나의 소문자 및 하나의 숫자

```javascript
/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
```

최소 8자, 하나의 이상의 대소문자 및 하나의 숫자, 하나의 특수문자

```javascript
/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
```

순서 무관 대소문자 숫자 포함 8자 이상 (특수문자는 있던 없던 상관없음)

```javascript
/^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*()_+\-={}|[\]\\;':",./<>?]*.{8,}$/;
```

전화번호

앞자리가 01이며 (0,1,6,7,8,9) 이며 중간에 3~4자리, 세번째는 4자리인 전화번호

```javascript
/^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
```

3자리/ 3,4자리 / 4자리 숫자

```javascript
/^\d{3}-\d{3,4}-\d{4}$/;
```

일반 전화번호

```javascript
/^\d{2,3}-\d{3,4}-\d{4}$/;
```

이메일

'@' 포함여부와 대문자,소문자를 구분하지않게 표현식끝에 i 사용

```javascript
/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
```

자음모음 & a-z

```javascript
/([^가-힣a-z\x20])/i;
```

공백만 입력된 경우

```javascript
/^\s+|\s+$/g;
```

사용법

1. /ab+c/ 와 같이 /로 감싸 사용한다.

const re = new RegExp('ab+c') 등과 같이 사용 가능.

2. 이스케이핑
   특수 문자를 있는 그대로 탐색해야하는 경우("_" 를 직접 찾는다거나)
   특수 문자 앞에 역슬래시("\")를 배치해 이스케이프해야한다.
   ex.
   "a" 뒤의 별표("_") 뒤의 "b"와 일치해야 하면 /a\*b/를 사용

RegExp 생성자와 문자열 리터럴을 사용하는 경우,
역슬래시 또한 나타나야하기 때문에
/a\*b/ 패턴을 생성하려면 new RegExp("a\\\*b")가 되어야한다.

3. 괄호 사용하기
   정규 표현식의 아무 부분이나 괄호로 감싸게 되면, 그 부분과 일치하는
   부분 문자열을 기억하게 된다.
   기억한 부분 문자열은 불러와서 다시 사용할 수 있다.

---

[charactor class](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

[정규식 테스트 사이트](https://regexr.com)

문자열

모든 한글: [ㄱ-힣]

모든 영문: [a-zA-Z]

숫자(아라비아 숫자)가 아닌 모든 문자와 일치: \D

모든 숫자: [0-9] 또는 \d

모든 한영수: [0-9a-zA-Zㄱ-힣]

부정/보완문: [^~~] - 대괄호 안에 ^로 시작 후 범위 설정하며 대괄호 외 모든 항목과 일치

^ 문자는 input 의 시작을 나타낼 수도 있음

입력의 끝과 일치: /t&/ = eat 의 t와 일치

---

## 예제

```javascript
const emailRegex =
  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&#]{8,}$/;
const phoneNumberRegex = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;

const emailValueCheck = emailRegex.test(email);
const passwordValueCheck = passwordRegex.test(password);
const phoneNumberValueCheck = phoneNumberRegex.test(phoneNumber);

const isUserValid =
  (emailValueCheck || phoneNumberValueCheck) && passwordValueCheck;

// react useEffect ###########################

// Email state
const [email, setEmail] = useState("");

// Email confirm
const [checkEmail, setCheckEmail] = useState("");

useEffect(() => {
  const emailRegex =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  emailRegex.test(email) ? setCheckEmail(true) : setCheckEmail(false);
}, [email]);
```

---

## **정규식 자판기**

---

6이 3개 이상 포함된 숫자
/\d*6{3,}\d*/
