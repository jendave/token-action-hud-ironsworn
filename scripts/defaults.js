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
            {
                nestId: 'asset',
                id: 'asset',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeAsset'),
                groups: [
                    { ...groups.paths, nestId: 'asset_path' },
                    { ...groups.companions, nestId: 'asset_companion' },
                    { ...groups.rituals, nestId: 'asset_ritual' },
                    { ...groups.deeds, nestId: 'asset_deed' },
                    { ...groups.modules, nestId: 'asset_modules' },
                    { ...groups.commandVehicles, nestId: 'asset_commandVehicles' },
                    { ...groups.supportVehicles, nestId: 'asset_supportVehicles' },
                    { ...groups.combatTalents, nestId: 'asset_combatTalents' }
                ]
            },
            {
                nestId: 'progress',
                id: 'progress',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubtypeProgress'),
                groups: [
                    { ...groups.progress, nestId: 'progress_progress' },
                    { ...groups.vows, nestId: 'progress_vow' }
                ]
            },
            {
                nestId: 'connection',
                id: 'connection',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubtypeConnection'),
                groups: [
                    { ...groups.connections, nestId: 'connection_connection' }
                ]
            },
            {
                nestId: 'stat',
                id: 'stat',
                name: coreModule.api.Utils.i18n('IRONSWORN.Stats'),
                groups: [
                    { ...groups.stats, nestId: 'stat_stat' }
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
