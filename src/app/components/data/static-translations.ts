export const STATIC_TRANSLATIONS = [
    {
        "name": "src",
        "type": "folder",
        "childrens": [
            {
                "name": "app",
                "type": "folder",
                "childrens": [
                    {
                        "name": "global",
                        "type": "folder",
                        "childrens": [
                            {
                                "name": "global.component.ts",
                                "type": "file",
                                "active": true,
                                "contentType": 'typescript',
                                "ref": "static",
                                "content": "import { Component } from \"@angular/core\"\r\nimport { translate } from '@rxweb/translate'\r\n  \r\n@Component({\r\n    templateUrl: './global.component.html' \r\n})\r\nexport class GlobalComponent {\r\n \r\n @translate()  global: { [key: string]: any } \r\n\r\n}"
                            },
                            {
                                "name": "global.component.html",
                                "type": "file",
                                "ref": "static",
                                "contentType": 'html',
                                "content": "<h4 class=\"example-title\">{{global.loginTitle}}<\/h4>\r\n<form class=\"work-sanslight mg-left-5 form-font-size\">\r\n  <div class=\"form-group row\">\r\n    <label for=\"staticEmail\" class=\"col-sm-2 col-form-label\">{{global.text.userName}}<\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"text\" [placeholder]=\"global.placeholder.userName\" class=\"form-control\">\r\n    <\/div>\r\n  <\/div>\r\n  <div class=\"form-group row\">\r\n    <label for=\"inputPassword\" class=\"col-sm-2 col-form-label\">{{global.text.password}}<\/label>\r\n    <div class=\"col-sm-10\">\r\n      <input type=\"password\" class=\"form-control\" [placeholder]=\"global.placeholder.password\">\r\n    <\/div>\r\n  <\/div>\r\n  <button type=\"submit\" class=\"btn only-border padding-zero\">{{global.text.signIn}}<\/button>\r\n<\/form>"
                            }
                        ]
                    }
                ]
            },
            {
                "name": "assets",
                "type": "folder",
                "childrens": [
                    {
                        "name": "i18n",
                        "type": "folder",
                        "childrens": [{
                            "name": "en",
                            "type": "folder",
                            "childrens": [
                                {
                                    "name": "global.en.json",
                                    "type": "file",
                                    "contentType": 'json',
                                    "ref": "static",
                                    "content": "{\r\n  \"loginTitle\": \"Static Translation\",\r\n  \"placeholder\": {\r\n    \"userName\": \"Enter Your User Name\",\r\n    \"password\": \"Enter Your Password\"\r\n  },\r\n  \"text\": {\r\n    \"userName\": \"User Name\",\r\n    \"password\": \"Password\",\r\n    \"signIn\": \"Sign In\"\r\n  }\r\n}\r\n"
                                }
                            ]
                        }, {
                            "name": "fr",
                            "type": "folder",
                            "childrens": [{
                                "name": "global.fr.json",
                                "type": "file",
                                "contentType": 'json',
                                "ref": "static",
                                "content": "{\r\n  \"loginTitle\": \"Traduction statique\",\r\n  \"placeholder\": {\r\n    \"userName\": \"Entrez votre nom d'utilisateur\",\r\n    \"password\": \"Tapez votre mot de passe\"\r\n  },\r\n  \"text\": {\r\n    \"userName\": \"Nom d'utilisateur\",\r\n    \"password\": \"Mot de passe\",\r\n    \"signIn\": \"Se connecter\"\r\n  }\r\n}\r\n"
                            }]
                        }
                        ]
                    }
                ]
            },
            {
                "name": "rxweb.module.ts",
                "type": "file", "ref": "static",
                "contentType": 'typescript',
                "content": "import { NgModule } from '@angular\/core'; \r\nimport { RxTranslateModule } from '@rxweb\/translate' \r\n \r\n@NgModule({ \r\n    imports: [ \r\n        RxTranslateModule.forRoot({ \r\n            cacheLanguageWiseObject: true, \r\n            globalFilePath: 'assets\/i18n\/{{language-code}}\/global.{{language-code}}.json', \r\n               }) \r\n    ], \r\n    exports: [RxTranslateModule], \r\n}) \r\nexport class RxWebModule { }\r\n\r\n\/\/ Import this RxWebModule in your root module",
            }
        ]
    }
]
