class Package {
    public name = ""
    public displayName = ""
    public description = ""
    public version = "0.0.1"
    public engines = {
        "vscode": "^1.41.0"
    }
    public categories = [
        "Themes"
    ]
    public contributes = {
        "themes": [
            {
                "label": "foobar",
                "uiTheme": "vs-dark",
                "path": "./themes/foobar-color-theme.json"
            }
        ]
    }
}

export default Package