//----------- Setting for Project ---------------------
const uiFolderPath = '../../src/layouts/contents/pages' // Page source Base Path
const pageRouteFilePath = '../../src/systems/router/pageRoutes.js' // Router Page file Path
const menuMockFilePath = '../mocks/api/menu.json' // Menu Mockup data json file path
//-----------------------------------------------------
const fs = require('fs')
const glob = require('glob')
const path = require('path')

const pageFolderPath = path.join(__dirname, uiFolderPath).replace(/\\/g, '/');
const pageRouterPath = path.join(__dirname, pageRouteFilePath).replace(/\\/g, '/');
const menuMockPath = path.join(__dirname, menuMockFilePath).replace(/\\/g, '/');
const srcFolderPath = path.join(__dirname, '../../src').replace(/\\/g, '/');

let pageRoutes = 'export default [';
let menus = {}
let menuid = 1

glob.sync(pageFolderPath.concat('/**/*.vue')).forEach((pagePath) => {

    const routePath = pagePath.replace(pageFolderPath, '/page').replace(/.vue/g,'')

    pageRoutes += `{
        path: '/:menuid${routePath}',
        name: '${routePath}',
        component: () => import('@${pagePath.substr(srcFolderPath.length)}'),
        meta: {
        requiresAuth: true
        }
    },`

    const menuRoutes = pagePath.replace(pageFolderPath, '').split('/').splice(1)
    menuRoutes.reduce((parent, current) => {
        const pathKey = parent + '/' + current

        if (!menus[pathKey] && !(!parent && current.includes('.vue'))) {

            let newMenuData = {
                id: menuid,
                label: current.includes('.vue') ? current.replace(/\.vue/g,'') : current.toUpperCase(),
                order: '00000',
                pageid: 'P' + menuid
            }

            if (current.includes('.vue')) {
                newMenuData.route = '/' + newMenuData.id + '/page' + pathKey.replace(/\.vue/g,'')
            }

            if(menus[parent]) newMenuData.parent_id = menus[parent].id
            menus[pathKey] = newMenuData

            menuid++
        }

        return pathKey
    }, '')

}, {})

pageRoutes += ']'

let menuDatas = {
    "/menu":
        {
            "menus": Object.values(menus)
        }
}

// Create Page Router File
fs.writeFileSync(pageRouterPath, pageRoutes)

// Create Menu Data File
fs.writeFileSync(menuMockPath, JSON.stringify(menuDatas, null, 4))