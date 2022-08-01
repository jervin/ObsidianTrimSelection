import { App, Editor, MarkdownView, Modal, Notice, Plugin, PluginSettingTab, Setting } from 'obsidian';

export default class MyPlugin extends Plugin {

	async onload() {
		this.addCommand({
			id: 'trim-selection',
			name: 'Trim Selection',
			editorCallback: editor => {
				var selection = editor.getSelection();
				console.log(editor.getSelection());

				// selection = selection.replace(/^\s+(?=(\n|\r|$))/gm, "");
				selection = selection.replace(/^(?:[\t ]*(?:\r?\n|\r))+/gm, "");
				console.log(selection);
				editor.replaceSelection(selection);
			}
		});
	}

	onunload() {

	}
}
