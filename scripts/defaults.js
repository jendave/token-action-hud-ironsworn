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
                groups: [
                    { ...groups.adventureMoveClassic, nestId: 'moveClassic_adventureMoveClassic' },
                    { ...groups.combatMoveClassic, nestId: 'moveClassic_combatMoveClassic' },
                    { ...groups.fateMoveClassic, nestId: 'moveClassic_fateMoveClassic' },
                    { ...groups.questMoveClassic, nestId: 'moveClassic_questMoveClassic' },
                    { ...groups.relationshipMoveClassic, nestId: 'moveClassic_relationshipMoveClassic' },
                    { ...groups.sufferMoveClassic, nestId: 'moveClassic_sufferMoveClassic' }
                ]
            },
            {
                nestId: 'moveDelve',
                id: 'moveDelve',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove')  + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.delve'),
                groups: [
                    { ...groups.delveMoveDelve, nestId: 'moveDelve_delveMoveDelve' },
                    { ...groups.failureMoveDelve, nestId: 'moveDelve_failureMoveDelve' },
                    { ...groups.threatMoveDelve, nestId: 'moveDelve_threatMoveDelve' },
                    { ...groups.rarityMoveDelve, nestId: 'moveDelve_rarityMoveDelve' }
                ]
            },
            {
                nestId: 'moveStarforged',
                id: 'moveStarforged',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove') + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.starforged'),
                groups: [
                    { ...groups.adventureMoveStarforged, nestId: 'moveStarforged_adventureMoveStarforged' },
                    { ...groups.combatMoveStarforged, nestId: 'moveStarforged_combatMoveStarforged' },
                    { ...groups.connectionMoveStarforged, nestId: 'moveStarforged_connectionMoveStarforged' },
                    { ...groups.explorationMoveStarforged, nestId: 'moveStarforged_explorationMoveStarforged' },
                    { ...groups.fateMoveStarforged, nestId: 'moveStarforged_fateMoveStarforged' },
                    { ...groups.legacyMoveStarforged, nestId: 'moveStarforged_legacyMoveStarforged' },
                    { ...groups.questMoveStarforged, nestId: 'moveStarforged_questMoveStarforged' },
                    { ...groups.recoverMoveStarforged, nestId: 'moveStarforged_recoverMoveStarforged' },
                    { ...groups.sceneChallengeMoveStarforged, nestId: 'moveStarforged_sceneChallengeMoveStarforged' },
                    { ...groups.sessionMoveStarforged, nestId: 'moveStarforged_sessionMoveStarforged' },
                    { ...groups.sufferMoveStarforged, nestId: 'moveStarforged_sufferMoveStarforged' },
                    { ...groups.thresholdMoveStarforged, nestId: 'moveStarforged_thresholdMoveStarforged' }
                ]
            },
            {
                nestId: 'moveSunderedIsles',
                id: 'moveSunderedIsles',
                name: coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeMove')  + " " + coreModule.api.Utils.i18n('IRONSWORN.RULESETS.sundered_isles'),
                groups: [
                    { ...groups.combatMoveSunderedIsles, nestId: 'moveSunderedIsles_combatMoveSunderedIsles' },
                    { ...groups.explorationMoveSunderedIsles, nestId: 'moveSunderedIsles_explorationMoveSunderedIsles' },
                    { ...groups.recoverMoveSunderedIsles, nestId: 'moveSunderedIsles_recoverMoveSunderedIsles' },
                    { ...groups.sufferMoveSunderedIsles, nestId: 'moveSunderedIsles_sufferMoveSunderedIsles' }
                ]
            }
        ],
        groups: groupsArray
    }
})
