'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">client-order-crm documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-e0d953c1ddc29a4aa3311a8401440191c43bf32951f0760af9b6973be9008cd229d8b3777d30b65299b99224a486fd6684d2b59e49749482f05e98db26abccc8"' : 'data-target="#xs-components-links-module-AppModule-e0d953c1ddc29a4aa3311a8401440191c43bf32951f0760af9b6973be9008cd229d8b3777d30b65299b99224a486fd6684d2b59e49749482f05e98db26abccc8"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-e0d953c1ddc29a4aa3311a8401440191c43bf32951f0760af9b6973be9008cd229d8b3777d30b65299b99224a486fd6684d2b59e49749482f05e98db26abccc8"' :
                                            'id="xs-components-links-module-AppModule-e0d953c1ddc29a4aa3311a8401440191c43bf32951f0760af9b6973be9008cd229d8b3777d30b65299b99224a486fd6684d2b59e49749482f05e98db26abccc8"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link" >AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsModule.html" data-type="entity-link" >ClientsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ClientsModule-4c371b3a548ec594369eb353efef8670e51ddd9f448ca4ad0cd966388a57f2d9e3b551cc860caa041a066f26085ab1ef08b6815f284770e9e259e257fa69461a"' : 'data-target="#xs-components-links-module-ClientsModule-4c371b3a548ec594369eb353efef8670e51ddd9f448ca4ad0cd966388a57f2d9e3b551cc860caa041a066f26085ab1ef08b6815f284770e9e259e257fa69461a"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ClientsModule-4c371b3a548ec594369eb353efef8670e51ddd9f448ca4ad0cd966388a57f2d9e3b551cc860caa041a066f26085ab1ef08b6815f284770e9e259e257fa69461a"' :
                                            'id="xs-components-links-module-ClientsModule-4c371b3a548ec594369eb353efef8670e51ddd9f448ca4ad0cd966388a57f2d9e3b551cc860caa041a066f26085ab1ef08b6815f284770e9e259e257fa69461a"' }>
                                            <li class="link">
                                                <a href="components/PageAddClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditClientComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditClientComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListClientsComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListClientsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ClientsRoutingModule.html" data-type="entity-link" >ClientsRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link" >CoreModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CoreModule-13cad321e3f311ac916989b8692819996631909fcaf1eb2245d6558ac6eb7c6b3cd1b587549b1d38f598a759811debee35e5bc01fda529194872cae9b7db4df2"' : 'data-target="#xs-components-links-module-CoreModule-13cad321e3f311ac916989b8692819996631909fcaf1eb2245d6558ac6eb7c6b3cd1b587549b1d38f598a759811debee35e5bc01fda529194872cae9b7db4df2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CoreModule-13cad321e3f311ac916989b8692819996631909fcaf1eb2245d6558ac6eb7c6b3cd1b587549b1d38f598a759811debee35e5bc01fda529194872cae9b7db4df2"' :
                                            'id="xs-components-links-module-CoreModule-13cad321e3f311ac916989b8692819996631909fcaf1eb2245d6558ac6eb7c6b3cd1b587549b1d38f598a759811debee35e5bc01fda529194872cae9b7db4df2"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HeaderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >NavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/IconsModule.html" data-type="entity-link" >IconsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-IconsModule-40c05a380cdb3ba7b23fbbdf85df1ad37ccf6416413312154b84a96f4c83134d16537d701315477f8db8739d0cd5e535d2a99a31697e3dd7c1b33728a3348203"' : 'data-target="#xs-components-links-module-IconsModule-40c05a380cdb3ba7b23fbbdf85df1ad37ccf6416413312154b84a96f4c83134d16537d701315477f8db8739d0cd5e535d2a99a31697e3dd7c1b33728a3348203"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-IconsModule-40c05a380cdb3ba7b23fbbdf85df1ad37ccf6416413312154b84a96f4c83134d16537d701315477f8db8739d0cd5e535d2a99a31697e3dd7c1b33728a3348203"' :
                                            'id="xs-components-links-module-IconsModule-40c05a380cdb3ba7b23fbbdf85df1ad37ccf6416413312154b84a96f4c83134d16537d701315477f8db8739d0cd5e535d2a99a31697e3dd7c1b33728a3348203"' }>
                                            <li class="link">
                                                <a href="components/IconCloseComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconCloseComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconDeleteComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconDeleteComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconEditComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconEditComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/IconNavComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >IconNavComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginModule.html" data-type="entity-link" >LoginModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LoginModule-d5d1e429b3a5b78efc70d319d118fb6e051b04c817ddabc59e9640377c89c2e72c1fdcd9c2fe320f5fd2a5ae2dfd1ecce2c597528de3ded74a1e95ff992bdf4d"' : 'data-target="#xs-components-links-module-LoginModule-d5d1e429b3a5b78efc70d319d118fb6e051b04c817ddabc59e9640377c89c2e72c1fdcd9c2fe320f5fd2a5ae2dfd1ecce2c597528de3ded74a1e95ff992bdf4d"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LoginModule-d5d1e429b3a5b78efc70d319d118fb6e051b04c817ddabc59e9640377c89c2e72c1fdcd9c2fe320f5fd2a5ae2dfd1ecce2c597528de3ded74a1e95ff992bdf4d"' :
                                            'id="xs-components-links-module-LoginModule-d5d1e429b3a5b78efc70d319d118fb6e051b04c817ddabc59e9640377c89c2e72c1fdcd9c2fe320f5fd2a5ae2dfd1ecce2c597528de3ded74a1e95ff992bdf4d"' }>
                                            <li class="link">
                                                <a href="components/PageForgotPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageForgotPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageResetPasswordComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageResetPasswordComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignInComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignInComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageSignUpComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageSignUpComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LoginRoutingModule.html" data-type="entity-link" >LoginRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersModule.html" data-type="entity-link" >OrdersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' : 'data-target="#xs-components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' :
                                            'id="xs-components-links-module-OrdersModule-d9acffdd3bbc3581ee3216e27669002cd745e9285118871f02df6607f754d71dfba2b10cc10de6222a87513af47012f1b42908b1e3d81559ca86c78c85995ddb"' }>
                                            <li class="link">
                                                <a href="components/PageAddOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageAddOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageEditOrderComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageEditOrderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PageListOrdersComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PageListOrdersComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/OrdersRoutingModule.html" data-type="entity-link" >OrdersRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundModule.html" data-type="entity-link" >PageNotFoundModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/PageNotFoundRoutingModule.html" data-type="entity-link" >PageNotFoundRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link" >SharedModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' : 'data-target="#xs-components-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' :
                                            'id="xs-components-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                            <li class="link">
                                                <a href="components/BtnComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >BtnComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TableLightComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TableLightComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' : 'data-target="#xs-directives-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' :
                                        'id="xs-directives-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                        <li class="link">
                                            <a href="directives/StateDirective.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >StateDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' : 'data-target="#xs-pipes-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' :
                                            'id="xs-pipes-links-module-SharedModule-a7240cbf14a40e4530dc0878260a5baaced5abee91d86b0e836927193bc676785711d1a95d4d4f7f31baa23bd406e20fd25f5d7b6a3a4fea83f5893ece85c12c"' }>
                                            <li class="link">
                                                <a href="pipes/TotalPipe.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TotalPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TemplatesModule.html" data-type="entity-link" >TemplatesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TemplatesModule-e9090a176fc8b28f3525de62e644d09eb3a9d57f3f1fd7cf579e1d435ae71ff67aa8ba528e68dbdfac8a255eb1e764e26c58c48387c9cc2e65a24b651c056ef9"' : 'data-target="#xs-components-links-module-TemplatesModule-e9090a176fc8b28f3525de62e644d09eb3a9d57f3f1fd7cf579e1d435ae71ff67aa8ba528e68dbdfac8a255eb1e764e26c58c48387c9cc2e65a24b651c056ef9"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TemplatesModule-e9090a176fc8b28f3525de62e644d09eb3a9d57f3f1fd7cf579e1d435ae71ff67aa8ba528e68dbdfac8a255eb1e764e26c58c48387c9cc2e65a24b651c056ef9"' :
                                            'id="xs-components-links-module-TemplatesModule-e9090a176fc8b28f3525de62e644d09eb3a9d57f3f1fd7cf579e1d435ae71ff67aa8ba528e68dbdfac8a255eb1e764e26c58c48387c9cc2e65a24b651c056ef9"' }>
                                            <li class="link">
                                                <a href="components/TemplateContainerComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateContainerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFormComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFormComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/TemplateFullWidthComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >TemplateFullWidthComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/UiModule.html" data-type="entity-link" >UiModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-UiModule-e606a9db1dfd670592a2a25ce9cc21cbbb62366c03c70c7b1450891626415ec00d9a53eecb8d06fabe63da90a8969756743f161a68207669d8e26d5587b6f506"' : 'data-target="#xs-components-links-module-UiModule-e606a9db1dfd670592a2a25ce9cc21cbbb62366c03c70c7b1450891626415ec00d9a53eecb8d06fabe63da90a8969756743f161a68207669d8e26d5587b6f506"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-UiModule-e606a9db1dfd670592a2a25ce9cc21cbbb62366c03c70c7b1450891626415ec00d9a53eecb8d06fabe63da90a8969756743f161a68207669d8e26d5587b6f506"' :
                                            'id="xs-components-links-module-UiModule-e606a9db1dfd670592a2a25ce9cc21cbbb62366c03c70c7b1450891626415ec00d9a53eecb8d06fabe63da90a8969756743f161a68207669d8e26d5587b6f506"' }>
                                            <li class="link">
                                                <a href="components/UiComponent.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UiComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#components-links"' :
                            'data-target="#xs-components-links"' }>
                            <span class="icon ion-md-cog"></span>
                            <span>Components</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="components-links"' : 'id="xs-components-links"' }>
                            <li class="link">
                                <a href="components/PageNotFoundComponent.html" data-type="entity-link" >PageNotFoundComponent</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Client.html" data-type="entity-link" >Client</a>
                            </li>
                            <li class="link">
                                <a href="classes/Order.html" data-type="entity-link" >Order</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ClientsService.html" data-type="entity-link" >ClientsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/OrdersService.html" data-type="entity-link" >OrdersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/VersionService.html" data-type="entity-link" >VersionService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/ClientI.html" data-type="entity-link" >ClientI</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/OrderI.html" data-type="entity-link" >OrderI</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});