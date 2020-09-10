import { ViewContainerRef } from '@angular/core';

export type OverlayOptions = {
    viewContainerRef: ViewContainerRef,
    hasBackdrop?: boolean,
    disableClose?: boolean
};

export type GeoDataType = {
    adcode?: number,
    level?: string,
    name?: string,
    childrenNum?: number,
    center?: number[]
};


export type MapSelectResultType = {
    province: GeoDataType,
    city: GeoDataType,
    district: GeoDataType
};

export class MapTheme {
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

export class MapSelectResult {
    constructor(
        public province: GeoDataType = null,
        public city: GeoDataType = null,
        public district: GeoDataType = null
    ) { }

    private fmtData(data: GeoDataType): any {
        return data ? { name: data.name, adcode: data.adcode } : null;
    }

    setProvince(province): void {
        this.province = { ...province };
    }
    setCity(city): void {
        this.city = { ...city };
    }
    setDistrict(district): void {
        this.district = { ...district };
    }

    clear(type: 'province' | 'city' | 'district'): void {
        this[type] = null;
    }

    getResult(): MapSelectResultType {
        return {
            province: this.fmtData(this.province),
            city: this.fmtData(this.city),
            district: this.fmtData(this.district)
        };
    }
}

export const MUNICIPALITIES = [
    110000, // 北京
    120000, // 天津
    500000, // 重庆
    310000, // 上海
    810000, // 香港
    820000, // 澳门
];

export const HAINAN = 460000;
