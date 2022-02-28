import { useEffect } from "react";
import "./index.less";

const PromiseDemo = () => {
  useEffect(() => {
    // initPromise1();
    initPromise2();
    initPromise3();
    initPromise4();
    initPromise5();
    initPromise6();
    initPromise7();
  }, []);

  const initPromise1 = () => {
    const promise1 = new Promise((resolve, reject) => {
      console.log("promise1");
    });
    console.log("promise2", promise1);
  };

  const initPromise2 = () => {
    const promise = new Promise((resolve, reject) => {
      console.log(1);
      resolve("success");
      console.log(2);
    });
    promise.then(() => {
      console.log(3);
    });
    console.log(4);
  };

  const initPromise3 = () => {
    const promise = new Promise((resolve, reject) => {
      console.log(1);
      resolve("success");
      console.log(2);
    });
    promise.then(() => {
      console.log(3);
    });
    console.log(4);
  };

  const initPromise4 = () => {
    const promise1 = new Promise((resolve, reject) => {
      console.log("promise1");
      resolve("resolve1");
    });
    const promise2 = promise1.then((res) => {
      console.log(res);
    });
    console.log("1", promise1);
    console.log("2", promise2);
  };

  const initPromise5 = () => {
    const fn = () =>
      new Promise((resolve, reject) => {
        console.log(1);
        resolve("success");
      });
    console.log("start");
    fn().then((res) => {
      console.log(res);
    });
  };

  const initPromise6 = () => {
    console.log('start')
    setTimeout(() => {
      console.log('time')
    })
    Promise.resolve().then(() => {
      console.log('resolve')
    })
    console.log('end')
  };

  const initPromise7 = () => {
    const promise = new Promise((resolve, reject) => {
        console.log(1);
        setTimeout(() => {
          console.log("timerStart");
          resolve("success");
          console.log("timerEnd");
        }, 0);
        console.log(2);
      });
      promise.then((res) => {
        console.log(res);
      });
      console.log(4);
      
  };

  return (
    <div className="promise">
      <div className="question">
        {`const promise1 = new Promise((resolve, reject) => {
            console.log('promise1')
        })
        console.log('promise2', promise1);
        `}
        <div className="answer">答案：promise1 promise2</div>
      </div>

      <div className="question">
        {`const promise = new Promise((resolve, reject) => {
            console.log(1);
            resolve('success')
            console.log(2);
            });
            promise.then(() => {
            console.log(3);
            });
            console.log(4);
        `}
        <div className="answer">答案：1,2,4,3</div>
      </div>

      <div className="question">
        {`
          const promise = new Promise((resolve, reject) => {
            console.log(1);
            console.log(2);
          });
          promise.then(() => {
            console.log(3);
          });
          console.log(4);
        `}
        <div className="answer">
          答案：1,2,4（只不过在promise中并没有resolve或者reject
          因此promise.then并不会执行，它只有在被改变了状态之后才会执行。）
        </div>
      </div>

      <div className="question">
        {`
          const promise1 = new Promise((resolve, reject) => {
            console.log('promise1')
            resolve('resolve1')
          })
          const promise2 = promise1.then(res => {
            console.log(res)
          })
          console.log('1', promise1);
          console.log('2', promise2);
          
        `}
        <div className="answer">答案：promise1，1，2，resolve1</div>
      </div>

      <div className="question">
        {`
            const fn = () =>
            new Promise((resolve, reject) => {
                console.log(1);
                resolve("success");
            });
            console.log("start");
            fn().then(res => {
            console.log(res);
            });
        `}
        <div className="answer">答案：start, 1, success</div>
      </div>

      <div className="question">
        {`
            console.log('start')
            setTimeout(() => {
              console.log('time')
            })
            Promise.resolve().then(() => {
              console.log('resolve')
            })
            console.log('end')
            
        `}
        <div className="answer">答案：start, end, resolve, time</div>
      </div>

      <div className="question">
        {`
            const promise = new Promise((resolve, reject) => {
                console.log(1);
                setTimeout(() => {
                  console.log("timerStart");
                  resolve("success");
                  console.log("timerEnd");
                }, 0);
                console.log(2);
              });
              promise.then((res) => {
                console.log(res);
              });
              console.log(4);
        `}
        <div className="answer">答案：1, 2, 4, timerStart, timerEnd, success</div>
      </div>
    </div>
  );
};

export default PromiseDemo;
