import * as vs from 'vscode';

export class StackDocumentContentProvider implements vs.TextDocumentContentProvider {
    async   provideTextDocumentContent(uri: vs.Uri, token: vs.CancellationToken): Promise<string> {
        return `<html><body>

        <div>
            <label>Stack</label>
            <textarea>1
2
3
4</textarea>
        </div>

        <input type="file" value="Choose me">

</body></html>`;
    }
}