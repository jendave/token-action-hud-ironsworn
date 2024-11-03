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
    stats: 'IRONSWORN.Stats',
    // move: 'IRONSWORN.ITEMS.TypeMove',
    // asset: 'IRONSWORN.ITEMS.TypeAsset',
    // utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    stats: { id: 'stats', name: 'IRONSWORN.Stats', type: 'system' },
    // progress: { id: 'progress', name: 'IRONSWORN.ITEMS.SubtypeProgress', type: 'system' },
    // vow: { id: 'vow', name: 'IRONSWORN.ITEMS.SubtypeVow', type: 'system' },
    // connection: { id: 'connection', name: 'IRONSWORN.ITEMS.SubtypeConnection', type: 'system' },
    // path_starforged: { id: 'path_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Path Assets', type: 'system' },
    // companion_starforged: { id: 'companion_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Companion Assets', type: 'system' },
    // deed_starforged: { id: 'deed_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Deed Assets', type: 'system' },
    // module_starforged: { id: 'module_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Module Assets', type: 'system' },
    // support_vehicle_starforged: { id: 'support_vehicle_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Support Vehicle Assets', type: 'system' },
    // command_vehicle_starforged: { id: 'command_vehicle_starforged', name: 'IRONSWORN.Asset Categories.Starforged.Command Vehicle Assets', type: 'system' },
    // ritual_classic: { id: 'ritual_starforged', name: 'IRONSWORN.Asset Categories.Classic.Ritual Assets', type: 'system' },
    // path_classic: { id: 'path_starforged', name: 'IRONSWORN.Asset Categories.Classic.Path Assets', type: 'system' },
    // companion_classic: { id: 'companion_starforged', name: 'IRONSWORN.Asset Categories.Classic.Companion Assets', type: 'system' },
    // combat_talent_classic: { id: 'combat_talent_starforged', name: 'IRONSWORN.Asset Categories.Classic.Combat Talent Assets', type: 'system' },
    // utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    assets: { groupId: 'assets' },
    progress: { groupId: 'progress' },
    bondset: { groupId: 'bondsets' }
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
