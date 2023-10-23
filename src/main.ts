import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { ParentComponent, EncapsulationParentComponent, HostParentComponent, AccessingElementsComponent, ContentProjectionParentComponent, DynamicRenderParentComponent } from './app/libs/components';
import { provideAnimations } from '@angular/platform-browser/animations';
import { CustomDirectiveExampleComponent, StructuralDirectiveExampleComponent } from './app/libs/directives';


bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
        {
            path: 'components',
            children: [
                {
                    path: '1',
                    component: ParentComponent
                },
                {
                    path: '2',
                    component: EncapsulationParentComponent
                },
                {
                    path: '3',
                    component: HostParentComponent
                },
                {
                    path: '4',
                    component: AccessingElementsComponent
                },
                {
                    path: '5',
                    component: ContentProjectionParentComponent
                },
                {
                    path: '6',
                    component: DynamicRenderParentComponent
                }
            ]
        },
        {
            path: 'directives',
            children: [
                {
                    path: '1',
                    component: CustomDirectiveExampleComponent
                },
                {
                    path: '2',
                    component: StructuralDirectiveExampleComponent
                }
            ]
        }
    ]),
    provideAnimations()
]
})
  .catch(err => console.error(err));
