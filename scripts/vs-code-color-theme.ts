class VSCodeColorTheme {
  name = 'Yapp Theme v2'
  type = 'dark'
	colors = {
		"activityBar.background": "color01",
		"activityBarBadge.background": "color0970",
		"activityBarBadge.foreground": "color07",
		"activityBar.foreground": "color07",
		"activityBar.inactiveForeground": "color05",
		"badge.background": "color0970",
		"badge.foreground": "color07",
		"button.background": "color02",
		"debugExceptionWidget.background": "color00",
		"debugExceptionWidget.border": "color02",
		"debugToolBar.background": "color00",
		"dropdown.background": "color00",
		"dropdown.border": "color04",
		"editor.background": "color00",
		"editor.lineHighlightBackground": "color01",
		"editor.selectionBackground": "color03",
		"editor.selectionHighlightBackground": "color0370",
		"editor.wordHighlightBackground": "color01aa",
		"editor.wordHighlightStrongBackground": "color00aa",
		"editorCursor.foreground": "color04",
		"editorGroup.background": "color01",
		"editorGroup.border": "color00",
		"editorGroup.dropBackground": "color1444",
		"editorGroupHeader.tabsBackground": "color00",
		"editorGutter.background": "color01",
		"editorGutter.addedBackground": "color011",
		"editorGutter.modifiedBackground": "color10",
		"editorGutter.deletedBackground": "color08",
		"editorGutter.commentRangeForeground": "color05",
		"editorHoverWidget.background": "color02",
		"editorLineNumber.activeForeground": "color07",
		"editorLineNumber.foreground": "color05",
		"editorMarkerNavigationError.background": "color02",
		"editorMarkerNavigationWarning.background": "color02",
		"editorOverviewRuler.addedForeground": "color11",
		"editorOverviewRuler.modifiedForeground": "color10",
		"editorOverviewRuler.deletedForeground": "color08",
		"editorWhitespace.foreground": "color0580",
		"editorWidget.background": "color00",
		"errorForeground": "color08",
		"focusBorder": "color1499",
		"input.background": "color00",
		"input.foreground": "color04",
		"input.placeholderForeground": "color05aa",
		"inputOption.activeBorder": "color04",
		"inputValidation.errorBackground": "color1050",
		"inputValidation.errorBorder": "color1030",
		"inputValidation.infoBackground": "color01",
		"inputValidation.infoBorder": "color03",
		"inputValidation.warningBackground": "color1070",
		"inputValidation.warningBorder": "color1050",
		"list.activeSelectionBackground": "color04",
		"list.activeSelectionForeground": "color07",
		"list.dropBackground": "color03",
		"list.focusBackground": "color04",
		"list.highlightForeground": "color06",
		"list.hoverBackground": "color01aa",
		"list.inactiveSelectionBackground": "color00",
		"panel.border": "color13",
		"peekView.border": "color13",
		"peekViewEditor.background": "color01",
		"peekViewEditor.matchHighlightBackground": "color0240",
		"peekViewEditorGutter.background": "color01",
		"peekViewResult.background": "color00",
		"peekViewTitle.background": "color00",
		"pickerGroup.border": "color1499",
		"pickerGroup.foreground": "color1499",
		"progressBar.background": "color00",
		"selection.background": "color03",
		"sideBar.background": "color00",
		"sideBarTitle.foreground": "color05",
		"statusBar.background": "color00",
		"statusBar.debuggingBackground": "color00",
		"statusBar.foreground": "color05",
		"statusBar.noFolderBackground": "color00",
		"statusBarItem.prominentBackground": "color00",
		"statusBarItem.prominentHoverBackground": "color00",
		"tab.activeBackground": "color01",
		"tab.activeForeground": "color06",
		"tab.border": "color00",
		"tab.inactiveBackground": "color00",
		"tab.inactiveForeground": "color05",
		"terminal.ansiBlack": "color01",
		"terminal.ansiBlue": "color13",
		"terminal.ansiBrightBlack": "color01",
		"terminal.ansiBrightBlue": "color04",
		"terminal.ansiBrightCyan": "color05",
		"terminal.ansiBrightGreen": "color15",
		"terminal.ansiBrightMagenta": "color12",
		"terminal.ansiBrightRed": "color10",
		"terminal.ansiBrightWhite": "color06",
		"terminal.ansiBrightYellow": "color08",
		"terminal.ansiCyan": "color14",
		"terminal.ansiGreen": "color15",
		"terminal.ansiMagenta": "color11",
		"terminal.ansiRed": "color10",
		"terminal.ansiWhite": "color13",
		"terminal.ansiYellow": "color08",
		"terminal.foreground": "color06",
		"titleBar.activeBackground": "color01",
	}
	tokenColors = [
		{
			"settings": {
				"foreground": "#bbbbbbff",
				"background": "color00ff"
			}
		},
		{
			"scope": [
				"meta.embedded",
				"source.groovy.embedded"
			],
			"settings": {
				"background": "color00",
				"foreground": "color05"
			}
		},
		{
			"name": "Comment",
			"scope": "comment",
			"settings": {
				"fontStyle": "italic",
				"foreground": "color03"
			}
		},
		{
			"name": "String",
			"scope": "string",
			"settings": {
				"foreground": "color11"
			}
		},
		{
			"name": "Regexp",
			"scope": "string.regexp",
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"name": "Number",
			"scope": "constant.numeric",
			"settings": {
				"foreground": "color11"
			}
		},
		{
			"name": "Variable",
			"scope": [
				"variable.language",
				"variable.other"
			],
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Keyword",
			"scope": "keyword",
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"name": "Storage",
			"scope": "storage",
			"settings": {
				"fontStyle": "bold",
				"foreground": "color05"
			}
		},
		{
			"name": "Class name",
			"scope": [
				"entity.name.class",
				"entity.name.type"
			],
			"settings": {
				"fontStyle": "",
				"foreground": "color10"
			}
		},
		{
			"name": "Function name",
			"scope": "entity.name.function",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Variable start",
			"scope": "punctuation.definition.variable",
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"name": "Embedded code markers",
			"scope": [
				"punctuation.section.embedded.begin",
				"punctuation.section.embedded.end"
			],
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Built-in constant",
			"scope": [
				"constant.language",
				"meta.preprocessor"
			],
			"settings": {
				"foreground": "color08"
			}
		},
		{
			"name": "Support.construct",
			"scope": [
				"support.function.construct",
				"keyword.other.new"
			],
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"name": "User-defined constant",
			"scope": [
				"constant.character",
				"constant.other"
			],
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"name": "Inherited class",
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": "color12"
			}
		},
		{
			"name": "Function argument",
			"scope": "variable.parameter",
			"settings": {}
		},
		{
			"name": "Tag name",
			"scope": "entity.name.tag",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Tag start/end",
			"scope": "punctuation.definition.tag",
			"settings": {
				"foreground": "color03"
			}
		},
		{
			"name": "Tag attribute",
			"scope": "entity.other.attribute-name",
			"settings": {
				"foreground": "color05"
			}
		},
		{
			"name": "Library function",
			"scope": "support.function",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Continuation",
			"scope": "punctuation.separator.continuation",
			"settings": {
				"foreground": "color 10"
			}
		},
		{
			"name": "Library constant",
			"scope": "support.constant",
			"settings": {}
		},
		{
			"name": "Library class/type",
			"scope": [
				"support.type",
				"support.class"
			],
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"name": "Library Exception",
			"scope": "support.type.exception",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"name": "Library variable",
			"scope": "support.other.variable",
			"settings": {}
		},
		{
			"name": "Invalid",
			"scope": "invalid",
			"settings": {}
		},
		{
			"name": "diff: header",
			"scope": [
				"meta.diff",
				"meta.diff.header"
			],
			"settings": {
				"background": "color08",
				"fontStyle": "italic",
				"foreground": "color07"
			}
		},
		{
			"name": "diff: deleted",
			"scope": "markup.deleted",
			"settings": {
				"background": "color05",
				"fontStyle": "",
				"foreground": "color10"
			}
		},
		{
			"name": "diff: changed",
			"scope": "markup.changed",
			"settings": {
				"background": "color05",
				"fontStyle": "",
				"foreground": "color09"
			}
		},
		{
			"name": "diff: inserted",
			"scope": "markup.inserted",
			"settings": {
				"background": "color05",
				"foreground": "color15"
			}
		},
		{
			"name": "Markup Quote",
			"scope": "markup.quote",
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"name": "Markup Lists",
			"scope": "markup.list",
			"settings": {
				"foreground": "color08"
			}
		},
		{
			"name": "Markup Styling",
			"scope": [
				"markup.bold",
				"markup.italic"
			],
			"settings": {
				"foreground": "color11"
			}
		},
		{
			"name": "Markup Inline",
			"scope": "markup.inline.raw",
			"settings": {
				"fontStyle": "",
				"foreground": "color14"
			}
		},
		{
			"name": "Markup Headings",
			"scope": "markup.heading",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"name": "Markup Setext Header",
			"scope": "markup.heading.setext",
			"settings": {
				"fontStyle": "",
				"foreground": "color10"
			}
		},
		{
			"scope": "token.info-token",
			"settings": {
				"foreground": "#6796e6"
			}
		},
		{
			"scope": "token.warn-token",
			"settings": {
				"foreground": "cd9731"
			}
		},
		{
			"scope": "token.error-token",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "token.debug-token",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "variable.object.property",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "variable.parameter",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "support.type",
			"settings": {
				"fontStyle": ""
			}
		},
		{
			"scope": "storage.type.function",
			"settings": {
				"fontStyle": ""
			}
		},
		{
			"scope": "entity.other.inherited-class",
			"settings": {
				"foreground": "color08"
			}
		},
		{
			"scope": "storage.modifier",
			"settings": {
				"foreground": "color15ff",
				"fontStyle": ""
			}
		},
		{
			"scope": "storage.type",
			"settings": {
				"foreground": "color15ff",
				"fontStyle": ""
			}
		},
		{
			"scope": "keyword.control.import",
			"settings": {
				"foreground": "color11"
			}
		},
		{
			"scope": "storage.modifier.async",
			"settings": {
				"foreground": "color15ff",
				"fontStyle": ""
			}
		},
		{
			"scope": "meta.import",
			"settings": {
				"foreground": "color04"
			}
		},
		{
			"scope": "source.ts",
			"settings": {
				"foreground": "color04"
			}
		},
		{
			"scope": "meta.function-call",
			"settings": {
				"foreground": "color04"
			}
		},
		{
			"scope": "entity.name.type",
			"settings": {
				"foreground": "color08"
			}
		},
		{
			"scope": "entity.name.function",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "variable.other",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "storage.modifier.tsx",
			"settings": {
				"foreground": "color15"
			}
		},
		{
			"scope": "entity.name.type.class.python",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "support.type.python",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "source.python",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "keyword.control.import",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "keyword.control.from",
			"settings": {
				"foreground": "color09"
			}
		},
		{
			"scope": "constant.language.python",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "entity.name.function.python",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "punctuation.separator.dictionary.key-value.json, punctuation.separator.array.json, punctuation.separator.dictionary.pair.json",
			"settings": {
				"foreground": "color03"
			}
		},
		{
			"scope": "storage.type.ts",
			"settings": {
				"foreground": "color10"
			}
		},
		{
			"scope": "support.type.primitive",
			"settings": {
				"foreground": "color08"
			}
		},
		{
			"scope": "punctuation.definition.dictionary.begin.json, punctuation.definition.dictionary.end.json, punctuation.definition.array.begin.json, punctuation.definition.array.end.json",
			"settings": {
				"foreground": "color11"
			}
		}
	]

  constructor(name: string, type: string){
    this.name = name
    this.type = type
  }
}

export default VSCodeColorTheme