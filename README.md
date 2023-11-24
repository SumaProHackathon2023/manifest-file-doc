# `manifest.json`について

## 必須プロパティ
- `manifest_version`：3を指定する。
- `name`: 拡張機能の名前を文字列で定義する。
- `version`:拡張機能のバージョンを示す文字列で定義する。
- `permissions`: ブラウザのどの機能にアクセスしていいかどうかの権限を指定する。 
- `action`:
    - `icons`:使用するアイコンを指定する。
    ```json
        "icons": {
            "16": "images/icon-16.png",
            "32": "images/icon-32.png",
            "48": "images/icon-48.png",
            "128": "images/icon-128.png"
        }
    ```
    - `default_title`:拡張機能のアイコンの上にカーソルを置くと出てくる文字
    - `badge`: 設定したアイコンの上にテキストを配置できるらしい。（いる？）
    - `popup`:アイコンをクリックしたときに出てくるポップアップを定義するよ。基本的には`default_popup`に設定したものが出てくるけど、このプロパティで指定したいなら、ディレクトリ内の相対パスを指定して動かすことになるよ。

- `commands`: ショートカットキーの定義をする
    ```json
        "commands":{
            "_execute_action":{
                "suggeted_key":{
                    "default": "Ctrl+Shift+H",
                    "mac": "MacCtrl+Shift+H"
                },
                "description": "Run Extension"
            }
        }
    ```