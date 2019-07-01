# React Hooks 入門 - HooksとReduxを組み合わせて最新のフロントエンド状態管理手法を習得しよう！

本リポジトリは、Udemyのプログラミングコース「React Hooks 入門 - HooksとReduxを組み合わせて最新のフロントエンド状態管理手法を習得しよう！」

の動画の中で実際に書いたソースコードを管理するためのものです。

ソースコードは`git clone`コマンドで取得することが可能です。

```bash
$ git clone git@github.com:DiveIntoHacking/react-hooks-101.git

または

$ git clone https://github.com/DiveIntoHacking/react-hooks-101.git
```

以下の表は、各レクチャーの名称とそのレクチャーで作成されたブランチ名との対応を示す表です。

もし、レクチャーの中でうまく動作せず行き詰まったり、あるいは正常に動作はしたものの自分の書いたコードとの比較を行ったりするといった場合には、
各ブランチをcheckoutして参考にしてみてください。
全てレクチャーの収録時のソースコードと全く同じものをcommitしています。

|レクチャー名|ブランチ名|
|---|---|
|create-react-appでReactアプリケーションの雛形を作成しよう|init, template|
|はじめてのReact Hooks ということで useState でファンクションコンポーネントに状態を持たせよう|hello-react-hooks|
|複数の状態を管理しよう|multiple-states|
|複数の状態を1つのオブジェクトに統合しよう|object-and-useState|
|useEffect でコールバックを実装しよう|useEffect|
|状態遷移とは何かを改めて考えてみよう|N/A|
|Bootstrapを導入しよう|install-bootstrap|
|イベントの状態遷移を管理するreducerを作成しよう|create-reducer-for-events|
|useReducerでreducerを実際に使ってみよう|use-reducer-with-useReducer|
|イベント一覧に作成したイベントを表示させよう|display-events|
|イベント一括削除処理を実装しよう|delete-all-events|
|肥大化したコンポーネントを役割毎に分割しよう|separate-components|
|アクションのタイプは定数がお好き|types-of-action-like-constants|
|Prop Drilling問題とそれを解消するための手段の紹介|N/A|
|はじめてのReact Context|create-react-context|
|Providerのセットアップをしよう|setup-context-provider|
|Prop Drilling問題をやっつけよう|solve-prop-drilling-issue|
|より複雑な状態を管理しよう|N/A|
|やっぱりreduxをインストールしよう|install-redux|
|イベント用のreducerのリファクタリングをしよう|refactor-events-reducer|
|操作ログ用のreducerを作成しよう|create-operationLogs-reducer|
|正規化された時間を作ろう|iso8601|
|操作ログを保存しよう|create-operationLogs|
|全ての操作ログを削除しよう|delete-all-operationLogs|
|イベント削除時の操作ログも残そう|create-operationLog-in-case-of-event-deletion|
|操作ログ一覧を表示させよう|display-all-operationLogs|
|locaStorageの各種メソッドのおさらいをしよう|N/A|
|localStorageで状態の永続化をしよう|save-state-with-localStorage|

```javascript
/* N/Aの箇所では特別なブランチは存在しません。 */
```

## 注意事項

本コースで導入するnpm パッケージは、全てバージョン(動画収録時の最新版)を特定してインストールしています。

動画の内容と同じ動作を保証するためには同じバージョンのパッケージをインストールする必要がありますが、動画の中でもバージョンを指定したインストールの方法を紹介していますので、その通りに実行してみてください。

例えば、 `bootstrap` をインストールする場合は、以下の方法を推奨します。


```bash
$ yarn add bootstrap@4.3.1
```

以下のようにバージョンを未指定でインストールした場合は、最新のバージョンのパッケージがインストールされることになり、動画の中で紹介している挙動やUIとは異なるものになる可能性がありますので、非推奨としています。

もし以下のようにされる場合は自己責任で行なってください。

```bash
$ yarn add bootstrap
```

## FAQ

gitやGitHubに慣れていない方から寄せられる質問をまとめています。

### このリポジトリの変更などを知る方法はありますか？

こちらのリポジトリのトップページの画面上部にある

starボタンをクリックすると、GitHubのトップページのタイムラインにそのリポジトリを追跡することができますのでやってみてください。

### 自分のアカウントにリポジトリをぶら下げたいのですが。。。

forkすることで可能です。画面右上の`Fork`ボタンをクリックしてください。

### リポジトリを新規にcloneを行い、該当のブランチにcheckoutする方法は？

`git clone`後に、例えば、`modules`というブランチをcheckoutしたい場合を例にすると、以下のようにコマンドを実行することになります。

```bash
$ git clone git@github.com:DiveIntoHacking/react-hooks-101.git
$ cd react-hooks-101
$ git checkout -t origin/solve-prop-drilling-issue
$ yarn install
$ yarn start
```

あるいは、下記のコマンドだとbranch名を指定することでワンラインで実行可能です。


```bash
$ git clone --branch solve-prop-drilling-issue git@github.com:DiveIntoHacking/react-hooks-101.git
$ cd react-hooks-101
$ yarn install
$ yarn start
```

### あるブランチで実装した内容を知るには？

まず、ブランチ名を確認するために`git branch -a`を実行します。

本コースでは、1 branch につき、1 commitを行っていますので、以下の例の様に`git show`コマンドで当該ブランチの直近のcommitを表示することで、そのブランチで実装した全ての内容を知ることができます。

```bash
$ git show origin/display-events
```

まずレクチャーを進める前に全貌を知っておきたい！という方にはおすすめです。

### プログラムの誤りを見つけてたがその連絡の手段は？

本プログラムはUdemy教育用のものですので、受講生からのリクエストを最優先していますので、Udemyのコースに設置されている公式のQ&Aにてご指摘の内容をご報告頂ければ有り難いです。
(本プログラムはオープンソースプロジェクトではありませんのでGitHubのIssuesでお知らせ頂いても対応出来ない場合がありますのでご了承ください。)

その他、不明な点が有りましたらUdemyのQ&Aにてご質問ください。
