import { OnInit, Component } from '@angular/core';
import * as Diff2Html from 'diff2html';
import * as Diff from 'diff'

@Component({
  templateUrl: './translate-store.component.html',
})
export class TranslateStoreComponent implements OnInit {

  rightSidebarLinks: any = [{ "id": "translate-store", "title": "translate-store", "subLink": null }, { "id": "translate-store", "title": "translate-store", "subLink": null }];
  outputHtml: string;

  ngOnInit() {
    this.init();
  }

  init() {
      let ngxContent: any = "import { Location } from '@angular\/common';\r\nimport { Component, ModuleWithProviders, NgModule, NgModuleFactoryLoader } from \"@angular\/core\";\r\nimport { ComponentFixture, fakeAsync, inject, TestBed, tick } from \"@angular\/core\/testing\";\r\nimport { Route, Router, RouterModule } from \"@angular\/router\";\r\nimport { RouterTestingModule, SpyNgModuleFactoryLoader } from \"@angular\/router\/testing\";\r\nimport { TranslateModule, TranslateService } from \"..\/src\/public_api\";\r\n\r\n@Component({\r\n    selector: 'root-cmp',\r\n    template: `\r\n      <router-outlet><\/router-outlet>`\r\n})\r\nclass RootCmp {\r\n    constructor(public translate: TranslateService) {\r\n        translate.setTranslation('en', {\r\n            \"TEST\": \"Root\",\r\n            'ROOT': 'Root'\r\n        });\r\n        translate.use('en');\r\n    }\r\n}\r\n\r\n@Component({\r\n    selector: 'lazy',\r\n    template: 'lazy-loaded-parent [<router-outlet><\/router-outlet>]'\r\n})\r\nclass ParentLazyLoadedComponent {\r\n}\r\n\r\nfunction getLazyLoadedModule(importedModule: ModuleWithProviders) {\r\n    @Component({ selector: 'lazy', template: 'lazy-loaded-child' })\r\n    class ChildLazyLoadedComponent {\r\n        constructor(public translate: TranslateService) {\r\n            translate.setTranslation('en', {\r\n                \"TEST\": \"Lazy\",\r\n                'CHILD': 'Child'\r\n            });\r\n            translate.use('en');\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n        }\r\n    }\r\n\r\n    @NgModule({\r\n        declarations: [ParentLazyLoadedComponent, ChildLazyLoadedComponent],\r\n        imports: [\r\n            RouterModule.forChild([<Route>{\r\n                path: 'loaded',\r\n                component: ParentLazyLoadedComponent,\r\n                children: [{ path: 'child', component: ChildLazyLoadedComponent }]\r\n            }]),\r\n            importedModule\r\n        ]\r\n    })\r\n    class LoadedModule {\r\n    }\r\n\r\n    return LoadedModule;\r\n}\r\n\r\nfunction advance(fixture: ComponentFixture<any>): void {\r\n    tick();\r\n    fixture.detectChanges();\r\n}\r\n\r\nfunction createRoot(router: Router, type: any): ComponentFixture<any> {\r\n    const f = TestBed.createComponent(type);\r\n    advance(f);\r\n    router.initialNavigation();\r\n    advance(f);\r\n    return f;\r\n}\r\n\r\ndescribe(\"module\", () => {\r\n    beforeEach(() => {\r\n        TestBed.configureTestingModule({\r\n            imports: [\r\n                RouterTestingModule,\r\n                TranslateModule.forRoot(),\r\n            ],\r\n            declarations: [RootCmp]\r\n        });\r\n    });\r\n\r\n    it(\"should work when lazy loaded using forChild\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(location.path()).toEqual('\/lazy\/loaded\/child');\r\n\r\n            \/\/ since the root module imports the TranslateModule with forRoot and the lazy loaded module with forChild\r\n            \/\/ the translate service is shared between both modules\r\n            \/\/ the constructor of the ChildLazyLoadedComponent overwrote the \"TEST\" key of the root TranslateService\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n        }))\r\n    );\r\n\r\n    it(\"should create 2 instances of the service when lazy loaded using forRoot\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forRoot());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(location.path()).toEqual('\/lazy\/loaded\/child');\r\n\r\n            \/\/ since both the root module and the lazy loaded module use forRoot to define the TranslateModule\r\n            \/\/ the translate service is NOT shared, and 2 instances co-exist\r\n            \/\/ the constructor of the ChildLazyLoadedComponent didn't overwrote the \"TEST\" key of the root TranslateService\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n        }))\r\n    );\r\n\r\n    it(\"should create 2 instances of the service when lazy loaded using forChild and isolate true\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild({ isolate: true }));\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(location.path()).toEqual('\/lazy\/loaded\/child');\r\n\r\n            \/\/ since both the root module and the lazy loaded module use forRoot to define the TranslateModule\r\n            \/\/ the translate service is NOT shared, and 2 instances co-exist\r\n            \/\/ the constructor of the ChildLazyLoadedComponent didn't overwrote the \"TEST\" key of the root TranslateService\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n        }))\r\n    );\r\n\r\n    it(\"should relay events when lazy loading & using forChild with isolate false\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            let spy = jasmine.createSpy('TranslationChange');\r\n            let sub = translate.onTranslationChange.subscribe(spy);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n            sub.unsubscribe();\r\n        }))\r\n    );\r\n\r\n    it(\"should not relay events when lazy loading & using forChild with isolate true\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild({ isolate: true }));\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            let spy = jasmine.createSpy('TranslationChange');\r\n            let sub = translate.onTranslationChange.subscribe(spy);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n            sub.unsubscribe();\r\n        }))\r\n    );\r\n\r\n    it('should extend translations with extend true', fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let loadedModule = getLazyLoadedModule(TranslateModule.forChild({ extend: true }));\r\n            loader.stubbedModules = { expected: loadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp);\r\n            const translate: TranslateService = TestBed.get(TranslateService);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n            expect(translate.instant('ROOT')).toEqual('Root');\r\n            expect(translate.instant('CHILD')).toEqual('Child');\r\n        }))\r\n    );\r\n});"
      let rxwebContent: any = "import { Location } from '@angular\/common';\r\nimport { Component, ModuleWithProviders, NgModule, NgModuleFactoryLoader } from \"@angular\/core\";\r\nimport { ComponentFixture, fakeAsync, inject, TestBed, tick } from \"@angular\/core\/testing\";\r\nimport { Route, Router, RouterModule } from \"@angular\/router\";\r\nimport { RouterTestingModule, SpyNgModuleFactoryLoader } from \"@angular\/router\/testing\";\r\nimport { TranslateModule, TranslateService } from '@rxweb\/ngx-translate-extension';\r\nimport { RxTranslateModule } from \"@rxweb\/translate\";\r\n\r\n@Component({\r\n    selector: 'root-cmp',\r\n    template: `\r\n      <router-outlet><\/router-outlet>`\r\n})\r\nclass RootCmp {\r\n    constructor(public translate: TranslateService) {\r\n        translate.setTranslation('en', {\r\n            \"TEST\": \"Root\",\r\n            'ROOT': 'Root'\r\n        });\r\n        translate.use('en');\r\n    }\r\n}\r\n\r\n@Component({\r\n    selector: 'lazy',\r\n    template: 'lazy-loaded-parent [<router-outlet><\/router-outlet>]'\r\n})\r\nclass ParentLazyLoadedComponent {\r\n}\r\n\r\nfunction getLazyLoadedModule(importedModule: ModuleWithProviders) {\r\n    @Component({ selector: 'lazy', template: 'lazy-loaded-child' })\r\n    class ChildLazyLoadedComponent {\r\n        constructor(public translate: TranslateService) {\r\n            translate.setTranslation('en', {\r\n                \"TEST\": \"Lazy\",\r\n                'CHILD': 'Child'\r\n            });\r\n            translate.use('en');\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n        }\r\n    }\r\n\r\n    @NgModule({\r\n        declarations: [ParentLazyLoadedComponent, ChildLazyLoadedComponent],\r\n        imports: [\r\n            RouterModule.forChild([<Route>{\r\n                path: 'loaded',\r\n                component: ParentLazyLoadedComponent,\r\n                children: [{ path: 'child', component: ChildLazyLoadedComponent }]\r\n            }]),\r\n            importedModule\r\n            , RxTranslateModule.forRoot({\r\n                isTest: true,\r\n                forNgxTranslate: true,\r\n                cacheLanguageWiseObject: true,\r\n            })\r\n        ]\r\n    })\r\n    class LoadedModule {\r\n    }\r\n\r\n    return LoadedModule;\r\n}\r\n\r\nfunction advance(fixture: ComponentFixture<any>): void {\r\n    tick();\r\n    fixture.detectChanges();\r\n}\r\n\r\nfunction createRoot(router: Router, type: any): ComponentFixture<any> {\r\n    const f = TestBed.createComponent(type);\r\n    advance(f);\r\n    router.initialNavigation();\r\n    advance(f);\r\n    return f;\r\n}\r\n\r\ndescribe(\"module\", () => {\r\n    beforeEach(() => {\r\n        TestBed.configureTestingModule({\r\n            imports: [\r\n                RouterTestingModule,\r\n                TranslateModule.forRoot(),\r\n                RxTranslateModule.forRoot({\r\n                    isTest: true,\r\n                    forNgxTranslate: true,\r\n                    cacheLanguageWiseObject: true,\r\n                })\r\n            ],\r\n            declarations: [RootCmp]\r\n        });\r\n    });\r\n\r\n    it(\"should work when lazy loaded using forChild\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(location.path()).toEqual('\/lazy\/loaded\/child');\r\n\r\n            \/\/ since the root module imports the TranslateModule with forRoot and the lazy loaded module with forChild\r\n            \/\/ the translate service is shared between both modules\r\n            \/\/ the constructor of the ChildLazyLoadedComponent overwrote the \"TEST\" key of the root TranslateService\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n        }))\r\n    );\r\n\r\n    it(\"should create 2 instances of the service when lazy loaded using forRoot\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forRoot());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(location.path()).toEqual('\/lazy\/loaded\/child');\r\n\r\n            \/\/ since both the root module and the lazy loaded module use forRoot to define the TranslateModule\r\n            \/\/ the translate service is NOT shared, and 2 instances co-exist\r\n            \/\/ the constructor of the ChildLazyLoadedComponent didn't overwrote the \"TEST\" key of the root TranslateService\r\n            expect(translate.instant('TEST')).toEqual('Root');\r\n        }))\r\n    );\r\n\r\n    it(\"should relay events when lazy loading & using forChild with isolate false\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild());\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            let spy = jasmine.createSpy('TranslationChange');\r\n            let sub = translate.onTranslationChange.subscribe(spy);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(1);\r\n            sub.unsubscribe();\r\n        }))\r\n    );\r\n\r\n    it(\"should not relay events when lazy loading & using forChild with isolate true\", fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let LoadedModule = getLazyLoadedModule(TranslateModule.forChild({ isolate: true }));\r\n            loader.stubbedModules = { expected: LoadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp),\r\n                translate = TestBed.get(TranslateService);\r\n\r\n            let spy = jasmine.createSpy('TranslationChange');\r\n            let sub = translate.onTranslationChange.subscribe(spy);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(spy).toHaveBeenCalledTimes(0);\r\n            sub.unsubscribe();\r\n        }))\r\n    );\r\n\r\n    it('should extend translations with extend true', fakeAsync(inject(\r\n        [Router, Location, NgModuleFactoryLoader],\r\n        (router: Router, location: Location, loader: SpyNgModuleFactoryLoader) => {\r\n            let loadedModule = getLazyLoadedModule(TranslateModule.forChild({ extend: true }));\r\n            loader.stubbedModules = { expected: loadedModule };\r\n\r\n            const fixture = createRoot(router, RootCmp);\r\n            const translate: TranslateService = TestBed.get(TranslateService);\r\n\r\n            router.resetConfig([{ path: 'lazy', loadChildren: 'expected' }]);\r\n\r\n            router.navigateByUrl('\/lazy\/loaded\/child');\r\n            advance(fixture);\r\n\r\n            expect(translate.instant('TEST')).toEqual('Lazy');\r\n            expect(translate.instant('ROOT')).toEqual('Root');\r\n            expect(translate.instant('CHILD')).toEqual('Child');\r\n        }))\r\n    );\r\n});"

    var diff = Diff.createTwoFilesPatch("translate.store.spec.ts", "translate.store.spec.ts", ngxContent, rxwebContent);

    let outputHtml = Diff2Html.html(diff, {
      drawFileList: false, matching: 'lines', outputFormat: 'side-by-side'
    });
    this.outputHtml = outputHtml;
  }
}