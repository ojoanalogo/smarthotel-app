"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_sidedrawer_1 = require("nativescript-sidedrawer");
var colorModule = require("tns-core-modules/color");
var page_1 = require("ui/page");
var nativescript_ngx_fonticon_1 = require("nativescript-ngx-fonticon");
var ComponenteMenu = (function () {
    function ComponenteMenu(page, icon) {
        this.page = page;
        this.icon = icon;
        nativescript_sidedrawer_1.TnsSideDrawer.build({
            templates: [{
                    title: 'Inicio',
                }, {
                    title: 'Notas',
                }, {
                    title: 'Configuración',
                }],
            title: 'Alfonso Reyes Cortés',
            subtitle: 'hola@mrarc.xyz',
            headerBackgroundColor: new colorModule.Color("#1976d2"),
            backgroundColor: new colorModule.Color("#fff"),
            textColor: new colorModule.Color("#000"),
            listener: function (index) {
                //this.i = index
                console.log("Cual se presiono =>" + index);
            },
            context: this,
        });
    }
    ComponenteMenu.prototype.ngOnInit = function () {
    };
    ComponenteMenu = __decorate([
        core_1.Component({
            selector: 'menu',
            templateUrl: 'pages/menu/menu.html',
            styleUrls: ["pages/menu/menu-global.css", "pages/menu/menu.css"]
        }),
        __metadata("design:paramtypes", [page_1.Page, nativescript_ngx_fonticon_1.TNSFontIconService])
    ], ComponenteMenu);
    return ComponenteMenu;
}());
exports.ComponenteMenu = ComponenteMenu;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5jb21wb25lbnRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWVudS5jb21wb25lbnRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELG1FQUF3RDtBQUN4RCxvREFBc0Q7QUFDdEQsZ0NBQStCO0FBQy9CLHVFQUErRDtBQVEvRDtJQUNFLHdCQUFvQixJQUFVLEVBQVUsSUFBeUI7UUFBN0MsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLFNBQUksR0FBSixJQUFJLENBQXFCO1FBQy9ELHVDQUFhLENBQUMsS0FBSyxDQUFDO1lBQ2xCLFNBQVMsRUFBRSxDQUFDO29CQUNWLEtBQUssRUFBRSxRQUFRO2lCQUNoQixFQUFFO29CQUNELEtBQUssRUFBRSxPQUFPO2lCQUNmLEVBQUU7b0JBQ0QsS0FBSyxFQUFFLGVBQWU7aUJBQ3ZCLENBQUM7WUFDRixLQUFLLEVBQUUsc0JBQXNCO1lBQzdCLFFBQVEsRUFBRSxnQkFBZ0I7WUFDMUIscUJBQXFCLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQztZQUN2RCxlQUFlLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUM5QyxTQUFTLEVBQUUsSUFBSSxXQUFXLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxRQUFRLEVBQUUsVUFBQyxLQUFLO2dCQUNkLGdCQUFnQjtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxxQkFBcUIsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUM3QyxDQUFDO1lBQ0QsT0FBTyxFQUFFLElBQUk7U0FDZCxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0QsaUNBQVEsR0FBUjtJQUVFLENBQUM7SUF4QlEsY0FBYztRQUwxQixnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLE1BQU07WUFDaEIsV0FBVyxFQUFFLHNCQUFzQjtZQUNuQyxTQUFTLEVBQUUsQ0FBQyw0QkFBNEIsRUFBRSxxQkFBcUIsQ0FBQztTQUNqRSxDQUFDO3lDQUUwQixXQUFJLEVBQWlCLDhDQUFrQjtPQUR0RCxjQUFjLENBMEIxQjtJQUFELHFCQUFDO0NBQUEsQUExQkQsSUEwQkM7QUExQlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUbnNTaWRlRHJhd2VyIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNpZGVkcmF3ZXInO1xyXG5pbXBvcnQgKiBhcyBjb2xvck1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9jb2xvclwiO1xyXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSBcInVpL3BhZ2VcIjtcclxuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5neC1mb250aWNvbic7XHJcbmltcG9ydCAqIGFzIGRpYWxvZ3MgZnJvbSBcInVpL2RpYWxvZ3NcIjtcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnbWVudScsXHJcbiAgdGVtcGxhdGVVcmw6ICdwYWdlcy9tZW51L21lbnUuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbXCJwYWdlcy9tZW51L21lbnUtZ2xvYmFsLmNzc1wiLCBcInBhZ2VzL21lbnUvbWVudS5jc3NcIl1cclxufSlcclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudGVNZW51IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgaWNvbiA6IFROU0ZvbnRJY29uU2VydmljZSkge1xyXG4gICAgVG5zU2lkZURyYXdlci5idWlsZCh7XHJcbiAgICAgIHRlbXBsYXRlczogW3tcclxuICAgICAgICB0aXRsZTogJ0luaWNpbycsXHJcbiAgICAgIH0sIHtcclxuICAgICAgICB0aXRsZTogJ05vdGFzJyxcclxuICAgICAgfSwge1xyXG4gICAgICAgIHRpdGxlOiAnQ29uZmlndXJhY2nDs24nLFxyXG4gICAgICB9XSxcclxuICAgICAgdGl0bGU6ICdBbGZvbnNvIFJleWVzIENvcnTDqXMnLFxyXG4gICAgICBzdWJ0aXRsZTogJ2hvbGFAbXJhcmMueHl6JyxcclxuICAgICAgaGVhZGVyQmFja2dyb3VuZENvbG9yOiBuZXcgY29sb3JNb2R1bGUuQ29sb3IoXCIjMTk3NmQyXCIpLFxyXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6IG5ldyBjb2xvck1vZHVsZS5Db2xvcihcIiNmZmZcIiksXHJcbiAgICAgIHRleHRDb2xvcjogbmV3IGNvbG9yTW9kdWxlLkNvbG9yKFwiIzAwMFwiKSxcclxuICAgICAgbGlzdGVuZXI6IChpbmRleCkgPT4ge1xyXG4gICAgICAgIC8vdGhpcy5pID0gaW5kZXhcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkN1YWwgc2UgcHJlc2lvbm8gPT5cIiArIGluZGV4KTtcclxuICAgICAgfSxcclxuICAgICAgY29udGV4dDogdGhpcyxcclxuICAgIH0pO1xyXG4gIH1cclxuICBuZ09uSW5pdCgpIHtcclxuXHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==