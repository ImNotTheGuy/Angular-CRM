var ROUTES_INDEX = {"name":"<root>","kind":"module","className":"AppModule","children":[{"name":"routes","filename":"src/app/app-routing.module.ts","module":"AppRoutingModule","children":[{"path":"","redirectTo":"","pathMatch":"full"},{"path":"orders","loadChildren":"./orders/orders.module#OrdersModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/orders/orders-routing.module.ts","module":"OrdersRoutingModule","children":[{"path":"","component":"PageListOrdersComponent"},{"path":"edit","component":"PageEditOrderComponent"},{"path":"add","component":"PageAddOrderComponent"}],"kind":"module"}],"module":"OrdersModule"}]},{"path":"clients","loadChildren":"./clients/clients.module#ClientsModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/clients/clients-routing.module.ts","module":"ClientsRoutingModule","children":[{"path":"","component":"PageListClientsComponent"},{"path":"add","component":"PageAddClientComponent"},{"path":"edit","component":"PageEditClientComponent"}],"kind":"module"}],"module":"ClientsModule"}]},{"path":"login","loadChildren":"./login/login.module#LoginModule","children":[{"kind":"module","children":[{"name":"routes","filename":"src/app/login/login-routing.module.ts","module":"LoginRoutingModule","children":[{"path":"","component":"PageSignInComponent"},{"path":"signup","component":"PageSignUpComponent"},{"path":"reset","component":"PageResetPasswordComponent"},{"path":"forgot","component":"PageForgotPasswordComponent"}],"kind":"module"}],"module":"LoginModule"}]},{"path":"**","loadChildren":"./page-not-found/page-not-found-routing.module#PageNotFoundRoutingModule"}],"kind":"module"}]}