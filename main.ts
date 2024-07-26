import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

interface SimpleJsonSettings {
	settings: string;
}

const DEFAULT_SETTINGS: SimpleJsonSettings = {
	settings: 'default'
}

export default class SimpleJsonPlugin extends Plugin {
	settings: SimpleJsonSettings;

	async onload() {
		await this.loadSettings();

		this.addCommand({
			id: 'simple-json-beautify-json',
			name: 'Beautify JSON',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				try {
					const input = editor.getSelection()
					if (input) {
						let res = JSON.parse(input)
						res = JSON.stringify(res, null, 2)
						editor.replaceSelection(res);
					}
				} catch(err) {
					console.error('Error while parsing JSON:', err)
					new Notice('Cannot format JSON string');
				}
			}
		});

		this.addCommand({
			id: 'simple-json-minify-json',
			name: 'Minify JSON',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				try {
					const input = editor.getSelection()
					if (input) {
						let res = JSON.parse(input)
						res = JSON.stringify(res)
						editor.replaceSelection(res);
					}
				} catch(err) {
					console.error('Error while parsing JSON:', err)
					new Notice('Cannot format JSON string');
				}
			}
		});
		
		this.addCommand({
			id: 'simple-json-stringify-json',
			name: 'Stringify JSON',
			editorCallback: (editor: Editor, view: MarkdownView) => {
				try {
					let input = editor.getSelection()
					if (input) {
						input = this.removeSpacesAndNewLines(input)
						const res = JSON.stringify(input)
						editor.replaceSelection(res);
					}
				} catch(err) {
					console.error('Error while minify JSON:', err)
					new Notice('Cannot stringify JSON string');
				}
			}
		});
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	removeSpacesAndNewLines(str: string) {
		return str.replace(/([\r\n ]+)/g, '')
	}
}
