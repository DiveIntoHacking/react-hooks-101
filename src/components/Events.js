import React, { useState } from 'react'

const NUMBERS = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Events = () => {
  // 以下で状態を初期化します。
  // 配列を扱う状態の初期化なので、最初は空ということで、空配列が妥当でしょう。
  // 状態の名前をuserChoice、その状態を変更する関数をsetUserChoiceとしました。
  const [userChoice, setUserChoice] = useState([])

  // 以下は0から9までの数値が書かれたボタンをクリックしたときに発火するイベントハンドラです。
  // eventからボタンに紐づく数値を拾います。
  // 以下ではinnerHTMLで表示されている文字列を拾っているので、 それを数値に変更するためにparseIntを行っています。
  // そして、useChoiceに要素を足した結果をsetUserChoiceにより状態の更新を行っています。
  const choose = event => {
    const value = parseInt(event.currentTarget.innerHTML)
    setUserChoice(currentUserChoice => {
      return currentUserChoice.concat([value])
    })
  }

  return (
    <>
      <h2>以下のいずれかをクリックして選択してください。</h2>
      {
        NUMBERS.map((number, index) => {
          return <button className="btn btn-primary" key={index} onClick={choose}>
            {number}
          </button>
        })
      }

      <h2>あなたは現在以下を選択しています。</h2>
      {
        userChoice.map((number, index) => {
          return <button className="btn btn-primary" key={index}>
            {number}
          </button>
        })
      }
    </>
  )
}

export default Events
