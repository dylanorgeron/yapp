
class VSCodeColorTheme {
    public name = "Yapp Theme"
    public type = "dark"
    public colors = {
        "editor.background": "color00",
        "editor.foreground": "color05",
        "activityBarBadge.background": "color01",
        "sideBarTitle.foreground": "color02"
    }
    public tokenColors = [
        {
            "name": "Comment",
            "scope": [
                "comment",
                "punctuation.definition.comment"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color03"
            }
        },
        {
            "name": "Variables",
            "scope": [
                "variable",
                "string constant.other.placeholder"
            ],
            "settings": {
                "foreground": "color05"
            }
        },
        {
            "name": "Colors",
            "scope": [
                "constant.other.color"
            ],
            "settings": {
                "foreground": "color07"
            }
        },
        {
            "name": "Invalid",
            "scope": [
                "invalid",
                "invalid.illegal"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "Keyword, Storage",
            "scope": [
                "keyword",
                "storage.type",
                "storage.modifier"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "Operator, Misc",
            "scope": [
                "keyword.control",
                "constant.other.color",
                "punctuation",
                "meta.tag",
                "punctuation.definition.tag",
                "punctuation.separator.inheritance.php",
                "punctuation.definition.tag.html",
                "punctuation.definition.tag.begin.html",
                "punctuation.definition.tag.end.html",
                "punctuation.section.embedded",
                "keyword.other.template",
                "keyword.other.substitution"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "Tag",
            "scope": [
                "entity.name.tag",
                "meta.tag.sgml",
                "markup.deleted.git_gutter"
            ],
            "settings": {
                "foreground": "color09"
            }
        },
        {
            "name": "Function, Special Method",
            "scope": [
                "entity.name.function",
                "meta.function-call",
                "variable.function",
                "support.function",
                "keyword.other.special-method"
            ],
            "settings": {
                "foreground": "color12"
            }
        },
        {
            "name": "Block Level Variables",
            "scope": [
                "meta.block variable.other"
            ],
            "settings": {
                "foreground": "color09"
            }
        },
        {
            "name": "Other Variable, String Link",
            "scope": [
                "support.other.variable",
                "string.other.link"
            ],
            "settings": {
                "foreground": "color09"
            }
        },
        {
            "name": "Number, Constant, Function Argument, Tag Attribute, Embedded",
            "scope": [
                "constant.numeric",
                "constant.language",
                "support.constant",
                "constant.character",
                "constant.escape",
                "variable.parameter",
                "keyword.other.unit",
                "keyword.other"
            ],
            "settings": {
                "foreground": "color13"
            }
        },
        {
            "name": "String, Symbols, Inherited Class, Markup Heading",
            "scope": [
                "string",
                "constant.other.symbol",
                "constant.other.key",
                "entity.other.inherited-class",
                "markup.heading",
                "markup.inserted.git_gutter",
                "meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js"
            ],
            "settings": {
                "foreground": "color11"
            }
        },
        {
            "name": "Class, Support",
            "scope": [
                "entity.name",
                "support.type",
                "support.class",
                "support.orther.namespace.use.php",
                "meta.use.php",
                "support.other.namespace.php",
                "markup.changed.git_gutter",
                "support.type.sys-types"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "Entity Types",
            "scope": [
                "support.type"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "CSS Class and Support",
            "scope": [
                "source.css support.type.property-name",
                "source.sass support.type.property-name",
                "source.scss support.type.property-name",
                "source.less support.type.property-name",
                "source.stylus support.type.property-name",
                "source.postcss support.type.property-name"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "Sub-methods",
            "scope": [
                "entity.name.module.js",
                "variable.import.parameter.js",
                "variable.other.class.js"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "Language methods",
            "scope": [
                "variable.language"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color08"
            }
        },
        {
            "name": "entity.name.method.js",
            "scope": [
                "entity.name.method.js"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color12"
            }
        },
        {
            "name": "meta.method.js",
            "scope": [
                "meta.class-method.js entity.name.function.js",
                "variable.function.constructor"
            ],
            "settings": {
                "foreground": "color12"
            }
        },
        {
            "name": "Attributes",
            "scope": [
                "entity.other.attribute-name"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "HTML Attributes",
            "scope": [
                "text.html.basic entity.other.attribute-name.html",
                "text.html.basic entity.other.attribute-name"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color10"
            }
        },
        {
            "name": "CSS Classes",
            "scope": [
                "entity.other.attribute-name.class"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "CSS ID's",
            "scope": [
                "source.sass keyword.control"
            ],
            "settings": {
                "foreground": "color12"
            }
        },
        {
            "name": "Inserted",
            "scope": [
                "markup.inserted"
            ],
            "settings": {
                "foreground": "color11"
            }
        },
        {
            "name": "Deleted",
            "scope": [
                "markup.deleted"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "Changed",
            "scope": [
                "markup.changed"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "Regular Expressions",
            "scope": [
                "string.regexp"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "Escape Characters",
            "scope": [
                "constant.character.escape"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "URL",
            "scope": [
                "*url*",
                "*link*",
                "*uri*"
            ],
            "settings": {
                "fontStyle": "underline"
            }
        },
        {
            "name": "Decorators",
            "scope": [
                "tag.decorator.js entity.name.tag.js",
                "tag.decorator.js punctuation.definition.tag.js"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color12"
            }
        },
        {
            "name": "ES7 Bind Operator",
            "scope": [
                "source.js constant.other.object.key.js string.unquoted.label.js"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color08"
            }
        },
        {
            "name": "JSON Key - Level 0",
            "scope": [
                "source.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "JSON Key - Level 1",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "JSON Key - Level 2",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color13"
            }
        },
        {
            "name": "JSON Key - Level 3",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "JSON Key - Level 4",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color08"
            }
        },
        {
            "name": "JSON Key - Level 5",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color12"
            }
        },
        {
            "name": "JSON Key - Level 6",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color09"
            }
        },
        {
            "name": "JSON Key - Level 7",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "JSON Key - Level 8",
            "scope": [
                "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
            ],
            "settings": {
                "foreground": "color11"
            }
        },
        {
            "name": "Markdown - Plain",
            "scope": [
                "text.html.markdown",
                "punctuation.definition.list_item.markdown"
            ],
            "settings": {
                "foreground": "color5"
            }
        },
        {
            "name": "Markdown - Markup Raw Inline",
            "scope": [
                "text.html.markdown markup.inline.raw.markdown"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "Markdown - Markup Raw Inline Punctuation",
            "scope": [
                "text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown"
            ],
            "settings": {
                "foreground": "color03"
            }
        },
        {
            "name": "Markdown - Heading",
            "scope": [
                "markdown.heading",
                "markup.heading | markup.heading entity.name",
                "markup.heading.markdown punctuation.definition.heading.markdown"
            ],
            "settings": {
                "foreground": "color11"
            }
        },
        {
            "name": "Markup - Italic",
            "scope": [
                "markup.italic"
            ],
            "settings": {
                "fontStyle": "italic",
                "foreground": "color09"
            }
        },
        {
            "name": "Markup - Bold",
            "scope": [
                "markup.bold",
                "markup.bold string"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "color09"
            }
        },
        {
            "name": "Markup - Bold-Italic",
            "scope": [
                "markup.bold markup.italic",
                "markup.italic markup.bold",
                "markup.quote markup.bold",
                "markup.bold markup.italic string",
                "markup.italic markup.bold string",
                "markup.quote markup.bold string"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "color09"
            }
        },
        {
            "name": "Markup - Underline",
            "scope": [
                "markup.underline"
            ],
            "settings": {
                "fontStyle": "underline",
                "foreground": "color13"
            }
        },
        {
            "name": "Markdown - Blockquote",
            "scope": [
                "markup.quote punctuation.definition.blockquote.markdown"
            ],
            "settings": {
                "foreground": "color03"
            }
        },
        {
            "name": "Markup - Quote",
            "scope": [
                "markup.quote"
            ],
            "settings": {
                "fontStyle": "italic",
            }
        },
        {
            "name": "Markdown - Link",
            "scope": [
                "string.other.link.title.markdown"
            ],
            "settings": {
                "foreground": "color12"
            }
        },
        {
            "name": "Markdown - Link Description",
            "scope": [
                "string.other.link.description.title.markdown"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "Markdown - Link Anchor",
            "scope": [
                "constant.other.reference.link.markdown"
            ],
            "settings": {
                "foreground": "color10"
            }
        },
        {
            "name": "Markup - Raw Block",
            "scope": [
                "markup.raw.block"
            ],
            "settings": {
                "foreground": "color14"
            }
        },
        {
            "name": "Markdown - Raw Block Fenced",
            "scope": [
                "markup.raw.block.fenced.markdown"
            ],
            "settings": {
                "foreground": "color03"
            }
        },
        {
            "name": "Markdown - Fenced Bode Block",
            "scope": [
                "punctuation.definition.fenced.markdown"
            ],
            "settings": {
                "foreground": "color03"
            }
        },
        {
            "name": "Markdown - Fenced Bode Block Variable",
            "scope": [
                "markup.raw.block.fenced.markdown",
                "variable.language.fenced.markdown",
                "punctuation.section.class.end"
            ],
            "settings": {
                "foreground": "color5"
            }
        },
        {
            "name": "Markdown - Fenced Language",
            "scope": [
                "variable.language.fenced.markdown"
            ],
            "settings": {
                "foreground": "color03"
            }
        },
        {
            "name": "Markdown - Separator",
            "scope": [
                "meta.separator"
            ],
            "settings": {
                "fontStyle": "bold",
                "foreground": "color03"
            }
        },
        {
            "name": "Markup - Table",
            "scope": [
                "markup.table"
            ],
            "settings": {
                "foreground": "color5"
            }
        }
    ]

    constructor(name: string, type: string, colors: string[]){
        
    }
}

export default VSCodeColorTheme