//----------- Setting for Project ---------------------
const apiUrlBasePath = '/api' // API Base URL
//-----------------------------------------------------

const fs = require('fs')
const glob = require('glob')
const path = require('path')

const mockupApiPath = path.join(__dirname, '/api').replace(/\\/g, '/');

const getMockApiInfo = (path, key) => {
    const rawData = fs.readFileSync(path)
    const mockApiInfos = JSON.parse(rawData)

    if (key) return mockApiInfos[key]
    else return mockApiInfos
}

let apiInfos = {}

glob.sync(mockupApiPath.concat('/**/*.json')).forEach((fullPath) => {

    for (key in getMockApiInfo(fullPath)) {
        const filePath = fullPath
        const apiKey = key

        apiInfos[apiUrlBasePath.concat(apiKey)] = () => {
            return getMockApiInfo(filePath, apiKey)
        }
    }
}, {})

// apiInfos['/api/menu'] = () => {
//     //----------- Setting for Project ---------------------
//     const uiFolderPath = '../../src/layouts/contents/pages' // Page source Base Path
//     const pageRouteFilePath = '../../src/systems/router/pageRoutes.js' // Router Page file Path
//     //-----------------------------------------------------

//     const pageFolderPath = path.join(__dirname, uiFolderPath).replace(/\\/g, '/');
//     const pageRouterPath = path.join(__dirname, pageRouteFilePath).replace(/\\/g, '/');

//     let pageRoutes = 'export default [';
//     let menus = {}
//     let menuid = 1

//     glob.sync(pageFolderPath.concat('/**/*.vue')).forEach((pagePath) => {

//         const routePath = pagePath.replace(pageFolderPath, '/page').replace(/.vue/g,'')

//         pageRoutes += `{
//             path: '/:menuid${routePath}',
//             name: '${routePath}',
//             component: () => import('${pagePath}'),
//             meta: {
//             requiresAuth: true
//             }
//         },`

//         const menuRoutes = pagePath.replace(pageFolderPath, '').split('/').splice(1)
//         menuRoutes.reduce((parent, current) => {
//             const pathKey = parent + '/' + current

//             if (!menus[pathKey] && !(!parent && current.includes('.vue'))) {

//                 let newMenuData = {
//                     id: menuid,
//                     label: current.replace(/\.vue/g,''),
//                     order: '00000',
//                     pageid: 'P' + menuid,
//                     route: current.includes('.vue') ? '/page' + pathKey.replace(/\.vue/g,'') : '/page/Empty'
//                 }

//                 if(menus[parent]) newMenuData.parent_id = menus[parent].id
//                 menus[pathKey] = newMenuData

//                 menuid++
//             }

//             return pathKey
//         }, '')

//     }, {})

//     pageRoutes += ']'

//     const routeFileContent = fs.readFileSync(pageRouterPath, { encoding: 'utf8' })

//     if (routeFileContent != pageRoutes) {
//         // Create Page Router File
//         fs.writeFileSync(pageRouterPath, pageRoutes, { encoding: 'utf8' })
//         return {}
//     }

//     let menuDatas = {
//         "menus": Object.values(menus)
//     }

//     return menuDatas
// }

module.exports = apiInfos