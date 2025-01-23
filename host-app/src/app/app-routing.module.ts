import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: "", redirectTo: "/counter", pathMatch: "full"},
  {path: "counter", loadChildren: () => {
    return loadRemoteModule({
      remoteEntry: "http://localhost:4300/remoteEntry.js",
      remoteName: "remoteApp",
      exposedModule: "./CounterModule"
    }).then(m => m.CounterModule).catch(error => console.log(error));
  }}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
