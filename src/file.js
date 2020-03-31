const vscode = require('vscode')

const getRelativePath = (path) => {
    return path.replace(`${vscode.workspace.rootPath}/`, '')
}

const RelativeFilePath = {
    fromFile(file) {
        if (file) {
            return getRelativePath(file.fsPath)
        }
    },
    fromActiveTextEditor() {
        if (vscode.window.activeTextEditor) {
            return getRelativePath(
                vscode.window.activeTextEditor.document.uri.fsPath
            )
        }
    },
}

module.exports = {
    RelativeFilePath,
}
