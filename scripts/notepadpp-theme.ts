import { saveAs } from 'file-saver'
import { Color } from './color-utils';
class NotepadPPTheme{
    public exportTheme(colors: Color[]){
        let XMLString = `
        <NotepadPlus>
        <LexerStyles>
            <LexerType name="c" desc="C" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPEWORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="cpp" desc="C++" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="java" desc="Java" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="cs" desc="C#" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="rc" desc="RC" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="tcl" desc="TCL" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="objc" desc="Objective-C" ext="">
                <WordsStyle name="DIRECTIVE" styleID="19" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="QUALIFIER" styleID="20" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="color14" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="sql" desc="SQL" ext="">
                <WordsStyle name="KEYWORD" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING2" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="Q OPERATOR" styleID="24" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="html" desc="HTML" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="9" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DOUBLESTRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SINGLESTRING" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAG" styleID="1" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGEND" styleID="11" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGUNKNOWN" styleID="2" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ATTRIBUTE" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ATTRIBUTEUNKNOWN" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SGMLDEFAULT" styleID="21" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CDATA" styleID="17" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VALUE" styleID="19" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ENTITY" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="php" desc="php" ext="">
                <WordsStyle name="QUESTION MARK" styleID="18" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="118" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="USER-DEFINED" styleID="16" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1">the_ID the_post have_posts wp_link_pages the_content</WordsStyle>
                <WordsStyle name="STRING" styleID="119" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING VARIABLE" styleID="126" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SIMPLESTRING" styleID="120" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="WORD" styleID="121" fgColor="37A3ED" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1">$_POST $_GET $_SESSION</WordsStyle>
                <WordsStyle name="NUMBER" styleID="122" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VARIABLE" styleID="123" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="124" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="125" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="127" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="javascript" desc="JavaScript" ext="">
                <WordsStyle name="DEFAULT" styleID="41" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="45" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="WORD" styleID="46" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORD" styleID="47" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1">alert appendChild arguments array blur checked childNodes className confirm dialogArguments event focus getElementById getElementsByTagName innerHTML keyCode length location null number parentNode push RegExp replace selectNodes selectSingleNode setAttribute split src srcElement test undefined value window</WordsStyle>
                <WordsStyle name="USER-DEFINED" styleID="16" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1">XmlUtil loadXmlString TopologyXmlTree NotificationArea loadXmlFile debug</WordsStyle>
                <WordsStyle name="STRINGRAW" styleID="20" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="" />
                <WordsStyle name="DOUBLESTRING" styleID="48" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SINGLESTRING" styleID="49" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SYMBOLS" styleID="50" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="51" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="52" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="42" fgColor="color036" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="43" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTDOC" styleID="44" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10">param @projectDescription projectDescription @param</WordsStyle>
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="asp" desc="asp" ext="asp">
                <WordsStyle name="DEFAULT" styleID="81" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="82" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="83" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="WORD" styleID="84" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1">import</WordsStyle>
                <WordsStyle name="STRING" styleID="85" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10">import</WordsStyle>
                <WordsStyle name="STRINGEOL" styleID="87" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="86" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ASPSYBOL" styleID="15" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SCRIPTTYPE" styleID="16" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="xml" desc="XML" ext="">
                <WordsStyle name="XMLSTART" styleID="12" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="XMLEND" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="9" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DOUBLESTRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SINGLESTRING" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAG" styleID="1" fgColor="color15" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGEND" styleID="11" fgColor="color15" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGUNKNOWN" styleID="2" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ATTRIBUTE" styleID="3" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ATTRIBUTEUNKNOWN" styleID="4" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SGMLDEFAULT" styleID="21" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CDATA" styleID="17" fgColor="color09" color12="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ENTITY" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="ini" desc="ini file" ext="">
                <color08 name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SECTION" styleID="2" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ASSIGNMENT" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFVAL" styleID="4" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="props" desc="Properties file" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ASSIGNMENT" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFVAL" styleID="4" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="diff" desc="DIFF" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMAND" styleID="2" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HEADER" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="POSITION" styleID="4" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DELETED" styleID="5" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ADDED" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="nfo" desc="Dos Style" ext="">
                <WordsStyle name="DEFAULT" styleID="32" fgColor="color05" bgColor="color00" fontSize="" fontStyle="0" />
            </LexerType>
            <LexerType name="makefile" desc="Makefile" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PREPROCESSOR" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="3" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TARGET" styleID="5" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDEOL" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="vb" desc="VB / VBS" ext="">
                <WordsStyle name="DEFAULT" styleID="7" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="WORD" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="STRING" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PREPROCESSOR" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="6" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DATE" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="css" desc="CSS" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAG" styleID="1" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CLASS" styleID="2" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PSEUDOCLASS" styleID="3" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="UNKNOWN_PSEUDOCLASS" styleID="4" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="6" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="UNKNOWN_IDENTIFIER" styleID="7" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VALUE" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="9" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ID" styleID="10" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IMPORTANT" styleID="11" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DIRECTIVE" styleID="12" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="pascal" desc="Pascal" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PREPROCESSOR" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="1" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="9" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="NUMBER" styleID="7" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="12" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ASM" styleID="14" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="2" fgColor="color03E0" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="4" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="perl" desc="Perl" ext="">
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="17" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03E9AE0" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SCALAR" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ARRAY" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HASH" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SYMBOL TABLE" styleID="15" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PUNCTUATION" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="POD" styleID="3" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ERROR" styleID="1" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="LONGQUOTE" styleID="19" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DATASECTION" styleID="21" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGSUBST" styleID="18" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BACKTICKS" styleID="20" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="python" desc="Python" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORDS" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TRIPLE" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TRIPLEDOUBLE" styleID="7" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CLASSNAME" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEFNAME" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="11" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTBLOCK" styleID="12" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="12" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="batch" desc="Batch" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORDS" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="LABEL" styleID="3" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HIDE SYBOL" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMAND" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VARIABLE" styleID="6" fgColor="FB9A4B" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="7" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="lua" desc="Lua" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="LITERALSTRING" styleID="8" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FUNC1" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="FUNC2" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="FUNC3" styleID="15" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
            </LexerType>
            <LexerType name="tex" desc="TeX" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SPECIAL" styleID="1" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="GROUP" styleID="2" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SYMBOL" styleID="3" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMAND" styleID="4" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TEXT" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="nsis" desc="NSIS" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING DOUBLE QUOTE" styleID="2" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING LEFT QUOTE" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING RIGHT QUOTE" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10">endfunction endif</WordsStyle>
                <WordsStyle name="FUNCTION" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="VARIABLE" styleID="6" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="LABEL" styleID="7" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="USER DEFINED" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="SECTION" styleID="9" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SUBSECTION" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IF DEFINE" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="MACRO" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING VAR" styleID="13" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="14" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SECTION GROUP" styleID="15" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PAGE EX" styleID="16" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FUNCTION DEFINITIONS" styleID="17" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="18" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="actionscript" desc="ActionScript" ext="">
                <!--
                <WordsStyle name="DIRECTIVE" styleID="19" fgColor="color09" bgColor="color00" fontName="" fontStyle="" fontSize="10" keywordClass="instre2" />
                -->
                <WordsStyle name="DEFAULT" styleID="11" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FUNCTION" styleID="20" fgColor="37A3ED" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2">ContentScroller</WordsStyle>
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="TYPE WORD" styleID="16" fgColor="37A3ED" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1">onMotionChanged onMotionFinished Tween ImagesStrip ContentScroller mx transitions easing Sprite Point MouseEvent Event BitmapData Timer TimerEvent addEventListener event x y height width</WordsStyle>
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="7E7E7E" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VERBATIM" styleID="13" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="14" fgColor="FFFF00" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="7E7E7E" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="7E7E7E" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD" styleID="17" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC KEYWORD ERROR" styleID="18" fgColor="color08" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="bash" desc="bash" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ERROR" styleID="1" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="4" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="7" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="8" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SCALAR" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PARAM" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BACKTICKS" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HERE DELIM" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HERE Q" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="fortran" desc="Fortran" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING2" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="6" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="7" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="8" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="FUNCTION1" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="FUNCTION2" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="PREPROCESSOR" styleID="11" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR2" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="LABEL" styleID="13" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CONTINUATION" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="fortran77" desc="Fortran (fixed form)" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING2" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="6" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="7" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="8" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="FUNCTION1" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="FUNCTION2" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="PREPROCESSOR" styleID="11" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR2" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="LABEL" styleID="13" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CONTINUATION" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="lisp" desc="LISP" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FUNCTION WORD" styleID="3" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="SYMBOL" styleID="5" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="8" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="9" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="SPECIAL" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="12" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="asm" desc="Assembler" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CPU INSTRUCTION" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="MATH INSTRUCTION" styleID="7" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="REGISTER" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="DIRECTIVE" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="DIRECTIVE OPERAND" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type3" />
                <WordsStyle name="COMMENT BLOCK" styleID="11" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="12" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRINGEOL" styleID="13" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="EXT INSTRUCTION" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type4" />
            </LexerType>
            <LexerType name="ruby" desc="Ruby" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ERROR" styleID="1" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="POD" styleID="3" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CLASS NAME" styleID="8" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DEF NAME" styleID="9" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="11" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="REGEX" styleID="12" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="GLOBAL" styleID="13" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SYMBOL" styleID="14" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="MODULE NAME" styleID="15" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTANCE VAR" styleID="16" fgColor="FB9A4B" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CLASS VAR" styleID="17" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BACKTICKS" styleID="18" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DATA SECTION" styleID="19" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING Q" styleID="24" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="postscript" desc="Postscript" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DSC COMMENT" styleID="2" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DSC VALUE" styleID="3" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="Name" styleID="5" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION" styleID="6" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="LITERAL" styleID="7" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IMMEVAL" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PAREN ARRAY" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PAREN DICT" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PAREN PROC" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TEXT" styleID="12" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="HEX STRING" styleID="13" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BASE85 STRING" styleID="14" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BAD STRING CHAR" styleID="15" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="vhdl" desc="VHDL" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LIne" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10">True False</WordsStyle>
                <WordsStyle name="IDENTIFIER" styleID="6" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING EOL" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="STD OPERATOR" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="ATTRIBUTE" styleID="10" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="DIRECTIVE" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DIRECTIVE OPERAND" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STD FUNCTION" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="STD PACKAGE" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type3" />
                <WordsStyle name="STD TYPE" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type4" />
                <WordsStyle name="USER DEFINE" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type5" />
            </LexerType>
            <LexerType name="smalltalk" desc="Smalltalk" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="1" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SYMBOL" styleID="4" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BINARY" styleID="5" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="BOOL" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SELF" styleID="7" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SUPER" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NIL" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="GLOBAL" styleID="10" fgColor="FB9A4B" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="RETURN" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SPECIAL" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KWS END" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ASSIGN" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="15" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SPECIAL SELECTOR" styleID="16" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="caml" desc="Caml" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="1" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGNAME" styleID="2" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="3" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="BUILIN FUNC &amp; TYPE" styleID="4" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="TYPE" styleID="5" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1">if else for while</WordsStyle>
                <WordsStyle name="LINENUM" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10">bool long int char</WordsStyle>
                <WordsStyle name="OPERATOR" styleID="7" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="9" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="11" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="12" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="13" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT DOC" styleID="14" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE DOC" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="verilog" desc="Verilog" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="11" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="TAGNAME" styleID="2" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="KEYWORD" styleID="7" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="OPERATOR" styleID="10" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="PREPROCESSOR" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="6" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE BANG" styleID="3" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING EOL" styleID="12" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="USER" styleID="19" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="kix" desc="KiXtart" ext="">
                <!--
                <WordsStyle name="" styleID="0" fgColor="" bgColor="color00" fontName="" fontStyle="" fontSize="10" />
            -->
                <WordsStyle name="DEFAULT" styleID="31" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="2" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING2" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="4" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VAR" styleID="5" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="MACRO" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="INSTRUCTION WORD" styleID="7" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="FUNCTION" styleID="8" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="OPERATOR" styleID="9" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="autoit" desc="autoIt" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="2" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FUNCTION" styleID="4" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="INSTRUCTION WORD" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="MACRO" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="STRING" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VARIABLE" styleID="9" fgColor="FB9A4B" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="SENT" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="PREPROCESSOR" styleID="11" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type3" />
                <WordsStyle name="SPECIAL" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type4" />
                <WordsStyle name="EXPAND" styleID="13" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type5" />
                <WordsStyle name="COMOBJ" styleID="14" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="ada" desc="ADA" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="1" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="IDENTIFIER" styleID="2" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DELIMITER" styleID="4" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER EOL" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="7" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING EOL" styleID="8" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="LABEL" styleID="9" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT LINE" styleID="10" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="ILLEGAL" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="matlab" desc="Matlab" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMAND" styleID="2" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTRUCTION WORD" styleID="4" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="STRING" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="6" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="7" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DOUBLE QUOTE STRING" styleID="8" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="haskell" desc="Haskell" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="1" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORD" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CHARACTER" styleID="5" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CLASS" styleID="6" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="MODULE" styleID="7" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="CAPITAL" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="DATA" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IMPORT" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="OPERATOR" styleID="11" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="INSTANCE" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTLINE" styleID="13" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTBLOCK" styleID="14" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTBLOCK2" styleID="15" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENTBLOCK3" styleID="16" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="inno" desc="InnoSetup" ext="">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORD" styleID="2" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre2" />
                <WordsStyle name="PARAMETER" styleID="3" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="SECTION" styleID="4" fgColor="color02" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="PREPROCESSOR" styleID="5" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type2" />
                <WordsStyle name="PREPROCESSOR INLINE" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT PASCAL" styleID="7" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="KEYWORD PASCAL" styleID="8" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type3" />
                <WordsStyle name="KEYWORD USER" styleID="9" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type4" />
                <WordsStyle name="STRING DOUBLE" styleID="10" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING SINGLE" styleID="11" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IDENTIFIER" styleID="12" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="cmake" desc="CMakeFile" ext="cmake">
                <WordsStyle name="DEFAULT" styleID="0" fgColor="color05" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMENT" styleID="1" fgColor="color03" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING D" styleID="2" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING L" styleID="3" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING R" styleID="4" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="COMMAND" styleID="5" fgColor="color13" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="instre1" />
                <WordsStyle name="PARAMETER" styleID="6" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="VARIABLE" styleID="7" fgColor="FB9A4B" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="USER DEFINED" styleID="8" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" keywordClass="type1" />
                <WordsStyle name="WHILEDEF" styleID="9" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="FOREACHDEF" styleID="10" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="IFDEF" styleID="11" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="MACRODEF" styleID="12" fgColor="000000" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="STRING VARIABLE" styleID="13" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
                <WordsStyle name="NUMBER" styleID="14" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            </LexerType>
            <LexerType name="searchResult" desc="Search result" ext="">
                <WordsStyle name="Search Header" styleID="1" fgColor="000080" bgColor="BBBBFF" fontName="" fontStyle="1" fontSize="" />
                <WordsStyle name="File Header" styleID="2" fgColor="008000" bgColor="D5FFD5" fontName="" fontStyle="1" fontSize="" />
                <WordsStyle name="Line Number" styleID="3" fgColor="color09" bgColor="color00" fontName="" fontStyle="0" fontSize="" />
                <WordsStyle name="Hit Word" styleID="4" fgColor="color00" bgColor="color09" fontName="" fontStyle="0" fontSize="" />
                <WordsStyle name="Selected Line" styleID="5" fgColor="37A3ED" bgColor="4F3E35" fontName="" fontStyle="0" fontSize="">if else for while</WordsStyle>
                <WordsStyle name="Current line background colour" styleID="6" bgColor="4F3E35" fgColor="0080FF" fontSize="" fontStyle="0">bool long int char</WordsStyle>
            </LexerType>
        </LexerStyles>
        <GlobalStyles>
            <!-- Attention : Don't modify the name of styleID="0" -->
            <WidgetStyle name="Global override" styleID="0" fgColor="color05" bgColor="color00" fontName="DejaVu Sans Mono" fontStyle="0" fontSize="10" />
            <WidgetStyle name="Default Style" styleID="32" fgColor="color03" bgColor="color00" fontName="DejaVu Sans Mono" fontStyle="0" fontSize="10" />
            <WidgetStyle name="Indent guideline style" styleID="37" color03r="888A85" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            <WidgetStyle name="Brace highlight style" styleID="34" fgColor="color12" bgColor="color00" fontName="" fontStyle="1" fontSize="10" />
            <WidgetStyle name="Bad brace colour" styleID="35" fgColor="color12" bgColor="color00" fontName="" fontStyle="0" fontSize="10" />
            <WidgetStyle name="Current line background colour" styleID="0" bgColor="color01" fgColor="color07" fontSize="" fontStyle="0" />
            <WidgetStyle name="Mark colour" styleID="0" fgColor="color08" color08="color01" />
            <WidgetStyle name="Selected text colour" styleID="0" fgColor="color07" color08="color02" fontStyle="0" />
            <WidgetStyle name="Caret colour" styleID="2069" fgColor="color08" bgColor="color12" fontSize="" fontStyle="0" />
            <WidgetStyle name="Find Mark Style" styleID="31" fgColor="color08" bgColor="color01" fontName="" fontStyle="0" fontSize="10" />
            <WidgetStyle name="Edge colour" styleID="0" fgColor="color03" bgColor="color00" fontSize="8" fontStyle="0" />
            <WidgetStyle name="Line number margin" styleID="33" fgColor="color09" bgColor="4C4A41" fontName="" fontStyle="0" fontSize="8" />
            <WidgetStyle name="Fold" styleID="0" fgColor="2E3436" bgColor="color03" fontSize="" fontStyle="0" />
            <WidgetStyle name="Fold margin" styleID="0" fgColor="2E3436" bgColor="6A5448" />
            <WidgetStyle name="White space symbol" styleID="0" fgColor="color02" bgColor="color00" fontSize="" fontStyle="1" />
            <WidgetStyle name="Smart HighLighting" styleID="29" bgColor="color09" fgColor="555753" fontSize="10" fontStyle="0" />
            <WidgetStyle name="Find Mark Style" styleID="31" bgColor="color01" fgColor="color08" fontName="" fontSize="10" fontStyle="0" />
            <WidgetStyle name="Mark Style 1" styleID="25" bgColor="00FFFF" />
            <WidgetStyle name="Mark Style 2" styleID="24" bgColor="FF8000" fgColor="FAAA3C" />
            <WidgetStyle name="Mark Style 3" styleID="23" bgColor="FFFF00" fgColor="color03" fontSize="10" fontStyle="0" />
            <WidgetStyle name="Mark Style 4" styleID="22" bgColor="8000FF" fgColor="000000" fontSize="10" fontStyle="0" />
            <WidgetStyle name="Mark Style 5" styleID="21" bgColor="008000" fgColor="808080" />
            <WidgetStyle name="Incremental highlight all" styleID="28" bgColor="0080FF" fgColor="FFCAB0" />
            <WidgetStyle name="Tags match highlighting" styleID="27" bgColor="808000" fgColor="000000" />
            <WidgetStyle name="Tags attribute" styleID="26" bgColor="808080" fgColor="8080C0" />
            <WidgetStyle name="Active tab focused indicator" styleID="0" fgColor="FAAA3C" bgColor="color08" />
            <WidgetStyle name="Active tab unfocused indicator" styleID="0" fgColor="FFCAB0" bgColor="color12" />
            <WidgetStyle name="Active tab text" styleID="0" fgColor="000000" bgColor="8000FF" />
            <WidgetStyle name="Inactive tabs" styleID="0" fgColor="808080" bgColor="C0C0C0" />
        </GlobalStyles>
    </NotepadPlus>
    `

        colors.forEach((color, index) => {
            const colorToReplace = index < 10 ? `color0${index}` : `color${index}`
            XMLString = XMLString.replace(new RegExp(colorToReplace, 'g'), color.hex.substr(1))
        });
        const blob = new Blob([XMLString], {type: 'text/plain'})
        saveAs(blob, 'Yapp-theme.xml')
    }
}
export default NotepadPPTheme