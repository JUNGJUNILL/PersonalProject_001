import React, {useState, useMemo, useEffect,useCallback,useRef ,current} from 'react'

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
  
    //useEffect는 기본적으로 렌더링 되고난 직후마다 실행되며,
    //두번째 파라미터 배열에 무엇을 넣는냐에 따라 실행되는 조건이 달라집니다. 
    useEffect(() => {
        console.log('렌더링이 완료되었습니다!');
        console.log({
          name,
          nickname
        });

      },[name]);
         //▲첫 마운트, name state만 변경 될 때 실행된다.
         

    //만약 컴포넌트에 언마운트되기 전이나, 업데이트 되기 직전에 어떤 작업을 수행하고 싶다면 
    //useEffect에서 뒷정리 함수를 반환해 주어야 합니다.
    //뒷정리 함수는 바뀌기 직전 값을 반환해 준다.
    // useEffect(() => {
    //     console.log('effect');
    //     console.log(name);
    //     return () => {
    //       console.log('cleanup');
    //       console.log(name);
    //     };
    //   });


    const onChangeName = e => {
      setName(e.target.value);
    };
  
    const onChangeNickname = e => {
      setNickname(e.target.value);
    };


  
    return (
      <div>
        <div>
          <input value={name} onChange={onChangeName} />
          <input value={nickname} onChange={onChangeNickname} />
        </div>
        <div>
          <div>
            <b>이름:</b> {name}
          </div>
          <div>
            <b>닉네임: </b>
            {nickname}
          </div>
        </div>
      </div>
    );
  };

const Test3 =()=>{


    const [visible, setVisible] = useState(false);

    return (

        <div>
        <Info />
      </div>

    )

}


export default Test3;