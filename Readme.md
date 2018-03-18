# StarterKit

## 編集ファイル一覧
- assets/index.html 初期フォーマットファイル
- assets/sass/style.scss Scssファイル

## 環境ファイル一覧
- .gitignore gitの除外ファイル
- gulpfile.js タスクランナー
- Readme.md GitHub使用説明ファイル
- sftp-config.json SublimeText用サーバアップロードファイル

## Node&Git環境設定

- コンソールを起動

- デスクトップに移動
```shell
$ cd ~/Desktop
```

- プロジェクトフォルダをクローン(初回のみ)
```git
$ git clone git@github.com:arihito/starterKit.git (gcl git@...)
```

- プロジェクトフォルダ内に移動
```shell
$ cd starterKit
```

- npmモジュールを追加(初回のみ)
```npm
$ npm i
```

- gulpビルド実行
```npm
$ gulp
```

## 制作進行中

- コンソールに別タブを作成(gulp監視とは別のgit操作用)
```shell
$ ctrl + t
```

- プロジェクトフォルダ内に移動
```shell
$ cd ~/Desktop/starterKit
```

- 全てをアド
```git
$ git add . (ga.)
```

- コミット
```git
$ git commit -m "first commit" (gcm "...")
```

- githubのリモートリポジトリを作成(初回のみ)

右上のアイコンから「New Repository」

※任意のリポジトリ名"projectName"

- ローカルリポジトリと連携(初回のみ)
```git
$ git remote add origin git@... (grao git@...)
```

- コミットをプッシュ
```git
$ git push -u origin master (gpuom)
```

## gulpfile.jsのサーバーアップ編集

- host: "ftp.XXX.XXXX.com", //FTPホストアドレス
- user: "zdXXXX", //FTPユーザー名
- pass: "", //FTPパスワード
- port: 21, //ポート番号
- remotePath: "/WEB_ROOT/zdXXXX.XXX.XXXXX.com/HtDocs/" //サーバ上のアップロードパス

- htmlフォルダ内のデータをアップロード
```npm
$ gulp upload
```
