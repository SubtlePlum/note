# Tree (트리)의 종류

## Binary Tree (이진 트리)

이진 트리는 자식 노드의 수가 최대 2개인 트리 자료구조로, 각 노드는 최대 두 개의 자식 노드를 가지며, 왼쪽 자식 노드와 오른쪽 자식 노드를 구분한다. 이진 트리는 재귀적으로 정의되며, 모든 서브트리도 이진 트리여야 한다.

이진 트리는 검색(Binary Search)이나 정렬(Sorting) 문제에서 유용하게 사용된다..

## Binary Search Tree (이진 탐색 트리)

이진 탐색 트리는 이진 트리의 일종으로, 모든 노드의 왼쪽 서브트리의 값은 해당 노드의 값보다 작고, 모든 오른쪽 서브트리의 값은 해당 노드의 값보다 큰 성질을 갖고 있다. 이진 탐색 트리는 검색 연산을 빠르게 수행할 수 있으며, 정렬된 상태를 유지하는 것이 가능하다.

## Segment Tree (세그먼트 트리)

세그먼트 트리(Segment Tree)는 구간 쿼리를 빠르게 처리하기 위해 사용되는 자료구조이다. 주로 배열 형태로 데이터가 주어졌을 때, 특정 구간의 합, 최소값, 최대값 등을 효율적으로 구하는 데 사용된다.

세그먼트 트리는 트리의 각 노드가 특정 구간의 합, 최소값, 최대값 등을 저장하도록 구성된다. 트리의 루트는 전체 구간의 합, 최소값, 최대값 등을 저장하며, 각 노드는 구간을 반씩 나누어 자식 노드에 저장된 값을 합치면서 구간의 합, 최소값, 최대값 등을 계산한다. 이러한 방식으로 세그먼트 트리를 구성하면 구간 쿼리를 빠르게 처리할 수 있다. 세그먼트 트리는 구간 트리(Interval Tree) 라고도 불리며, 구간 트리와 유사한 기능을 제공한다.

## Balacned Binary Tree (균형 이진 트리)

균형 이진 트리는 높이 차이가 크지 않도록 노드를 삽입하는 방식으로 트리를 구성하여 검색 연산을 빠르게 수행할 수 있도록 한다.
AVL tree나 Red-Black Tree는 균형 이진 트리의 일종으로 특정한 규칙에 따라 노드를 삽입, 삭제하며 트리의 높이를 일정하게 유지하는 방식으로 동작한다. 이러한 균형 이진 트리들은 검색, 삽입, 삭제 등의 연산에 대해 보다 일관된 성능을 제공한다.

## AVL Tree (AVL 트리)

AVL 트리는 각 노드의 높이 차이가 1 이하인 균형 이진 트리로, AVL 트리에서는 노드를 삽입, 삭제할 때, 해당 노드를 포함하는 서브트리의 높이 차이가 2 이상이 되면 회전(Rotation) 연산을 수행하여 높이 차이를 조정함. 회전 연산에는 단순 회전(Simple Rotation)과 이중 회전(Double Rotation) 두 가지 종류가 있다.
검색 연산의 속도가 빠르며, 삽입, 삭제 연산의 경우 회전 연산의 빈도가 높아 비교적 느리다.

## Red-Black Tree (레드 블랙 트리)

레드 블랙 트리는 노드를 삽입, 삭제할 때, 해당 노드를 기준으로 위쪽으로 올라가며 색을 변경하고 회전 연산을 수행하여 균형을 조정한다. 각 노드는 빨간색(Red) 또는 검은색(Black) 중 하나의 색상을 가짐. 노드 삽입, 삭제 후에도 트리의 높이가 최대 2배까지 커질 수 있으며, 이를 방지하기 위해 균형을 유지하는 규칙을 정해 놓는다.

검색, 삽입, 삭제 연산이 모두 빠르며, 구현이 간단함.
