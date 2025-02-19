# Hash Table (해시 테이블)

해시 테이블은 데이터를 저장하는 자료구조 중 하나로, 키(Key)와 값(value)을 저장하는 구조이다.

각각의 키(Key)에 대해 유일한 값을 가지고 있어 검색, 삽입, 삭제 등의 작업을 빠르게 처리할 수 있다.

해시 테이블은 해시 함수(Hash Function)를 사용하여 각각의 키(Key)를 해시 값(Hash Value)으로 변환한 뒤, 해당 해시 값(Hash Value)에 해당하는 인덱스(Index)에 데이터를 저장한다. 따라서 해시 함수(Hash Function)는 각각의 키(Key)에 대해 고유한 해시 값(Hash Value)을 반환해야 한다.

해시 테이블은 검색, 삽입, 삭제 등의 작업이 O(1)의 시간 복잡도로 처리될 수 있다. 하지만 해시 함수(Hash Function)의 성능에 따라 충돌(Collision)이 발생할 수 있다.

> 충돌(Collision)이란 서로 다른 키(Key)들이 같은 해시 값(Hash Value)을 가지는 경우를 말한다.

이러한 충돌(Collision)을 해결하기 위해서는 충돌 해결(Collision Resolution) 기법을 사용해야하며, 대표적인 충돌 해결(Collision Resolution) 기법으로는 체이닝(Chaining)과 개방 주소법(Open Addressing)이 있다.
