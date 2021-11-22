# メモ
チュートリアルの参考ドキュメント(公式docs)

[https://sdk.dfinity.org/docs/developers-guide/tutorials/custom-frontend.html](https://sdk.dfinity.org/docs/developers-guide/tutorials/custom-frontend.html)

src/custom_greeting/main.mo

```main.mo
actor {
    public func greet(name : Text) : async Text {
        return "Hello, " # name # "!";
    };
};
```

バックエンドの部分

src/custom_greeting_assets/src/index.jsx

```jsx
import * as React from "react";
import { render } from "react-dom";
import { custom_greeting } from "../../declarations/custom_greeting";

const MyHello = () => {
  const [name, setName] = React.useState('');
  const [message, setMessage] = React.useState('');

  async function doGreet() {
    const greeting = await custom_greeting.greet(name);
    setMessage(greeting);
  }

  return (
    <div style={{ "fontFamily": "sans-serif" }}>
      <div style={{ "fontSize": "30px" }}>
        <p>Greetings, from DFINITY!</p>
        <p>
          {" "}
          Type your message in the Name input field, then click{" "}
          <b> Get Greeting</b> to display the result.
        </p>
      </div>
      <div style={{ margin: "30px" }}>
        <input
          id="name"
          placeholder="Type text here"
          value={name}
          onChange={(ev) => setName(ev.target.value)}
        ></input>
        <button onClick={doGreet}>Get Greeting!</button>
      </div>
      <div>
        Greeting is: "
        <span style={{ color: "green" }}>{message}</span>"
      </div>
    </div>
  );
};

render(<MyHello />, document.getElementById("app"));
```

declarationsのフォルダは`dfx deploy`すると自動で生成されるっぽい
declatarionsから関数をインポートできる