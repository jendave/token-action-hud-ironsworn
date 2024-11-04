/**
 * Module-based constants
 */
export const MODULE = {
    ID: 'token-action-hud-ironsworn'
}

/**
 * Core module
 */
export const CORE_MODULE = {
    ID: 'token-action-hud-core'
}

/**
 * Core module version required by the system module
 */
export const REQUIRED_CORE_MODULE_VERSION = '2.0'

/**
 * Action types
 */
export const ACTION_TYPE = {
    stats: 'IRONSWORN.Stats'
    // move: 'IRONSWORN.ITEMS.TypeMove',
    // asset: 'IRONSWORN.ITEMS.TypeAsset',
    // utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    stats: { id: 'stats', name: 'IRONSWORN.Stats', type: 'system' },
    progress: { id: 'progress', name: 'IRONSWORN.ITEMS.SubtypeProgress', type: 'system' },
    vows: { id: 'vows', name: 'IRONSWORN.ITEMS.SubtypeVow', type: 'system' },
    connections: { id: 'connections', name: 'IRONSWORN.ITEMS.SubtypeConnection', type: 'system' },
    paths: { id: 'paths', name: 'IRONSWORN.Asset Categories.Starforged.Path Assets.Title', type: 'system' },
    companions: { id: 'companions', name: 'IRONSWORN.Asset Categories.Starforged.Companion Assets.Title', type: 'system' },
    deeds: { id: 'deeds', name: 'IRONSWORN.Asset Categories.Starforged.Deed Assets.Title', type: 'system' },
    modules: { id: 'modules', name: 'IRONSWORN.Asset Categories.Starforged.Module Assets.Title', type: 'system' },
    supportVehicles: { id: 'supportVehicles', name: 'IRONSWORN.Asset Categories.Starforged.Support Vehicle Assets.Title', type: 'system' },
    commandVehicles: { id: 'commandVehicles', name: 'IRONSWORN.Asset Categories.Starforged.Command Vehicle Assets.Title', type: 'system' },
    rituals: { id: 'rituals', name: 'IRONSWORN.Asset Categories.Classic.Ritual Assets.Title', type: 'system' },
    combatTalents: { id: 'combatTalents', name: 'IRONSWORN.Asset Categories.Classic.Combat Talent Assets.Title', type: 'system' }
    // utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}
/** system.category asset
 * Ritual
 * Deed
 * "Module"
 * "Command Vehicle"
 * "Support Vehicle"
 * "Path"
 * "Companion"
 */






/**
 * Item types
 */
export const ITEM_TYPE = {
    asset: { groupId: 'assets' },
    progress: { groupId: 'progress' },
    connection: { groupId: 'connections' },
    vow: { groupId: 'vows' },
    bondset: { groupId: 'bondsets' },
    path: { groupId: 'paths' },
    companion: { groupId: 'companions' },
    ritual: { groupId: 'rituals' },
    deed: { groupId: 'deeds' },
    module: { groupId: 'modules' },
    commandVehicle: { groupId: 'commandVehicles' },
    supportVehicle: { groupId: 'supportVehicles' },
    combatTalent: { groupId: 'combatTalents' }
}

/**
 * Characteristics
 */
export const STATS = {
    edge: 'Edge',
    heart: 'Heart',
    iron: 'Iron',
    shadow: 'Shadow',
    wits: 'Wits'
}
