# CLAUDE.md

このファイルはClaude Code（claude.ai/code）がこのリポジトリで作業する際のガイドです。

## 概要

AWSとネットワーク技術の基礎をインタラクティブに学べる学習Webアプリ。
ビルドツール・依存パッケージなし。GitHub Pages で静的ファイルとして動作する。

## ファイル構成

| ファイル | 役割 | 編集頻度 |
|---------|------|---------|
| `index.html` | HTMLシェル（タブ・静的コンテンツ・スクリプト参照） | 低 |
| `style.css` | 全CSS（デザイントークン・コンポーネント）| 低 |
| `data.js` | 教育コンテンツデータ定数（DECKS・QUIZ・NET_READ等）| **高** |
| `app.js` | アプリロジック（タブ切替・フラッシュカード・クイズ等）| 低 |

`data.js` だけ編集すれば問題・コンテンツの追加・修正ができる。

### スクリプト読み込み順（`index.html` 末尾）

```html
<script src="data.js"></script>   <!-- 先：定数・データを定義 -->
<script src="app.js"></script>    <!-- 後：データを参照するロジック -->
```

`type="module"` は**使用しない**。HTML 内の `onclick="..."` ハンドラがグローバルスコープの関数を参照するため。

### ファイル内部の構成

```
index.html
  <head>
    <link rel="stylesheet" href="style.css">
  </head>
  <body>
    <!-- TOOLTIP -->   ← ホバー時に表示されるツールチップDOM
    <!-- TERM POPUP --> ← 専門用語タップ時のポップアップDOM
    <!-- HEADER -->    ← タブナビゲーション
    <main>             ← 各セクション（タブコンテンツ）
    <script src="data.js"></script>
    <script src="app.js"></script>
  </body>

data.js
  /* DATA */  ← コンテンツデータ定数（編集はここだけ）
  const DECKS, OSI, TIPS, QUIZ, NET_READ, AWS_READ, DEV_READ, TERMS

app.js
  /* STATE */  ← 状態変数（xp, curDeck, qIdx等）
  /* TABS */   ← UIロジック（タブ切替・フラッシュカード・クイズ等）
  /* TERM POPUP LOGIC */  ← 専門用語ポップアップ制御
```

> ⚠️ **コンテンツの追加・修正は `data.js` だけを編集する。**
> `style.css` や `app.js` は通常触らない。

---

## タブ構成

`tab(id)` 関数で切り替え。`id` はセクションIDの `sec-` を除いた部分。

| tab引数 | タブ名 | セクションID |
|---------|--------|-------------|
| `home` | ホーム | `sec-home` |
| `netread` | ネットワーク入門 | `sec-netread` |
| `devread` | ネットワーク機器 | `sec-devread` |
| `awsread` | AWS入門 | `sec-awsread` |
| `cards` | フラッシュカード | `sec-cards` |
| `diagram` | 構成図 | `sec-diagram` |
| `quiz` | クイズ | `sec-quiz` |

---

## データ構造（`data.js`）

### `DECKS`（フラッシュカードデッキ）

```js
const DECKS = {
  デッキキー: {
    title: string,   // デッキ名
    badge: 'g'|'o'|'p',  // バッジ色（緑・橙・紫）
    icon: string,    // 絵文字アイコン
    desc: string,    // 説明文
    cards: [
      { q: string,  // 問題文（表面）
        a: string   // 答え（裏面・HTML可） }
    ]
  }
}
```

**現在のデッキ一覧（計48枚）：**

| デッキキー | タイトル | 枚数 |
|-----------|---------|-----|
| `osi` | OSIモデル 7層 | 8枚 |
| `tcpip` | TCP/IP & プロトコル | 8枚 |
| `netsec` | ネットワークセキュリティ | 8枚 |
| `compute` | コンピューティング（EC2・Lambda・ECS） | 6枚 |
| `storage` | ストレージ & DB（S3・EBS・RDS・DynamoDB） | 6枚 |
| `netaws` | AWSネットワーキング（VPC・SG・Route53・CloudFront） | 6枚 |
| `secaws` | セキュリティ & IAM（IAM・KMS・WAF・GuardDuty） | 6枚 |

### `QUIZ`（確認クイズ・全20問）

```js
const QUIZ = [
  {
    q: string,      // 問題文
    opts: string[], // 選択肢（4択）
    ans: number,    // 正解インデックス（0始まり）
    exp: string     // 解説（HTML可）
  }
]
```

> ⚠️ `DECKS` とは異なり、**`ans` フィールドに正解インデックスを明示的に記載する必要がある。**

### `NET_READ`（ネットワーク入門の読み物コンテンツ）

```js
const NET_READ = [
  {
    id: string,     // スクロールアンカーID（例: 'nr-1'）
    icon: string,   // 絵文字
    title: string,  // セクションタイトル
    lead: string,   // リード文
    html: string    // 本文HTML（テンプレートリテラル）
  }
]
```

### `DEV_READ`（ネットワーク機器ガイド）・`AWS_READ`（AWS入門ガイド）

`NET_READ` と同じ構造。IDプレフィックスが異なる（`dr-*` / `ar-*`）。

### `OSI`（OSIモデル構成図データ）

```js
const OSI = [
  {
    num: number,    // 層番号（7〜1）
    name: string,   // 層名
    color: string,  // 表示色（CSSカラー）
    eg: string,     // 具体例（プロトコル・機器）
    detail: string  // クリック時の説明文
  }
]
```

### `TIPS`（VPC構成図のホバーツールチップ）

```js
const TIPS = {
  チップキー: { t: string, b: string }  // t=タイトル, b=本文
}
```

---

## HTMLコンポーネントの使い方（読み物コンテンツ内）

読み物（`NET_READ` / `DEV_READ` / `AWS_READ`）の `html` フィールドでは以下のクラスが使用可能：

| クラス | 用途 |
|--------|------|
| `<p class="a-p">` | 本文段落 |
| `<div class="analogy">` | 例え話ブロック（橙）|
| `<div class="tip">` | ポイント・注意ブロック（青）|
| `<table class="tbl">` | 比較表 |
| `<div class="steps"> / <div class="step">` | 手順ステップ |
| `<div class="a-h3">` | 小見出し |
| `<span class="kw">` | コードキーワード（モノスペース）|
| `<span class="term" data-term="キー">` | 専門用語（タップでポップアップ）|
| `<div class="tags"> / <span class="tag tag-b">` | タグバッジ |

---

## CSS設計（`style.css`）

`:root` のCSS変数でテーマを一元管理：

```css
/* backgrounds */
--c-bg / --c-surface / --c-surface2 / --c-surface3

/* brand / accent */
--c-accent（青）/ --c-orange（橙）/ --c-purple（紫）/ --c-green（緑）/ --c-red（赤）

/* text */
--c-text / --c-text-sub / --c-text-muted

/* status */
--c-correct（正解色）/ --c-wrong（不正解色）
```

フォント：`Noto Sans JP`（本文）・`Space Mono`（コード・数字）

---

## コンテンツ修正ガイド

### フラッシュカードを追加する

`data.js` の `DECKS` の該当デッキの `cards` 配列に追記するだけ：

```js
{ q: '問題文', a: '答え（<strong>強調</strong>などHTML可）' }
```

### クイズを追加する

`data.js` の `QUIZ` 配列に追記：

```js
{ q: '問題文', opts: ['選択肢A','選択肢B','選択肢C','選択肢D'], ans: 0, exp: '解説文' }
```
`ans` は 0 始まりのインデックス（上記なら選択肢Aが正解）。

### 読み物コンテンツを追加する

対象の定数（`NET_READ` / `DEV_READ` / `AWS_READ`）の配列に追記し、
対応するタブの目次（`index.html` の `<nav class="toc">` ブロック内）にリンクを追加する。

---

## 品質チェック観点

コンテンツを追加・修正するときは以下を確認：

- クイズの `ans` インデックスが正解選択肢と一致しているか
- `DECKS` のカードの答えに正確な技術情報が含まれているか
- 読み物の例え話が初心者にとって分かりやすいか（専門用語の多用を避ける）
- `<span class="term" data-term="キー">` で参照しているキーが `TERMS` 定数に存在するか

---

## デプロイ

```
git add index.html style.css data.js app.js
git commit -m "..."
git push origin main
```

このアプリはGitHub Pages等の静的ホスティングでそのまま公開可能。
4ファイルをそのままアップロードするだけで動作する。

---

## コミュニケーション

- ユーザーへの確認・質問・コマンド実行前の確認はすべて**日本語**で行う
