(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./projects/map-district-selector/src/lib/components/panel/panel.component.ts":
/*!************************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/components/panel/panel.component.ts ***!
  \************************************************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../map-district-selector.token */ "./projects/map-district-selector/src/lib/map-district-selector.token.ts");
/* harmony import */ var _map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map-district-selector.types */ "./projects/map-district-selector/src/lib/map-district-selector.types.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! echarts */ "./node_modules/echarts/index.js");
/* harmony import */ var echarts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(echarts__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _utils_read_json_read_json_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/read-json/read-json.service */ "./projects/map-district-selector/src/lib/utils/read-json/read-json.service.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");















const _c0 = ["mapChart"];
function PanelComponent_mat_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", option_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", option_r6.name, "");
} }
function PanelComponent_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.back(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u8FD4\u56DE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PanelComponent_ng_container_14_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PanelComponent_ng_container_14_div_2_div_1_div_4_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const district_r14 = ctx.$implicit; const city_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r15.hoverDistrict(city_r12, district_r14); })("mouseleave", function PanelComponent_ng_container_14_div_2_div_1_div_4_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r18.leaveDistrict(false); })("click", function PanelComponent_ng_container_14_div_2_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const district_r14 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r19.chooseDistrict(district_r14); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", district_r14.name, " ");
} }
function PanelComponent_ng_container_14_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_ng_container_14_div_2_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const city_r12 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r20.chooseCity(city_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelComponent_ng_container_14_div_2_div_1_div_4_Template, 2, 1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r12.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", city_r12.children);
} }
function PanelComponent_ng_container_14_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_container_14_div_2_div_1_Template, 5, 2, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r9.cityList);
} }
function PanelComponent_ng_container_14_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_ng_container_14_div_3_div_1_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const district_r25 = ctx.$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4); return ctx_r26.chooseDistrict(district_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const district_r25 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", district_r25.name, " ");
} }
function PanelComponent_ng_container_14_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function PanelComponent_ng_container_14_div_3_div_1_Template_div_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const city_r23 = ctx.$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r28.hoverCity(city_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_ng_container_14_div_3_div_1_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const city_r23 = ctx.$implicit; const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r30.chooseCity(city_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PanelComponent_ng_container_14_div_3_div_1_div_4_Template, 2, 1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const city_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](city_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", city_r23.children);
} }
function PanelComponent_ng_container_14_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseleave", function PanelComponent_ng_container_14_div_3_Template_div_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r32); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r31.leaveDistrict(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PanelComponent_ng_container_14_div_3_div_1_Template, 5, 2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r10.cityList);
} }
function PanelComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](1, 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PanelComponent_ng_container_14_div_2_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PanelComponent_ng_container_14_div_3_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitch", ctx_r4.cityType);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", "Municipality");
} }
function PanelComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PanelComponent {
    constructor(
    // tslint:disable-next-line: ban-types
    closeFn, readJson, $cdRef) {
        this.closeFn = closeFn;
        this.readJson = readJson;
        this.$cdRef = $cdRef;
        this.searchControl = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]();
        this.searchOptions = [];
        this.searchPlaceholder = ['请输入您要查找的省市', '请输入您要查找的地区'];
        this.chartInit$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.loading = true;
        this.title = '';
        this.mapLevel = 0;
        this.cityType = 'Normal';
        this.cityList = [];
        this.municipalityCityList = [];
        this.options = {
            series: [
                Object.assign({ type: 'map', map: 'China', roam: true, zoom: 1.2, aspectScale: 0.75, selectedMode: 'single' }, new _map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MapTheme"]({
                    areaColor: '#e0ece4',
                    emphasisAreaColor: '#ff4b5c',
                    labelColor: '#66bfbf',
                    emphasisLabelColor: '#056674',
                })),
            ]
        };
        this.result = new _map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MapSelectResult"]();
    }
    resize() {
        this.chart.resize();
    }
    ngOnInit() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(this.chartInit$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(() => this.initChart())), this.readJson.readJson('china')).subscribe(([_, ChinaJson]) => {
            this.loading = false;
            this.renderChina(ChinaJson);
            this.initSearchOptions();
        });
    }
    ngAfterViewInit() {
        this.chartInit$.next(true);
        this.$cdRef.detectChanges();
    }
    initSearchOptions() {
        this.searchControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(value => this.filterSearch(value))).subscribe(e => this.searchOptions = e);
    }
    filterSearch(value) {
        const filterValue = value.trim().toLowerCase();
        if (!filterValue) {
            return [];
        }
        let options = [];
        switch (this.mapLevel) {
            case 0:
                options = this.options.series[0].data;
                break;
            case 1:
                options = JSON.parse(JSON.stringify(this.cityList)).reduce((p, c) => {
                    p.push(c);
                    if (c.children.length) {
                        p.push(...c.children.map(child => {
                            child.name = `${c.name}-${child.name}`;
                            return child;
                        }));
                    }
                    return p;
                }, []);
                break;
        }
        return options.filter(option => option.name && option.name.toLowerCase().includes(filterValue));
    }
    initChart() {
        this.chart = echarts__WEBPACK_IMPORTED_MODULE_5__["init"](this.mapChart.nativeElement);
        this.bindMapSelectChangedEvent();
    }
    renderChina(ChinaJson) {
        this.chart.resize({
            width: 860
        });
        this.resetMap('China', ChinaJson);
        this.loading = false;
    }
    fmtGeoData(data) {
        return data.features.map(g => g.properties);
    }
    isMunicipality(adcode) {
        return _map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MUNICIPALITIES"].indexOf(+adcode) !== -1;
    }
    isHainan(adcode) {
        return _map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["HAINAN"] === +adcode;
    }
    bindMapSelectChangedEvent() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.chart, 'mapselectchanged')
            .subscribe((param) => {
            this.mapSelectChangedEventCallBack(param.batch[0].name);
        });
    }
    mapSelectChangedEventCallBack(selectedName) {
        if (this.mapLevel === 1) {
            const [cityName, districtName] = selectedName.split('-');
            const city = this.cityList.find(c => c.name === cityName);
            this.result.setCity({
                adcode: +city.adcode,
                name: city.name,
            });
            if (districtName) {
                const district = city.children.find(d => d.name === districtName);
                this.result.setDistrict({
                    adcode: +district.adcode,
                    name: district.name
                });
            }
            this.close();
            return;
        }
        this.searchControl.setValue('');
        const selectData = this.options.series[0].data
            .find((v) => v.name === selectedName);
        if (!selectData) {
            return;
        }
        const { level, adcode, name, center, childrenNum } = selectData;
        if (level === 'province') {
            this.result.setProvince({
                adcode: +adcode,
                name,
                center
            });
            if (!childrenNum) {
                this.close();
                return;
            }
            if (this.isMunicipality(adcode)) {
                this.result.setCity({
                    adcode: +adcode,
                    name,
                    center
                });
            }
            this.loading = true;
            this.mapLevel = 1;
            this.chart.resize({
                width: 430
            });
            this.renderCity(selectData);
        }
        if (level === 'city') {
            this.result.setCity({
                adcode: +adcode,
                name
            });
            this.close();
        }
        if (level === 'district') {
            this.result.setDistrict({
                adcode: +adcode,
                name
            });
            this.close();
        }
    }
    renderCity({ level, adcode, center, name }) {
        this.title = name;
        this.readJson.readJson(`${level}/${adcode}`).subscribe(e => {
            adcode = +adcode;
            if (this.isMunicipality(adcode)) {
                this.getMunicipalityDistrictList({ level, adcode, center, name }, e);
            }
            else {
                this.getDistrictList(e);
            }
            this.resetMap(name, e);
        });
    }
    getMunicipalityDistrictList({ level, adcode, center, name }, e) {
        this.cityType = 'Municipality';
        this.cityList = [
            {
                level,
                adcode,
                center,
                name,
                children: e.features.map(({ properties }) => properties)
            }
        ];
        this.loading = false;
    }
    getDistrictList(e) {
        const observables = e.features.map(({ properties }) => {
            return properties.childrenNum ? this.readJson.readJson(`${properties.level}/${properties.adcode}`) : Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])({ features: [] });
        });
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["zip"])(...observables).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(cities => cities.map(({ features }, i) => {
            const { name, adcode, center, level } = e.features[i].properties;
            return {
                name,
                adcode,
                center,
                level,
                children: features.map(({ properties }) => properties)
            };
        }))).subscribe(list => {
            this.cityType = 'Normal';
            this.cityList = list;
            this.loading = false;
        });
    }
    resetMap(name, data, center = null) {
        this.chart.clear();
        echarts__WEBPACK_IMPORTED_MODULE_5__["registerMap"](name, data);
        this.options.series[0].map = name;
        this.options.series[0].data = this.fmtGeoData(data);
        this.options.series[0].center = center;
        this.chart.setOption(this.options, true);
    }
    hoverDistrict(city, district) {
        this.chart.setOption({
            series: [{
                    zoom: 2,
                    center: district.center
                }]
        });
        this.chart.dispatchAction({
            type: 'mapSelect',
            name: district.name
        });
        this.result.setCity({
            adcode: city.adcode,
            name: city.name
        });
    }
    hoverCity({ center, name, adcode }) {
        this.chart.setOption({
            series: [{
                    zoom: 2,
                    center
                }]
        });
        this.chart.dispatchAction({
            type: 'mapSelect',
            name
        });
        this.result.setCity({
            adcode,
            name
        });
    }
    leaveDistrict(clearCity = true) {
        var _a, _b, _c, _d;
        this.chart.setOption({
            series: [{
                    zoom: 1.2,
                    center: null
                }]
        });
        if ((_b = (_a = this.result) === null || _a === void 0 ? void 0 : _a.city) === null || _b === void 0 ? void 0 : _b.name) {
            this.chart.dispatchAction({
                type: 'mapUnSelect',
                name: (_d = (_c = this.result) === null || _c === void 0 ? void 0 : _c.city) === null || _d === void 0 ? void 0 : _d.name
            });
            if (clearCity) {
                this.result.clear('city');
            }
            this.result.clear('district');
        }
    }
    chooseCity(city) {
        this.result.setCity(city);
        this.close();
    }
    chooseDistrict(district) {
        this.result.setDistrict(district);
        this.close();
    }
    back() {
        this.title = '';
        this.loading = true;
        this.mapLevel = 0;
        this.cityList = [];
        this.municipalityCityList = [];
        this.readJson.readJson('china').subscribe(ChinaJson => this.renderChina(ChinaJson));
    }
    close(isOutputResult = true) {
        this.closeFn(isOutputResult ? this.result.getResult() : null);
    }
    ngOnDestroy() {
        this.chartInit$.complete();
    }
}
PanelComponent.ɵfac = function PanelComponent_Factory(t) { return new (t || PanelComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__["MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_utils_read_json_read_json_service__WEBPACK_IMPORTED_MODULE_7__["ReadJsonService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"])); };
PanelComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PanelComponent, selectors: [["mds-panel"]], viewQuery: function PanelComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.mapChart = _t.first);
    } }, hostBindings: function PanelComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function PanelComponent_resize_HostBindingHandler() { return ctx.resize(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 16, vars: 10, consts: [[1, "top"], [1, "label"], [1, "search"], ["type", "text", "matInput", "", 3, "placeholder", "formControl", "matAutocomplete"], [3, "optionSelected"], ["auto", "matAutocomplete"], [3, "value", 4, "ngFor", "ngForOf"], ["mat-flat-button", "", "color", "primary", "class", "back", 3, "click", 4, "ngIf"], [1, "close", 3, "click"], [1, "main"], [1, "map"], ["mapChart", ""], [4, "ngIf"], ["class", "loading", 4, "ngIf"], [3, "value"], ["mat-flat-button", "", "color", "primary", 1, "back", 3, "click"], [3, "ngSwitch"], ["class", "district-list", 4, "ngSwitchCase"], ["class", "district-list", 3, "mouseleave", 4, "ngSwitchDefault"], [1, "district-list"], ["class", "city-container municipality", 4, "ngFor", "ngForOf"], [1, "city-container", "municipality"], [1, "title", 3, "click"], [1, "subtitle-container"], ["class", "subtitle", 3, "mouseenter", "mouseleave", "click", 4, "ngFor", "ngForOf"], [1, "subtitle", 3, "mouseenter", "mouseleave", "click"], [1, "district-list", 3, "mouseleave"], ["class", "city-container", 3, "mouseenter", 4, "ngFor", "ngForOf"], [1, "city-container", 3, "mouseenter"], ["class", "subtitle", 3, "click", 4, "ngFor", "ngForOf"], [1, "subtitle", 3, "click"], [1, "loading"]], template: function PanelComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-autocomplete", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("optionSelected", function PanelComponent_Template_mat_autocomplete_optionSelected_5_listener($event) { return ctx.mapSelectChangedEventCallBack($event.option.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, PanelComponent_mat_option_7_Template, 2, 2, "mat-option", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PanelComponent_button_8_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PanelComponent_Template_div_click_9_listener() { return ctx.close(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PanelComponent_ng_container_14_Template, 4, 2, "ng-container", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, PanelComponent_div_15_Template, 2, 0, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title || "\u8BF7\u9009\u62E9\u7701\u4EFD");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("placeholder", ctx.searchPlaceholder[ctx.mapLevel])("formControl", ctx.searchControl)("matAutocomplete", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.searchOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mapLevel !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("city", ctx.mapLevel === 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.mapLevel === 1 && ctx.cityList.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
    } }, directives: [_angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocompleteTrigger"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_9__["MatAutocomplete"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__["MatOption"], _angular_material_button__WEBPACK_IMPORTED_MODULE_12__["MatButton"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgSwitchDefault"]], styles: ["[_nghost-%COMP%] {\n  min-width: 860px;\n  max-width: 1366px;\n  height: 80vh;\n  border-radius: 4px;\n  background-color: #fff;\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  box-sizing: border-box;\n  height: 58px;\n  padding: 5px 135px 5px 30px;\n  border-bottom: solid 1px #9cd3e8;\n  align-items: center;\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  font-size: 26px;\n  line-height: 35px;\n  color: #666;\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .search[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  font-size: 14px;\n  line-height: 29px;\n  float: right;\n  box-sizing: content-box;\n  width: 224px;\n  height: 29px;\n  padding: 0 15px;\n  color: #b0b0b0;\n  border: 0;\n  border-radius: 50px;\n  outline: medium;\n  background: #eee;\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%], [_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  cursor: pointer;\n  transform: translateY(-50%);\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 25px;\n  line-height: 25px;\n  right: 10px;\n  width: 25px;\n  height: 25px;\n  text-align: center;\n  color: #fff;\n  border: 2px solid #fff;\n  border-radius: 100%;\n  background: #000;\n  box-shadow: 0 0 1px 1px #000;\n}\n[_nghost-%COMP%]   .top[_ngcontent-%COMP%]   .back[_ngcontent-%COMP%] {\n  right: 50px;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  height: calc(100% - 58px);\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .map[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 100%;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%] {\n  display: flex;\n  overflow: auto;\n  height: 100%;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 49%;\n  margin-left: 1%;\n  padding: 5px 0;\n  cursor: pointer;\n  border-bottom: 1px #ddd dashed;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%]:not(.municipality) {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container.municipality[_ngcontent-%COMP%] {\n  width: 430px;\n  margin: auto 50px;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 16px;\n  font-weight: bold;\n  line-height: 24px;\n  margin-right: 20px;\n  margin-bottom: 10px;\n  color: #f60;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%]   .subtitle-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1;\n  flex-wrap: wrap;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-size: 12px;\n  line-height: 20px;\n  height: 20px;\n  margin-right: 10px;\n  cursor: pointer;\n  white-space: nowrap;\n  color: #333;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .district-list[_ngcontent-%COMP%]   .city-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%]:hover {\n  color: #fff;\n  background: #f90;\n}\n[_nghost-%COMP%]   .main[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  font-size: 32px;\n  font-weight: bold;\n  position: absolute;\n  top: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  height: 100%;\n  background: #fff;\n  justify-content: center;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2plY3RzL21hcC1kaXN0cmljdC1zZWxlY3Rvci9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUVBLGtCQUFBO0VBQ0Esc0JBQUE7QUFBSjtBQUNJO0VBQ0ksa0JBQUE7RUFFQSxhQUFBO0VBRUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7RUFFQSxnQ0FBQTtFQUVBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQUlRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtBQUhaO0FBS1E7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxZQUFBO0VBRUEsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFFQSxjQUFBO0VBQ0EsU0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTlo7QUFRUTs7RUFFSSxrQkFBQTtFQUNBLFFBQUE7RUFFQSxlQUFBO0VBQ0EsMkJBQUE7QUFQWjtBQVNRO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBRUEsV0FBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsa0JBQUE7RUFFQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNEJBQUE7QUFYWjtBQWFRO0VBQ0ksV0FBQTtBQVhaO0FBY0k7RUFDSSxrQkFBQTtFQUVBLGFBQUE7RUFFQSx5QkFBQTtBQWRSO0FBZVE7RUFDSSxPQUFBO0VBRUEsWUFBQTtBQWRaO0FBZ0JRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFFQSxZQUFBO0VBRUEsZUFBQTtBQWhCWjtBQWlCWTtFQUNJLGtCQUFBO0VBRUEsVUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBRUEsZUFBQTtFQUVBLDhCQUFBO0FBbEJoQjtBQW1CZ0I7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFFQSx1QkFBQTtBQWxCcEI7QUFvQmdCO0VBQ0ksWUFBQTtFQUNBLGlCQUFBO0FBbEJwQjtBQW9CZ0I7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUVBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSxXQUFBO0FBcEJwQjtBQXNCZ0I7RUFDSSxhQUFBO0VBQ0EsT0FBQTtFQUVBLGVBQUE7QUFyQnBCO0FBdUJnQjtFQUNJLGVBQUE7RUFDQSxpQkFBQTtFQUVBLFlBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxtQkFBQTtFQUVBLFdBQUE7QUF4QnBCO0FBeUJvQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQXZCeEI7QUE0QlE7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFFQSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBRUEsYUFBQTtFQUVBLFdBQUE7RUFDQSxZQUFBO0VBRUEsZ0JBQUE7RUFFQSx1QkFBQTtFQUNBLG1CQUFBO0FBL0JaIiwiZmlsZSI6InByb2plY3RzL21hcC1kaXN0cmljdC1zZWxlY3Rvci9zcmMvbGliL2NvbXBvbmVudHMvcGFuZWwvcGFuZWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XHJcbiAgICBtaW4td2lkdGg6IDg2MHB4O1xyXG4gICAgbWF4LXdpZHRoOiAxMzY2cHg7XHJcbiAgICBoZWlnaHQ6IDgwdmg7XHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIC50b3Age1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBoZWlnaHQ6IDU4cHg7XHJcbiAgICAgICAgcGFkZGluZzogNXB4IDEzNXB4IDVweCAzMHB4O1xyXG5cclxuICAgICAgICBib3JkZXItYm90dG9tOiBzb2xpZCAxcHggIzljZDNlODtcclxuXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgLmxhYmVsIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMzVweDtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VhcmNoID4gaW5wdXQge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyOXB4O1xyXG5cclxuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG5cclxuICAgICAgICAgICAgYm94LXNpemluZzogY29udGVudC1ib3g7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMjRweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAyOXB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcblxyXG4gICAgICAgICAgICBjb2xvcjogI2IwYjBiMDtcclxuICAgICAgICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MHB4O1xyXG4gICAgICAgICAgICBvdXRsaW5lOiBtZWRpdW07XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5iYWNrLFxyXG4gICAgICAgIC5jbG9zZSB7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICAgICAgdG9wOiA1MCU7XHJcblxyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNsb3NlIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIHJpZ2h0OiAxMHB4O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDI1cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMjVweDtcclxuXHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjMDAwO1xyXG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4IDFweCAjMDAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuYmFjayB7XHJcbiAgICAgICAgICAgIHJpZ2h0OiA1MHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5tYWluIHtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICAgICAgIGhlaWdodDogY2FsYygxMDAlIC0gNThweCk7XHJcbiAgICAgICAgLm1hcCB7XHJcbiAgICAgICAgICAgIGZsZXg6IDE7XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kaXN0cmljdC1saXN0IHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XHJcblxyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcblxyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIC5jaXR5LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDQ5JTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuXHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggI2RkZCBkYXNoZWQ7XHJcbiAgICAgICAgICAgICAgICAmOm5vdCgubXVuaWNpcGFsaXR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICYubXVuaWNpcGFsaXR5IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNDMwcHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDUwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAudGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZjYwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLnN1YnRpdGxlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjMzMzO1xyXG4gICAgICAgICAgICAgICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2Y5MDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLmxvYWRpbmcge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDMycHg7XHJcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgICAgIGxlZnQ6IDA7XHJcblxyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcblxyXG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PanelComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'mds-panel',
                templateUrl: './panel.component.html',
                styleUrls: ['./panel.component.scss']
            }]
    }], function () { return [{ type: Function, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__["MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN"]]
            }] }, { type: _utils_read_json_read_json_service__WEBPACK_IMPORTED_MODULE_7__["ReadJsonService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }]; }, { mapChart: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mapChart']
        }], resize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize']
        }] }); })();


/***/ }),

/***/ "./projects/map-district-selector/src/lib/components/panel/panel.module.ts":
/*!*********************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/components/panel/panel.module.ts ***!
  \*********************************************************************************/
/*! exports provided: MDSPanelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MDSPanelModule", function() { return MDSPanelModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel.component */ "./projects/map-district-selector/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _utils_read_json_read_json_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/read-json/read-json.module */ "./projects/map-district-selector/src/lib/utils/read-json/read-json.module.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/autocomplete.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");









class MDSPanelModule {
}
MDSPanelModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MDSPanelModule });
MDSPanelModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MDSPanelModule_Factory(t) { return new (t || MDSPanelModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _utils_read_json_read_json_module__WEBPACK_IMPORTED_MODULE_3__["ReadJsonModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MDSPanelModule, { declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _utils_read_json_read_json_module__WEBPACK_IMPORTED_MODULE_3__["ReadJsonModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
        _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]], exports: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MDSPanelModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _utils_read_json_read_json_module__WEBPACK_IMPORTED_MODULE_3__["ReadJsonModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_5__["MatAutocompleteModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
                ],
                declarations: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
                exports: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
                entryComponents: [_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/map-district-selector/src/lib/map-district-selector.module.ts":
/*!********************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/map-district-selector.module.ts ***!
  \********************************************************************************/
/*! exports provided: MapDistrictSelectorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDistrictSelectorModule", function() { return MapDistrictSelectorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _map_district_selector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map-district-selector.service */ "./projects/map-district-selector/src/lib/map-district-selector.service.ts");
/* harmony import */ var _components_panel_panel_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panel/panel.module */ "./projects/map-district-selector/src/lib/components/panel/panel.module.ts");





class MapDistrictSelectorModule {
}
MapDistrictSelectorModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: MapDistrictSelectorModule });
MapDistrictSelectorModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function MapDistrictSelectorModule_Factory(t) { return new (t || MapDistrictSelectorModule)(); }, providers: [
        _map_district_selector_service__WEBPACK_IMPORTED_MODULE_2__["MapDistrictSelectorService"]
    ], imports: [[
            _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
            _components_panel_panel_module__WEBPACK_IMPORTED_MODULE_3__["MDSPanelModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](MapDistrictSelectorModule, { imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
        _components_panel_panel_module__WEBPACK_IMPORTED_MODULE_3__["MDSPanelModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapDistrictSelectorModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"],
                    _components_panel_panel_module__WEBPACK_IMPORTED_MODULE_3__["MDSPanelModule"]
                ],
                providers: [
                    _map_district_selector_service__WEBPACK_IMPORTED_MODULE_2__["MapDistrictSelectorService"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/map-district-selector/src/lib/map-district-selector.service.ts":
/*!*********************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/map-district-selector.service.ts ***!
  \*********************************************************************************/
/*! exports provided: MapDistrictSelectorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapDistrictSelectorService", function() { return MapDistrictSelectorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
/* harmony import */ var _components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/panel/panel.component */ "./projects/map-district-selector/src/lib/components/panel/panel.component.ts");
/* harmony import */ var _map_district_selector_token__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./map-district-selector.token */ "./projects/map-district-selector/src/lib/map-district-selector.token.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");








class MapDistrictSelectorService {
    constructor(overlay, injector) {
        this.overlay = overlay;
        this.injector = injector;
        this.afterClose$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    open(options) {
        if (options instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]) {
            options = { viewContainerRef: options };
        }
        const { viewContainerRef, hasBackdrop, disableClose } = options;
        const config = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]();
        config.positionStrategy = this.overlay.position()
            .global()
            .centerHorizontally()
            .centerVertically();
        config.hasBackdrop = hasBackdrop == null ? true : hasBackdrop;
        this.overlayRef = this.overlay.create(config);
        if (disableClose == null ? disableClose : !disableClose) {
            this.overlayRef.backdropClick().subscribe(() => {
                this.close();
            });
        }
        this.overlayRef.attach(new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](_components_panel_panel_component__WEBPACK_IMPORTED_MODULE_3__["PanelComponent"], viewContainerRef, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [{
                    provide: _map_district_selector_token__WEBPACK_IMPORTED_MODULE_4__["MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN"],
                    useValue: this.close.bind(this)
                }],
            parent: this.injector
        })));
        return new Promise(res => {
            this.afterClose$.subscribe(e => res(e));
        });
    }
    close(result = null) {
        this.overlayRef.dispose();
        if (result != null) {
            this.afterClose$.next(result);
        }
    }
}
MapDistrictSelectorService.ɵfac = function MapDistrictSelectorService_Factory(t) { return new (t || MapDistrictSelectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"])); };
MapDistrictSelectorService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: MapDistrictSelectorService, factory: MapDistrictSelectorService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MapDistrictSelectorService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }]; }, null); })();


/***/ }),

/***/ "./projects/map-district-selector/src/lib/map-district-selector.token.ts":
/*!*******************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/map-district-selector.token.ts ***!
  \*******************************************************************************/
/*! exports provided: MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN, GEO_JSON_API_PATH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN", function() { return MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GEO_JSON_API_PATH", function() { return GEO_JSON_API_PATH; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN');
const GEO_JSON_API_PATH = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('GEO_JSON_API_PATH');


/***/ }),

/***/ "./projects/map-district-selector/src/lib/map-district-selector.types.ts":
/*!*******************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/map-district-selector.types.ts ***!
  \*******************************************************************************/
/*! exports provided: MapTheme, MapSelectResult, MUNICIPALITIES, HAINAN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapTheme", function() { return MapTheme; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapSelectResult", function() { return MapSelectResult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MUNICIPALITIES", function() { return MUNICIPALITIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HAINAN", function() { return HAINAN; });
class MapTheme {
    constructor({ labelColor, areaColor, emphasisLabelColor, emphasisAreaColor }) {
        return {
            label: {
                show: true,
                color: labelColor,
            },
            itemStyle: {
                areaColor,
                borderColor: '#000',
                borderType: 'solid',
            },
            emphasis: {
                label: {
                    show: true,
                    color: emphasisLabelColor,
                    fontWeight: 'bold'
                },
                itemStyle: {
                    areaColor: emphasisAreaColor
                }
            }
        };
    }
}
class MapSelectResult {
    constructor(province = null, city = null, district = null) {
        this.province = province;
        this.city = city;
        this.district = district;
    }
    fmtData(data) {
        return data ? { name: data.name, adcode: data.adcode } : null;
    }
    setProvince(province) {
        this.province = Object.assign({}, province);
    }
    setCity(city) {
        this.city = Object.assign({}, city);
    }
    setDistrict(district) {
        this.district = Object.assign({}, district);
    }
    clear(type) {
        this[type] = null;
    }
    getResult() {
        return {
            province: this.fmtData(this.province),
            city: this.fmtData(this.city),
            district: this.fmtData(this.district)
        };
    }
}
const MUNICIPALITIES = [
    110000,
    120000,
    500000,
    310000,
    810000,
    820000,
];
const HAINAN = 460000;


/***/ }),

/***/ "./projects/map-district-selector/src/lib/utils/read-json/read-json.module.ts":
/*!************************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/utils/read-json/read-json.module.ts ***!
  \************************************************************************************/
/*! exports provided: ReadJsonModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadJsonModule", function() { return ReadJsonModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _read_json_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./read-json.service */ "./projects/map-district-selector/src/lib/utils/read-json/read-json.service.ts");




class ReadJsonModule {
}
ReadJsonModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: ReadJsonModule });
ReadJsonModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function ReadJsonModule_Factory(t) { return new (t || ReadJsonModule)(); }, providers: [_read_json_service__WEBPACK_IMPORTED_MODULE_2__["ReadJsonService"]], imports: [[
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](ReadJsonModule, { imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadJsonModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"]
                ],
                providers: [_read_json_service__WEBPACK_IMPORTED_MODULE_2__["ReadJsonService"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./projects/map-district-selector/src/lib/utils/read-json/read-json.service.ts":
/*!*************************************************************************************!*\
  !*** ./projects/map-district-selector/src/lib/utils/read-json/read-json.service.ts ***!
  \*************************************************************************************/
/*! exports provided: ReadJsonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadJsonService", function() { return ReadJsonService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _map_district_selector_token__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../map-district-selector.token */ "./projects/map-district-selector/src/lib/map-district-selector.token.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");






class ReadJsonService {
    constructor(http, path) {
        this.http = http;
        this.path = path;
        this.cache = {};
    }
    readJson(fileName) {
        if (this.cache[fileName]) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(this.cache[fileName]);
        }
        return this.http.get(`${this.path}/${fileName}.json`).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(json => this.cache[fileName] = json));
    }
}
ReadJsonService.ɵfac = function ReadJsonService_Factory(t) { return new (t || ReadJsonService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_map_district_selector_token__WEBPACK_IMPORTED_MODULE_3__["GEO_JSON_API_PATH"])); };
ReadJsonService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ReadJsonService, factory: ReadJsonService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadJsonService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_map_district_selector_token__WEBPACK_IMPORTED_MODULE_3__["GEO_JSON_API_PATH"]]
            }] }]; }, null); })();


/***/ }),

/***/ "./projects/map-district-selector/src/public-api.ts":
/*!**********************************************************!*\
  !*** ./projects/map-district-selector/src/public-api.ts ***!
  \**********************************************************/
/*! exports provided: MapDistrictSelectorService, MapDistrictSelectorModule, MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN, GEO_JSON_API_PATH, MapTheme, MapSelectResult, MUNICIPALITIES, HAINAN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_map_district_selector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/map-district-selector.service */ "./projects/map-district-selector/src/lib/map-district-selector.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapDistrictSelectorService", function() { return _lib_map_district_selector_service__WEBPACK_IMPORTED_MODULE_0__["MapDistrictSelectorService"]; });

/* harmony import */ var _lib_map_district_selector_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/map-district-selector.module */ "./projects/map-district-selector/src/lib/map-district-selector.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapDistrictSelectorModule", function() { return _lib_map_district_selector_module__WEBPACK_IMPORTED_MODULE_1__["MapDistrictSelectorModule"]; });

/* harmony import */ var _lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/map-district-selector.token */ "./projects/map-district-selector/src/lib/map-district-selector.token.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN", function() { return _lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__["MAP_DISTRICT_SELECTOR_CLOSE_FUNC_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GEO_JSON_API_PATH", function() { return _lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_2__["GEO_JSON_API_PATH"]; });

/* harmony import */ var _lib_map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/map-district-selector.types */ "./projects/map-district-selector/src/lib/map-district-selector.types.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapTheme", function() { return _lib_map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MapTheme"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MapSelectResult", function() { return _lib_map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MapSelectResult"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MUNICIPALITIES", function() { return _lib_map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["MUNICIPALITIES"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HAINAN", function() { return _lib_map_district_selector_types__WEBPACK_IMPORTED_MODULE_3__["HAINAN"]; });

/*
 * Public API Surface of map-district-selector
 */






/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! projects/map-district-selector/src/public-api */ "./projects/map-district-selector/src/public-api.ts");



class AppComponent {
    constructor(helper, viewContainerRef) {
        this.helper = helper;
        this.viewContainerRef = viewContainerRef;
        this.title = 'map-district-selector-doc';
    }
    open() {
        this.helper.open(this.viewContainerRef).then(e => {
            this.selectedData = e;
            console.log(e);
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_1__["MapDistrictSelectorService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 8, vars: 6, consts: [[3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_0_listener() { return ctx.open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u6253\u5F00");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u7701\uFF1A", ctx.selectedData == null ? null : ctx.selectedData.province == null ? null : ctx.selectedData.province.name, " -- ", ctx.selectedData == null ? null : ctx.selectedData.province == null ? null : ctx.selectedData.province.adcode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u5E02\uFF1A", ctx.selectedData == null ? null : ctx.selectedData.city == null ? null : ctx.selectedData.city.name, " -- ", ctx.selectedData == null ? null : ctx.selectedData.city == null ? null : ctx.selectedData.city.adcode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("\u533A\uFF1A", ctx.selectedData == null ? null : ctx.selectedData.district == null ? null : ctx.selectedData.district.name, " -- ", ctx.selectedData == null ? null : ctx.selectedData.district == null ? null : ctx.selectedData.district.adcode, "");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_1__["MapDistrictSelectorService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! projects/map-district-selector/src/public-api */ "./projects/map-district-selector/src/public-api.ts");
/* harmony import */ var projects_map_district_selector_src_lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! projects/map-district-selector/src/lib/map-district-selector.token */ "./projects/map-district-selector/src/lib/map-district-selector.token.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: projects_map_district_selector_src_lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_6__["GEO_JSON_API_PATH"], useValue: 'assets' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_5__["MapDistrictSelectorModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_5__["MapDistrictSelectorModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    projects_map_district_selector_src_public_api__WEBPACK_IMPORTED_MODULE_5__["MapDistrictSelectorModule"]
                ],
                providers: [
                    { provide: projects_map_district_selector_src_lib_map_district_selector_token__WEBPACK_IMPORTED_MODULE_6__["GEO_JSON_API_PATH"], useValue: 'assets' }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\22725\Desktop\front-end\angular\map-district-selector-doc\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map