# React 다시 학습하기

## 프로젝트 소개

이 프로젝트는 실무에서 사용해온 React를 체계적으로 복습하고 정리하기 위한 간단한 학습 프로젝트입니다. 실무에서는 주로 필요한 기능 위주로 React를 익혀왔기 때문에, 이번 기회에 기초부터 다시 학습하며 그동안 대충 알고 넘어갔거나 정확히 이해하지 못했던 개념들을 명확하게 정리하고자 했습니다.

## 개발 환경

- JavaScript
- React 18.2.0
- Vite 5.2.0
- use-immer 0.11.0

## 학습 목표

- React의 핵심 개념(컴포넌트, 상태, 렌더링 등)을 직접 코드로 구현하며 깊이 있게 이해하기
- 외부 라이브러리 사용을 최소화하고, React의 동작 원리를 Vanilla 수준에서 학습하기
- 실무에서 익혔던 지식을 한번 더 복습하고, 부족했던 개념을 보완하기

## 학습 내용

### 1. React 기초 개념 학습

- Props를 통한 컴포넌트 간 데이터 전달
- 조건부 렌더링 및 리스트 렌더링
- 이벤트 핸들링과 이벤트 전파 원리
- 컴포넌트의 상태(State)와 메모리 관리
- React의 렌더링 프로세스 및 Virtual DOM 이해
- 순수 컴포넌트(Pure Component)와 StrictMode 활용

### 2. 상태 관리와 고급 개념

- 상태의 스냅샷과 읽기 전용 특성
- 상태 변경의 일괄 처리(State Batching)
- 객체 상태 관리
  - 얕은 복사 vs 깊은 복사
  - 중첩 객체 업데이트 방법
  - use-immer를 활용한 불변성 유지
- 배열 상태 업데이트 (Array API 실습)
- useReducer 및 useImmerReducer를 활용한 복잡한 상태 관리

### 3. Hooks와 성능 최적화

- 주요 Hooks 학습
  - useEffect로 사이드 이펙트 제어
  - useRef를 통한 DOM 접근 및 값 유지
- 성능 최적화 전략
  - useMemo를 통한 계산 결과 캐싱
  - useCallback으로 함수 재생성 방지
  - React.memo로 컴포넌트 리렌더링 최적화

## 프로젝트 설정

```bash
# 프로젝트 의존성 설치
npm install

# 개발 서버 실행
npm run dev
```

## 앞으로의 계획

- TailwindCSS & shadcn/ui 학습
- Next.js 학습
- FE 테스팅 라이브러리 학습 (React Testing Library, Vitest 등)
