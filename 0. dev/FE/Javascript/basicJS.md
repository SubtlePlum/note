# basicJS

일반적인 데이터는 property
함수를 통해 데이터를 가지고 뭔가 일을 할 수 있게 하는 것은 method

## 계산식

```javascript
Math.pow(
  n,
  m
)(
  // n의 m제곱
  Math.ceil(n)
)(
  // 올림
  Math.floor(n)
)(
  // 내림
  Math.round(n)
); //  반올림
Number.toFixed(n); // 소수점 반올림  소수점 n의자릿수까지 표현,  매개변수가 없으면 1의자릿수 반환
Math.sqrt(n); // n의 제곱근
```

## 날짜 계산 함수

```javascript
// 날짜 예제
// Sunday - Saturday : 0 - 6
const someday = new Date("2022-01-23");
// 날짜 형식은 자유로움 ('january 23 ,2022') 처럼 사용 가능

const day1 = someday.getDay();
console.log(day1); //  22.01.23은 일요일이므로, 0 반환

// 날짜 추출
let today = new Date(); // 인자가 비어있는 경우 현재 날짜/시간 반환

let year = today?.getFullYear();
console.log(year); // 123 - 2023년 반환값 (2022년 반환값 = 122)

let month = today?.getMonth() + 1; // javascript에서는 1월을 0부터 계산해주기 떄문에 + 1을 해준다.
console.log(month); // 3

let day = today?.getDate();
console.log(day); // 6

let hour = today?.getHour();
console.log(hour); // 현재 시간 추출

let minutes = today?.getMinutes();
console.log(minutes); // 현재 분 추출

let seconds = today?.getSeconds();
console.log(seconds); // 현재 초 추출
```

## 문자열/숫자열/배열

### 숫자열 함수

숫자열 함수에 문자열을 추가(ex. 1234+"")해주면 문자열로 변한다.

### 문자열 함수

string.charAt(0) - 스트링의 0번째 글자 가져오기(result = string)

string.substring(0,5) - 스트링의 0~4번째 글자 가져오기(5를 포함하지 않음)

```javascript
Number(s); // s 문자열을 숫자로 변환
parseInt(s); // s 문자열을 분석해 숫자로 변환 - (ex. parseInt("1 abce") // 1
parseFloat(s); // s 문자열을 분석해 숫자로 변환 - (ex. parseFloat("2 abce") // 2

Number.toString(); // 숫자를 스트링으로 변환

String.includes("abcd"); // 문자열이 특정 문자열을 포함하는지 확인

String.trim() // 문자열의 공백을 제거
  .trimStart() // 문자열 왼쪽 공백 제거
  .trimEnd(); // 오른쪽 공백 제거

Str.slice(0, -1); // 문자열 마지막 글자 제거

Str.split(""); // 문자열String을 ''로 나눠 각 글자별로 배열 생성

Str.replace("특정문자", "이걸로바꿈");
```

### 삼항연산자

```javascript

let index === A ? a : b
// index가 A면 a 아니면 b

```

> **escape문 : \n 줄바꿈**

**객체 다루기**

```javascript

Object.assign() // 객체 복사 후 붙여넣기

Object.keys(obj) // 객체 키값만 배열로 생성
      .values(obj) // 객체 value 값만 배열로 생성

// 객체 수정
const editFormData = {
        todo: "",
        isCompleted: true,
      };
{ ...editFormData, todo: "abcd", isCompleted: true }
// editFormData = { todo: "abcd", isCompleted: false }


```

**배열 여부 확인**

```javascript
Array.isArray([1, 2, 3]); // true
Array.isArray({ foo: 123 }); // false
Array.isArray("foobar"); // false
```

**배열 수정**

```javascript
Arr = [1, 2, 3, 4, 5];
Arr[0] = 123; // Arr=[123,2,3,4,5]
obj = [
  { id: 1, name: "냐냐냥" },
  { id: 1, name: "뇨뇨뇽" },
];
obj[0].name = "얍얍얍얍얍"; // obj = [{id:1,name:'얍얍얍얍얍'},{id:1,name:'뇨뇨뇽'}]
```

**배열 정렬**

```javascript
arr.sort();
// 문자열 배열의 경우 알파벳 순서로 정렬(오름차순)
// 파라미터(compareFunction)-매개변수 가 입력되지 않으면 유니코드 순서에 따라 정렬됨

// 문자 배열
// 오름차순
arr.sort((a, b) => {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA > upperCaseB) return 1;
  if (upperCaseA < upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
});

// 내림차순
arr.sort(function (a, b) {
  const upperCaseA = a.toUpperCase();
  const upperCaseB = b.toUpperCase();

  if (upperCaseA < upperCaseB) return 1;
  if (upperCaseA > upperCaseB) return -1;
  if (upperCaseA === upperCaseB) return 0;
});

// 숫자
// 오름차순
arr.sort((a, b) => a - b);

// 내림차순
arr.sort((a, b) => b - a);

// 영어가 아닌 한글 등의 문자 정렬
arr1.sort((a, b) => a.localeCompare(b)); // ['가', '나', '다', '바']
arr1.sort((a, b) => b.localeCompare(a)); // ['바', '다', '나', '가']
```

배열 메서드

```javascript

Array.join(' ') // 배열 내 요소들을 ' '를 통해 이어줌
.push("~") // 처럼 사용 가능 // 문자 숫자 가능
.push() 메서드 : // 배열의 마지막에 새로운 요소를 추가 / 변경된 배열의 길이를 반환
.pop() 메서드 : // 배열의 마지막 요소를 제거 / 한 후, 제거한 요소를 반환
.unshift() 메서드 : // 배열의 첫 번째 자리에 새로운 요소를 추가/ 변경된 배열의 길이를 반환
.shift() 메서드 : // 배열의 첫 번째 요소를 제거 /  제거한 요소를 반환

.reverse() // 배열 반전

arr.splice(1, 2) : // 배열의 1번째 index부터 2개 원소 제거

// ★배열함수 등에서 .filter .map((item)=>{ retrun ~ }는 .map((item)=>( ~ ) 처럼 사용하면 return을 적지 않아도 괜찮다.

.filter() // 특정 조건을 부합하는 값만 모아서 새로운 배열을 만듬

//ex.
arr = ['a', 'b', 'b', 'c']
let filtered = arr.filter((element)=>element != 'b');
arr = ['a', 'b', 'b', 'c']
filtered = ['a', 'c']

let array_num = [0,1,2,3,4,5]
const new_array = array_num.filter((array_item) => {
	return array_item>3;
})
new_array = [4,5]

.map() // 반복문처럼 사용 가능 - 원본 배열을 흐트러트리지 않고 새로운 배열을 반환
.forEach() // map과 유사하게 사용하나 메모리 할당 없음

.concat() // 두 배열을 합침 / 중복제거는 하지 않음
// ex
array_num = [0,1,2,3,4,5]
new_array = [4,5]
const  merge = array_num.concat(new_array);
merge = [ 0, 1, 2, 3, 4, 5, 4, 5]


Array.from() // 배열로 만들어줌

const my_name = "john0"
const my_name_array = Array.from(my_name)
my_name_array = [ 'j', 'o', 'h', 'n', '0' ]

// 조건 넣어주기
const my_name = "john0"
const new_array = Array.from({length: 4}, (item, index)=> {
    return index;
});
new_array = [ 0, 1, 2, 3 ]

new Array(n).fill(0) // n의 길이만큼 0이 채워진 배열 생성

.reduce() // 초기값과 증감식을 통한 배열 내 요소들에 대한 처리 가능
array.reduce((acc,cur)=>acc+cur,0)

.find() // 배열의 특정 값 찾기
// 조건에 맞는 첫 번째 값 호출
array.find(v => v > 5)
// 6
array.find(v => v == 5)
// 5

.findIndex() // 배열 내 특정 값에 대한 index 조회 가능
// ex
array.findIndex(v=>v.name === "john")

.indexOf(v) // 배열에서 v를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환

string.includes(v) // 문자열이 특정 문자열을 포함하는지 확인
```

**메서드 응용**

```javascript

배열 중복 제거
const fruits = ["🍎", "🍌", "🍌", "🍒", "🍎"];
const uniqueFruits = [...new Set(fruits)]; // uniqueFruits =["🍎", "🍌", "🍒"]

let newStorageSet = newStorage.filter((item, index) => {
    return newStorage.indexOf(item) === index;
  });

조건과 일치하는 모든 요소를 찾는 방법
const names = ["Kai", "Katharina", "Tim"];
// 하기 조건 : 4자 미만의 이름을 유지하십시오.
const shortNames = names.filter(name => name.length < 4); // shortNames  = ["Kai", "Tim"]

일부(Any) / 전부(Every) 조건과 일치하는지 확인하는 방법
const names = ["Kai", "Katharina", "Tim"];
// 이름이 4자보다 짧은지 확인
const containsShortName = names.some(name => name.length < 4); // containsShortName = true

두 배열의 교집합(Intersection)을 찾는 방법
const fruitsA = ["🍎", "🍌", "🍒"];
const fruitsB = ["🍒", "🍆", "🍉", "🍌"];
const intersection = fruitsA.filter(fruit => fruitsB.includes(fruit)); // intersection =  ["🍌", "🍒"]

두 배열의 차이를 찾는 방법
const fruitsA = ["🍎", "🍌", "🍒"];
const fruitsB = ["🍒", "🍆", "🍉", "🍌"];

const difference = fruitsA.filter(fruit => !fruitsB.includes(fruit));
console.log(difference); // ["🍎"]
==
let difference = arr1
                 .filter(x => !arr2.includes(x))
                 .concat(arr2.filter(x => !arr1.includes(x)));
로도 사용 가능

두 배열의 합집합을 찾는 방법
const fruitsA = ["🍎", "🍌", "🍒"];
const fruitsB = ["🍒", "🍆", "🍉", "🍌"];

// `fruitsA`와`fruitsB`를 병합.  set을 사용하여 중복을 제거
// 그 후 set에서 새 배열 생성.
const union = [...new Set([...fruitsA, ...fruitsB])];
console.log(union); // ["🍎", "🍌", "🍒", "🍆", "🍉"]

배열 중복 제거(오브젝트)
let data = [
  { id: 1, name: "name" },
  { id: 2, name: "name" },
  { id: 1, name: "name" },
  { id: 2, name: "name" }
];
const union = [...new Set(data.map(JSON.stringify))].map(JSON.parse);
console.log(union); // [ { id: 1, name: 'name' }, { id: 2, name: 'name' } ]

string.indexOf(검색하고 싶은 문자열 [, 검색을 시작할 위치])
const str = 'abc123';
str.indexOf('a'); // 0
str.indexOf('1'); // 3

str.toUpperCase() - 문자열을 대문자로 변환해서 반환
   .toLowerCase() - 소문자로 변환
```

**반복문**

```javascript

if / else
for(let i = 0; i<5;i++){}

break
while (i < 6) {
  if (i === 3) {
    break;
  }
  i = i + 1;
}
```

---

**기타 메서드/이벤트 처리**

```javascript
// 로그인 등 실행 시 submit 처리 방지
function onSubmit(evevt) {
  event.preventDefault();
}
addEventListener("submit", onSubmit);

// submit 방지가 잘 안되는 경우 작동시킬 버튼에  type="submit"을 입력해준 뒤 e.preventDefault를 설정해준다
```

**주소 이동**

```javascript
window.location.href = 'http://www.abc.com/'; // JS로 href 진행


// href버튼
<button onclick="to_main()">메인으로 돌아가기<button>

function to_main(){
	window.location.href="'/'"
}

또는
<button onclick="window.location.href='/'">메인으로 돌아가기<button>
와 같이 한줄 코드 가능


```

## vanillaJS

```javascript

// id 삭제
document.querySelector('.popupfooter').removeAttribute('id');

// id 추가
 document.querySelector('.popupfooter').id = 'save_Project';

// 엘리먼트 생성
const new_div = document.createElement("div")

// id/class/tag 지정
const title = document.getElementById("title")
const wraps = document.getElementsByClassName("wrap")
const buttons = document.getElementstByTagName("button")

getElement(s)는 유사배열로 가져오기 때문에
함수의 인자처럼 사용하기 위해서는 별도의 처리를 해준다.
function changeBackgroundColor(index){
	let card = document.getElementsByClassName("todo-card")[index];
	card.style.backgroundColor="gray"
}

// focus 포커스 설정 / 포커스 메서드
document.getElementById("searchInput")?.focus();
// id만 가능


```

## 시간 지연/반복 메서드

```javascript
// 시간 지연(비동기)
setTimeout(() => {
  // ~~~
}, 1000);

// 반복
setInterval(() => {}, 1000);

// setInterval 반복 제어
const intervalId = setInterval(someFunction, 3000);
clearInterval(intervalId);
```

**alert**

```javascript

yes or no alert 예 아니오 알림
function next(){
 if(confirm("삭제할래요?"))
 {
  alert('삭제o');
 }
 else
 {
 alert('삭제x');
 }
}

// 리액트는 window.confirm

```
