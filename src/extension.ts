'use strict';
import * as vs from 'vscode';
import { StackDocumentContentProvider } from './stack-document-provider';

const STACK_NAVIGATOR_SCHEMA = 'stack-navigator';

export function activate(context: vs.ExtensionContext) {
    const provider = new StackDocumentContentProvider();
    const contentProvider = vs.workspace.registerTextDocumentContentProvider(STACK_NAVIGATOR_SCHEMA, provider);

    const command = vs.commands.registerCommand('stack-navigator.open', () => {
        const previewUri = vs.Uri.parse(STACK_NAVIGATOR_SCHEMA + '://open?q=' + new Date().getTime().toString());
        return vs.commands.executeCommand('vscode.previewHtml', previewUri, vs.ViewColumn.One, 'Stack Navigator').then(success => {

            //

        }, err => {
            vs.window.showErrorMessage(err);
        });
    });

    context.subscriptions.push(contentProvider, command);
}

export function deactivate() {
    // noop
}