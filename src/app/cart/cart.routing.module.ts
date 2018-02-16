import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent } from '.';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        children: [
        //   {
        //     path: 'add',
        //     component: UserFormComponent
        //   },
        //   {
        //     path: 'edit/:userID',
        //     component: UserFormComponent,
        //   },
        {
            path: '',
            component: CartListComponent
        },
        ]
    }
];

export let cartRouterComponents = [CartComponent, CartListComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
