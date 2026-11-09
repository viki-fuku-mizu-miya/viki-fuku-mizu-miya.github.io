# 研究室ウェブサイト

研究室と所属メンバーの研究を紹介するウェブサイトです。

公開サイト: https://viki-fuku-mizu-miya.github.io/

## 初めて開発するとき

事前に次のソフトをインストールしてください。

- Git
- Node.js 22.12.0以上

ターミナルを開き、次のコマンドを上から1行ずつ実行します。

```sh
git clone https://github.com/viki-fuku-mizu-miya/viki-fuku-mizu-miya.github.io.git
cd viki-fuku-mizu-miya.github.io
git switch dev
npm ci
npm run dev
```

表示されたURL（通常は http://localhost:4321/ ）をブラウザで開くと、ウェブサイトを確認できます。

開発サーバーを止めるときは、ターミナルで `Ctrl` キーを押しながら `C` キーを押します。

> [!IMPORTANT]
> パッケージのインストールには `npm install` ではなく `npm ci` を使ってください。`package-lock.json` が意図せず更新されることを防げます。

## 2回目以降の開発

ターミナルでプロジェクトのフォルダを開き、次のコマンドを実行します。

```sh
git switch dev
git pull
npm ci
npm run dev
```

## ブランチについて

普段の作業は `dev` ブランチで行います。

`main` ブランチに変更を反映すると、GitHub Actionsによって公開サイトが自動更新されます。確認前の変更を `main` ブランチへ直接反映しないでください。

`dev` ブランチが見つからない場合やGitの操作が分からない場合は、管理者に確認してください。

## メンバー情報の編集

メンバー情報は `src/content/members/` フォルダ内のMarkdownファイルにあります。

変更後は、次のコマンドでエラーがないことを確認してください。

```sh
npm run build
```
