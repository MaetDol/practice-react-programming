function Title({ title, color }) {
  return <p style={{ color }}>{title}</p>;
}

const element = <Title title="ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ" color="blue"/>;
console.log( element );

const consoleLogResult = {
    type: Title,
    props: {
        title: 'ㅇㅏㄴㄴㅕㅇㅎㅏㅅㅔㅇㅛ', 
        color: 'blue',
    },
    // ...
};