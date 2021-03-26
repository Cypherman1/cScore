/**
 * This file is for asset installation. Do not delete this file.
 * If you delete it, the newly installed component will not work properly in WYSIWYG editor.
 * If you want to set the asset installation to a different file, please modify the .iderc.json file and the main.js file.
 */

import Vue from 'vue';
import uidevComponent from 'uidev-component/index'
import urFullGrid from 'uidev-component/components/element/urDataGrid/urFullGrid'

import ModuleBox from './boxes/ModuleBox'
import ModuleListBox from './boxes/ModuleListBox'
import ModuleTabBox from './boxes/ModuleTabBox'

Vue.use(uidevComponent);
Vue.component('ur-grid', urFullGrid);

Vue.component('module-box', ModuleBox);
Vue.component('module-list-box', ModuleListBox);
Vue.component('module-tab-box', ModuleTabBox);

// ** Import UI Dev Frame Component **/
import FrameInfo from './frames/Frame.json'
Vue.component('app-frame', () => import('./frames/' + FrameInfo.frame))