import { Injectable, ViewContainerRef } from '@angular/core';
import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { PanelComponent } from './components/panel/panel.component';
import { OverlayOptions } from './map-district-selector.types';

@Injectable()
export class MapDistrictSelectorService {
  private overlayRef: OverlayRef;
  constructor(
    public overlay: Overlay
  ) { }

  open(options: ViewContainerRef | OverlayOptions): void {
    if (options instanceof ViewContainerRef) {
      options = { viewContainerRef: options };
    }
    const { viewContainerRef, hasBackdrop, disableClose } = options;
    const config = new OverlayConfig();
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
    this.overlayRef.attach(new ComponentPortal(PanelComponent, viewContainerRef));
  }

  close(): void {
    this.overlayRef.dispose();
  }
}
