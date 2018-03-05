import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartComponent, CartListComponent } from '.';
import { ProcessOrderFormComponent } from './reactive-forms/process-order-form/process-order-form.component';

const routes: Routes = [
    {
        path: 'cart',
        component: CartComponent,
        children: [
            {
                path: 'userdetails',
                component: ProcessOrderFormComponent
            },
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

export let cartRouterComponents = [CartComponent, CartListComponent, ProcessOrderFormComponent];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class CartRoutingModule { }
