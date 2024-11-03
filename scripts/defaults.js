import { GROUP } from './constants.js'

/**
 * Default layout and groups
 */
export let DEFAULTS = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    const groups = GROUP
    Object.values(groups).forEach(group => {
        group.name = coreModule.api.Utils.i18n(group.name)
        group.listName = `Group: ${coreModule.api.Utils.i18n(group.listName ?? group.name)}`
    })
    const groupsArray = Object.values(groups)
    DEFAULTS = {
        layout: [
            // {
            //     nestId: 'progress',
            //     id: 'progress',
            //     name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubtypeProgress'),
            //     groups: [
            //         { ...groups.progress, nestId: 'progress_progress' },
            //         { ...groups.vow, nestId: 'progress_vow' }
            //     ]
            // },
            // {
            //     nestId: 'connection',
            //     id: 'connection',
            //     name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubTypeConnection'),
            //     groups: [
            //         { ...groups.progress, nestId: 'connection_connnection' }
            //     ]
            // },
            {
                nestId: 'stats',
                id: 'stats',
                name: coreModule.api.Utils.i18n('IRONSWORN.Stats'),
                groups: [
                    { ...groups.stats, nestId: 'stats_stats' }
                ]
            }
            // {
            //     nestId: 'utility',
            //     id: 'utility',
            //     name: coreModule.api.Utils.i18n('tokenActionHud.utility'),
            //     groups: [
            //         { ...groups.combat, nestId: 'utility_combat' },
            //         { ...groups.token, nestId: 'utility_token' },
            //         { ...groups.rests, nestId: 'utility_rests' },
            //         { ...groups.utility, nestId: 'utility_utility' }
            //     ]
            // }
        ],
        groups: groupsArray
    }
})
