import { OnInit, Component } from '@angular/core';
import * as Diff2Html from 'diff2html';
import * as Diff from 'diff'

@Component({
  templateUrl: './translate-parser.component.html',
})
export class TranslateParserComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "translate-parser", "title": "translate-parser", "subLink": null }, { "id": "translate-parser", "title": "translate-parser", "subLink": null }];
  outputHtml: string;

  ngOnInit() {
    this.init();
  }

  init() {
      let ngxContent: any = "import { TranslateDefaultParser, TranslateParser } from '..\/src\/public_api';\r\n\r\ndescribe('Parser', () => {\r\n    let parser: TranslateParser;\r\n\r\n    beforeEach(() => {\r\n        parser = new TranslateDefaultParser();\r\n    });\r\n\r\n    it('is defined', () => {\r\n        expect(TranslateParser).toBeDefined();\r\n\r\n        expect(parser instanceof TranslateParser).toBeTruthy();\r\n    });\r\n\r\n    it('should interpolate strings', () => {\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: \"value\" })).toEqual(\"This is a value\");\r\n    });\r\n\r\n    it('should interpolate strings with falsy values', () => {\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: \"\" })).toEqual(\"This is a \");\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: 0 })).toEqual(\"This is a 0\");\r\n    });\r\n\r\n    it('should interpolate strings with object properties', () => {\r\n        expect(parser.interpolate(\"This is a {{ key1.key2 }}\", { key1: { key2: \"value2\" } })).toEqual(\"This is a value2\");\r\n        expect(parser.interpolate(\"This is a {{ key1.key2.key3 }}\", { key1: { key2: { key3: \"value3\" } } })).toEqual(\"This is a value3\");\r\n    });\r\n\r\n    it('should support interpolation functions', () => {\r\n        expect(parser.interpolate((v: string) => v.toUpperCase() + ' YOU!', 'bless')).toBe('BLESS YOU!');\r\n    });\r\n\r\n    it('should get the addressed value', () => {\r\n        expect(parser.getValue({ key1: { key2: \"value2\" } }, 'key1.key2')).toEqual(\"value2\");\r\n        expect(parser.getValue({ key1: { key2: \"value\" } }, 'keyWrong.key2')).not.toBeDefined();\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.keyWrong.key3')).not.toBeDefined();\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.key2.keyWrong')).not.toBeDefined();\r\n\r\n\r\n        expect(parser.getValue({ 'key1.key2': { key3: \"value3\" } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ key1: { 'key2.key3': \"value3\" } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ 'key1.key2.key3': \"value3\" }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ 'key1.key2': { key3: \"value3\" } }, 'key1.key2.keyWrong')).not.toBeDefined();\r\n        expect(parser.getValue({\r\n            'key1': \"value1\",\r\n            'key1.key2': \"value2\"\r\n        }, 'key1.key2')).toEqual(\"value2\");\r\n\r\n    });\r\n});"
      let rxwebContent: any = "import { TranslateDefaultParser, TranslateParser } from '@rxweb\/ngx-translate-extension';\r\n\r\ndescribe('Parser', () => {\r\n    let parser: TranslateParser;\r\n\r\n    beforeEach(() => {\r\n        parser = new TranslateDefaultParser();\r\n    });\r\n\r\n    it('is defined', () => {\r\n        expect(TranslateParser).toBeDefined();\r\n\r\n        expect(parser instanceof TranslateParser).toBeTruthy();\r\n    });\r\n\r\n    it('should interpolate strings', () => {\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: \"value\" })).toEqual(\"This is a value\");\r\n    });\r\n\r\n    it('should interpolate strings with falsy values', () => {\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: \"\" })).toEqual(\"This is a \");\r\n        expect(parser.interpolate(\"This is a {{ key }}\", { key: 0 })).toEqual(\"This is a 0\");\r\n    });\r\n\r\n    it('should interpolate strings with object properties', () => {\r\n        expect(parser.interpolate(\"This is a {{ key1.key2 }}\", { key1: { key2: \"value2\" } })).toEqual(\"This is a value2\");\r\n        expect(parser.interpolate(\"This is a {{ key1.key2.key3 }}\", { key1: { key2: { key3: \"value3\" } } })).toEqual(\"This is a value3\");\r\n    });\r\n\r\n    it('should support interpolation functions', () => {\r\n        expect(parser.interpolate((v: string) => v.toUpperCase() + ' YOU!', 'bless')).toBe('BLESS YOU!');\r\n    });\r\n\r\n    it('should get the addressed value', () => {\r\n        expect(parser.getValue({ key1: { key2: \"value2\" } }, 'key1.key2')).toEqual(\"value2\");\r\n        expect(parser.getValue({ key1: { key2: \"value\" } }, 'keyWrong.key2')).not.toBeDefined();\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.keyWrong.key3')).not.toBeDefined();\r\n        expect(parser.getValue({ key1: { key2: { key3: \"value3\" } } }, 'key1.key2.keyWrong')).not.toBeDefined();\r\n\r\n\r\n        expect(parser.getValue({ 'key1.key2': { key3: \"value3\" } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ key1: { 'key2.key3': \"value3\" } }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ 'key1.key2.key3': \"value3\" }, 'key1.key2.key3')).toEqual(\"value3\");\r\n        expect(parser.getValue({ 'key1.key2': { key3: \"value3\" } }, 'key1.key2.keyWrong')).not.toBeDefined();\r\n        expect(parser.getValue({\r\n            'key1': \"value1\",\r\n            'key1.key2': \"value2\"\r\n        }, 'key1.key2')).toEqual(\"value2\");\r\n\r\n    });\r\n});"

    var diff = Diff.createTwoFilesPatch("translate.parser.spec.ts", "translate.parser.spec.ts", ngxContent, rxwebContent);

    let outputHtml = Diff2Html.html(diff, {
      drawFileList: false, matching: 'lines', outputFormat: 'side-by-side'
    });
    this.outputHtml = outputHtml;
  }
}
