// 렌더되는 Child 컴포넌트의 수 만큼 인라인 함수가 생성된다. 
const Child = ({onClick}) => {
  return <button onClick={onClick}>Click Me!</button>
};

const Root = () => {
  return (
    <div>
      <Child onClick={() => console.log('callback')}/> 
      <Child onClick={() => console.log('callback')}/> 
      <Child onClick={() => console.log('callback')}/> 
      <Child onClick={() => console.log('callback')}/> 
      <Child onClick={() => console.log('callback')}/> 
    </div>
  );
};

export default Root;