import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'loading', loadChildren: () => import('./pages/loading/loading.module').then(m => m.LoadingModule) },
  { path: 'bacheca', loadChildren: () => import('./pages/bacheca/bacheca.module').then(m => m.BachecaModule) },
  { path: 'bacheca-card', loadChildren: () => import('./pages/bacheca-card/bacheca-card.module').then(m => m.BachecaCardModule) },
  { path: 'bacheca-details', loadChildren: () => import('./pages/bacheca-details/bacheca-details.module').then(m => m.BachecaDetailsModule) },
  { path: 'bacheca-miei', loadChildren: () => import('./pages/bacheca-miei/bacheca-miei.module').then(m => m.BachecaMieiModule) },
  { path: 'bacheca-nuovo', loadChildren: () => import('./pages/bacheca-nuovo/bacheca-nuovo.module').then(m => m.BachecaNuovoModule) },
  { path: 'bacheca-preferiti', loadChildren: () => import('./pages/bacheca-preferiti/bacheca-preferiti.module').then(m => m.BachecaPreferitiModule) },
  { path: 'chat', loadChildren: () => import('./pages/chat/chat.module').then(m => m.ChatModule) },
  { path: 'chat-card', loadChildren: () => import('./pages/chat-card/contact-card.module').then(m => m.ChatCardModule) },
  { path: 'circolari', loadChildren: () => import('./pages/circolari/circolari.module').then(m => m.CircolariPageModule) },
  { path: 'circolari-card', loadChildren: () => import('./pages/circolari-card/circolari-card.module').then(m => m.CircolariCardModule) },
  { path: 'circolari-details', loadChildren: () => import('./pages/circolari-details/circolari-details.module').then(m => m.CircolariDetailsModule) },
  { path: 'comunicazioni', loadChildren: () => import('./pages/comunicazioni/comunicazioni.module').then(m => m.ComunicazioniPageModule) },
  { path: 'comunicazioni-card', loadChildren: () => import('./pages/comunicazioni-card/comunicazioni-card.module').then(m => m.ComunicazioniCardModule) },
  { path: 'comunicazioni-details', loadChildren: () => import('./pages/comunicazioni-details/comunicazioni-details.module').then(m => m.ComunicazioniDetailsModule) },
  { path: 'contact-card', loadChildren: () => import('./pages/contact-card/contact-card.module').then(m => m.ContactCardModule) },
  { path: 'contact-details', loadChildren: () => import('./pages/contact-details/contact-details.module').then(m => m.ContactDetailsModule) },
  { path: 'contacts', loadChildren: () => import('./pages/contacts/contacts.module').then(m => m.ContactsModule) },
  { path: 'documentale', loadChildren: () => import('./pages/documentale/documentale.module').then(m => m.DocumentaleModule) },
  { path: 'documentale-card', loadChildren: () => import('./pages/documentale-card/documentale-card.module').then(m => m.DocumentaleCardModule) },
  { path: 'documentale-categorie', loadChildren: () => import('./pages/documentale-categorie/documentale-categorie.module').then(m => m.DocumentaleCategorieModule) },
  { path: 'documentale-details', loadChildren: () => import('./pages/documentale-details/documentale-details.module').then(m => m.DocumentaleDetailsModule) },
  { path: 'documentale-lista', loadChildren: () => import('./pages/documentale-lista/documentale-lista.module').then(m => m.DocumentaleListaModule) },
  { path: 'home-com', loadChildren: () => import('./pages/home-com/home-com.module').then(m => m.HomeComModule) },
  { path: 'home-mess', loadChildren: () => import('./pages/home-mess/home-mess.module').then(m => m.HomeMessModule) },
  { path: 'list-object', loadChildren: () => import('./pages/list-object/list-object.module').then(m => m.ListObjectModule) },
  { path: 'messaggi', loadChildren: () => import('./pages/messaggi/messaggi.module').then(m => m.MessaggiModule) },
  { path: 'messaggi-card', loadChildren: () => import('./pages/messaggi-card/messaggi-card.module').then(m => m.MessaggiCardModule) },
  { path: 'messaggi-cestino', loadChildren: () => import('./pages/messaggi-cestino/messaggi-cestino.module').then(m => m.MessaggiCestinoModule) },
  { path: 'messaggi-details', loadChildren: () => import('./pages/messaggi-details/messaggi-details.module').then(m => m.MessaggiDetailsModule) },
  { path: 'messaggi-importanti', loadChildren: () => import('./pages/messaggi-importanti/messaggi-importanti.module').then(m => m.MessaggiImportantiModule) },
  { path: 'messaggi-nuovo', loadChildren: () => import('./pages/messaggi-nuovo/messaggi-nuovo.module').then(m => m.MessaggiNuovoModule) },
  { path: 'messaggi-uscita', loadChildren: () => import('./pages/messaggi-uscita/messaggi-uscita.module').then(m => m.MessaggiUscitaModule) },
  { path: 'mychat', loadChildren: () => import('./pages/mychat/mychat.module').then(m => m.MyChatModule) },
  { path: 'news', loadChildren: () => import('./pages/news/news.module').then(m => m.NewsModule) },
  { path: 'news-card', loadChildren: () => import('./pages/news-card/news-card.module').then(m => m.NewsCardModule) },
  { path: 'news-details', loadChildren: () => import('./pages/news-details/news-details.module').then(m => m.NewsDetailsModule) },
  { path: 'profilo', loadChildren: () => import('./pages/profilo/profilo.module').then(m => m.ProfiloModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
