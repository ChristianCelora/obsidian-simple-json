# Simple JSON plugin

Simple JSON is a plugin for the Obsidian text editor.
It allows basic operation with JSON format to enable fast formatting of a JSON text.

## How to install

Until this plugin is not published in the Obsidian ecosystem you can install it using How to develop instructions

## How to develop

1. Clone the repository to .obsidian/plugins/obsidian-simple-json
2. npm i
3. npm run dev
4. Launch Obsidian
5. Enable plugin in the Obsidian settings under "Community plugins" > "Installed plugins" > "Simple JSON"

## Commands

### Beautify JSON

Beautify a JSON text. Uses a two space indentation

To use it, search in the obsidian command palette:
```
Simple JSON: Beautify JSON
```

### Minify JSON

Minifies a JSON text.

To use it, search in the obsidian command palette:
```
Simple JSON: Minify JSON
```

### Stringify JSON

Stringify a JSON text. The difference with minify JSON is that stringify will encapsulate the result in a double-quoted string and escape te quotes inside the json.

To use it, search in the obsidian command palette:
```
Simple JSON: Stringify JSON
```