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
                    { ...groups.path, nestId: 'asset_path' },
                    { ...groups.companion, nestId: 'asset_companion' },
                    { ...groups.ritual, nestId: 'asset_ritual' },
                    { ...groups.deed, nestId: 'asset_deed' },
                    { ...groups.module, nestId: 'asset_module' },
                    { ...groups.commandVehicle, nestId: 'asset_commandVehicle' },
                    { ...groups.supportVehicle, nestId: 'asset_supportVehicle' },
                    { ...groups.combatTalent, nestId: 'asset_combatTalent' }
                ]
            },
            {
                nestId: 'progress',
                id: 'progress',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubtypeProgress'),
                groups: [
                    { ...groups.progress, nestId: 'progress_progress' },
                    { ...groups.vow, nestId: 'progress_vow' }
                ]
            },
            {
                nestId: 'connection',
                id: 'connection',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.SubtypeConnection'),
                groups: [
                    { ...groups.connection, nestId: 'connection_connection' }
                ]
            },
            {
                nestId: 'stat',
                id: 'stat',
                name: coreModule.api.Utils.i18n('IRONSWORN.Stats'),
                groups: [
                    { ...groups.stat, nestId: 'stat_stat' }
                ]
            },
            {
                nestId: 'meter',
                id: 'meter',
                name: coreModule.api.Utils.i18n('tokenActionHud.ironsworn.meters'),
                groups: [
                    { ...groups.meter, nestId: 'meter_meter' }
                ]
            },
            {
                nestId: 'impact',
                id: 'impact',
                name: coreModule.api.Utils.i18n('IRONSWORN.Impacts'),
                groups: [
                    { ...groups.misfortune, nestId: 'impact_misfortune' },
                    { ...groups.lastingEffect, nestId: 'impact_lastingEffect' },
                    { ...groups.burden, nestId: 'impact_burden' },
                    { ...groups.vehicleTrouble, nestId: 'impact_vehicleTrouble' },
                    { ...groups.bane, nestId: 'impact_bane' },
                    { ...groups.condition, nestId: 'impact_condition' }
                ]
            },
            {
                nestId: 'utility',
                id: 'utility',
                name: coreModule.api.Utils.i18n('tokenActionHud.utility'),
                groups: [
                    { ...groups.combat, nestId: 'utility_combat' },
                    { ...groups.token, nestId: 'utility_token' },
                    { ...groups.rests, nestId: 'utility_rests' },
                    { ...groups.utility, nestId: 'utility_utility' }
                ]
            },
            {
                nestId: 'moveClassic',
                id: 'moveClassic',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove')  + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.classic'),
                settings: { collapse: true },
                groups: [
                    { ...groups.adventureMoveClassic, nestId: 'moveClassic_adventureMoveClassic', settings: { collapse: true } },
                    { ...groups.relationshipMoveClassic, nestId: 'moveClassic_relationshipMoveClassic', settings: { collapse: true } },
                    { ...groups.combatMoveClassic, nestId: 'moveClassic_combatMoveClassic', settings: { collapse: true } },
                    { ...groups.sufferMoveClassic, nestId: 'moveClassic_sufferMoveClassic', settings: { collapse: true } },
                    { ...groups.questMoveClassic, nestId: 'moveClassic_questMoveClassic', settings: { collapse: true } },
                    { ...groups.fateMoveClassic, nestId: 'moveClassic_fateMoveClassic', settings: { collapse: true } }
                ]
            },
            {
                nestId: 'moveDelve',
                id: 'moveDelve',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove')  + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.delve'),
                settings: { collapse: true },
                groups: [
                    { ...groups.delveMoveDelve, nestId: 'moveDelve_delveMoveDelve', settings: { collapse: true } },
                    { ...groups.failureMoveDelve, nestId: 'moveDelve_failureMoveDelve', settings: { collapse: true }  },
                    { ...groups.threatMoveDelve, nestId: 'moveDelve_threatMoveDelve', settings: { collapse: true }  },
                    { ...groups.rarityMoveDelve, nestId: 'moveDelve_rarityMoveDelve', settings: { collapse: true }  }
                ]
            },
            {
                nestId: 'moveStarforged',
                id: 'moveStarforged',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove') + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.starforged'),
                settings: { collapse: true },
                groups: [
                    { ...groups.sessionMoveStarforged, nestId: 'moveStarforged_sessionMoveStarforged', settings: { collapse: true } },
                    { ...groups.adventureMoveStarforged, nestId: 'moveStarforged_adventureMoveStarforged', settings: { collapse: true } },
                    { ...groups.questMoveStarforged, nestId: 'moveStarforged_questMoveStarforged', settings: { collapse: true } },
                    { ...groups.connectionMoveStarforged, nestId: 'moveStarforged_connectionMoveStarforged', settings: { collapse: true } },
                    { ...groups.explorationMoveStarforged, nestId: 'moveStarforged_explorationMoveStarforged', settings: { collapse: true } },
                    { ...groups.combatMoveStarforged, nestId: 'moveStarforged_combatMoveStarforged', settings: { collapse: true } },
                    { ...groups.sufferMoveStarforged, nestId: 'moveStarforged_sufferMoveStarforged', settings: { collapse: true } },
                    { ...groups.recoverMoveStarforged, nestId: 'moveStarforged_recoverMoveStarforged', settings: { collapse: true } },
                    { ...groups.thresholdMoveStarforged, nestId: 'moveStarforged_thresholdMoveStarforged', settings: { collapse: true } },
                    { ...groups.legacyMoveStarforged, nestId: 'moveStarforged_legacyMoveStarforged', settings: { collapse: true } },
                    { ...groups.fateMoveStarforged, nestId: 'moveStarforged_fateMoveStarforged', settings: { collapse: true } },
                    { ...groups.sceneChallengeMoveStarforged, nestId: 'moveStarforged_sceneChallengeMoveStarforged', settings: { collapse: true } }
                ]
            },
            {
                nestId: 'moveSunderedIsles',
                id: 'moveSunderedIsles',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove')  + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.sundered_isles'),
                settings: { collapse: true },
                groups: [
                    { ...groups.explorationMoveSunderedIsles, nestId: 'moveSunderedIsles_explorationMoveSunderedIsles', settings: { collapse: true } },
                    { ...groups.combatMoveSunderedIsles, nestId: 'moveSunderedIsles_combatMoveSunderedIsles', settings: { collapse: true } },
                    { ...groups.sufferMoveSunderedIsles, nestId: 'moveSunderedIsles_sufferMoveSunderedIsles', settings: { collapse: true } },
                    { ...groups.recoverMoveSunderedIsles, nestId: 'moveSunderedIsles_recoverMoveSunderedIsles', settings: { collapse: true } }
                ]
            }
        ],
        groups: groupsArray
    }
})
