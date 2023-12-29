import { loadRemoteModule } from '@angular-architects/module-federation';
import { Component, ComponentRef, ElementRef, Input, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import * as React from 'react';

import { createRoot } from "react-dom/client";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  updateCurrentUser(user: any) {
    //To Be Implemented Later
  }

  @Input() user: any = { name: "John", email: "john.dou@gmail.com" };
  @ViewChild('headerPlaceHolder', { static: true }) containerRef!: ElementRef;
  root!: any;


  
  @ViewChild('footerPlaceHolder', { read: ViewContainerRef })
  footerContainerRef!: ViewContainerRef;

  @ViewChild('sideNavPlaceHolder', { read: ViewContainerRef })
  sideNavContainerRef!: ViewContainerRef;

  @ViewChild('itemDetailsPlaceHolder', { read: ViewContainerRef })
  itemDetailsContainerRef!: ViewContainerRef;

  constructor(private ref: ViewContainerRef,private renderer: Renderer2) {
    this.updateCurrentUser = this.updateCurrentUser.bind(this);
  }

  async ngOnInit() {
    
    const { TopNavBarComponent } = await loadRemoteModule({
      remoteEntry: 'https://saswatiaccenture.github.io/Angular-Footer/topNavHeader.js',
      remoteName: 'topNavHeader',
      exposedModule: 'TopNavBarComponent',
    });

    

    const { SideNavBarComponent } = await loadRemoteModule({
      remoteEntry: 'https://saswatiaccenture.github.io/Angular-SideNav/sideNavBarRemote.js',
      remoteName: 'sideNavBarRemote',
      exposedModule: 'SideNavExposed',
    });

    const { ItemDetailsComponent } = await loadRemoteModule({
      remoteEntry: 'https://saswatiaccenture.github.io/AngularItemDetails/itemDetailsRemote.js',
      remoteName: 'itemDetailsRemote',
      exposedModule: 'ItemDetailsComponent',
    });

    

    this.footerContainerRef.createComponent(TopNavBarComponent);
    this.sideNavContainerRef.createComponent(SideNavBarComponent);
    this.itemDetailsContainerRef.createComponent(ItemDetailsComponent)
  }

 ngAfterViewInit() {
  this.root = createRoot(this.containerRef.nativeElement);
  this.root.render("Loading script...");
  try {
    import("topNavigation/TopNav").then((val) => {
      this.root.render(
        React.createElement(val.App, {
          ...this.user,
          onClick: this.updateCurrentUser,
        })
      );
    });
  } catch (error) {
    console.log("Erorr", error);
  }
}
 

} 

