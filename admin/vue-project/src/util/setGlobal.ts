import {type App, createApp} from 'vue';
//@ts-ignore
import * as ElementPlusIconsVue from '@element-plus/icons-vue';

export function useElIcon(app: App) {
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        //@ts-ignore
        app.component(key, component)
    }
}
