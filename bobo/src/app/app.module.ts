import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {AppComponent} from "./app.component";
import {routes} from "./app.routes.module";
import {RouterModule} from "@angular/router";
import {SignupComponent} from "./signup/signup.component";

@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    declarations: [
        AppComponent,
        SignupComponent
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule {

}
