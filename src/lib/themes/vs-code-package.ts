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
        "label": "yapp-theme",
        "uiTheme": "vs-dark",
        "path": "./themes/yapp-color-theme.json"
      }
    ]
  }
  constructor(name: string) {
    this.name = name
    this.displayName = name
  }
}

export default Package