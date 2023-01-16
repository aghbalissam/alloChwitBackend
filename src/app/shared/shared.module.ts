import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ServicesComponent } from './services/services.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { DropMenuComponent } from './components/drop-menu/drop-menu.component';
import { LayoutBoxComponent } from './components/layout-box/layout-box.component';
import { LeftMenuComponent } from './components/left-menu/left-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { CartModalComponent } from './components/modal/cart-modal/cart-modal.component';
import { CartVariationComponent } from './components/modal/cart-variation/cart-variation.component';
import { NewsletterComponent } from './components/modal/newsletter/newsletter.component';
import { QuickViewComponent } from './components/modal/quick-view/quick-view.component';
import { SizeModalComponent } from './components/modal/size-modal/size-modal.component';
import { VideoModalComponent } from './components/modal/video-modal/video-modal.component';
import { AddressModalComponent } from './components/modal/address-modal/address-modal.component';
import { BreadcrumbSingleComponent } from './components/breadcrumb-single/breadcrumb-single.component';
import { UserAuthComponent } from './components/modal/user-auth/user-auth.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    BreadcrumbComponent,
    CategoriesComponent,
    DropMenuComponent,
    LayoutBoxComponent,
    LeftMenuComponent,
    MenuComponent,
    CartModalComponent,
    CartVariationComponent,
    NewsletterComponent,
    QuickViewComponent,
    SizeModalComponent,
    VideoModalComponent,
    AddressModalComponent,
    BreadcrumbSingleComponent,
    UserAuthComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    BreadcrumbComponent,
    LeftMenuComponent,
    AddressModalComponent,
    CartModalComponent,
    BreadcrumbSingleComponent,
    UserAuthComponent,
    QuickViewComponent
  ]
})
export class SharedModule { }
