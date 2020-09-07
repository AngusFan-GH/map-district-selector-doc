import { ViewContainerRef } from '@angular/core';

export type OverlayOptions = {
    viewContainerRef: ViewContainerRef,
    hasBackdrop?: boolean,
    disableClose?: boolean
};

export type GeoDataType = {
    adcode: number,
    level: string,
    name: string,
    childrenNum: number
};
