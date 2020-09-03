import { ViewContainerRef } from '@angular/core';

export type OverlayOptions = {
    viewContainerRef: ViewContainerRef,
    hasBackdrop?: boolean,
    disableClose?: boolean
};
