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
    stat: 'IRONSWORN.Stats',
    meter: 'tokenActionHud.ironsworn.meters',
    impact: 'IRONSWORN.Impacts'
    // move: 'IRONSWORN.ITEMS.TypeMove',
    // asset: 'IRONSWORN.ITEMS.TypeAsset',
    // utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    stat: { id: 'stat', name: 'IRONSWORN.Stats', type: 'system' },
    meter: { id: 'meter', name: 'tokenActionHud.ironsworn.meters', type: 'system' },
    progress: { id: 'progress', name: 'IRONSWORN.ITEMS.SubtypeProgress', type: 'system' },
    vow: { id: 'vow', name: 'IRONSWORN.ITEMS.SubtypeVow', type: 'system' },
    connection: { id: 'connection', name: 'IRONSWORN.ITEMS.SubtypeConnection', type: 'system' },
    path: { id: 'path', name: 'IRONSWORN.Asset Categories.Starforged.Path Assets.Title', type: 'system' },
    companion: { id: 'companion', name: 'IRONSWORN.Asset Categories.Starforged.Companion Assets.Title', type: 'system' },
    deed: { id: 'deed', name: 'IRONSWORN.Asset Categories.Starforged.Deed Assets.Title', type: 'system' },
    module: { id: 'module', name: 'IRONSWORN.Asset Categories.Starforged.Module Assets.Title', type: 'system' },
    supportVehicle: { id: 'supportVehicle', name: 'IRONSWORN.Asset Categories.Starforged.Support Vehicle Assets.Title', type: 'system' },
    commandVehicle: { id: 'commandVehicle', name: 'IRONSWORN.Asset Categories.Starforged.Command Vehicle Assets.Title', type: 'system' },
    ritual: { id: 'ritual', name: 'IRONSWORN.Asset Categories.Classic.Ritual Assets.Title', type: 'system' },
    combatTalent: { id: 'combatTalent', name: 'IRONSWORN.Asset Categories.Classic.Combat Talent Assets.Title', type: 'system' },
    misfortune: { id: 'misfortune', name: 'IRONSWORN.IMPACT.CATEGORY.Misfortunes', type: 'system' },
    lastingEffect: { id: 'lastingEffect', name: 'IRONSWORN.IMPACT.CATEGORY.LastingEffects', type: 'system' },
    burden: { id: 'burden', name: 'IRONSWORN.IMPACT.CATEGORY.Burdens', type: 'system' },
    vehicleTrouble: { id: 'vehicleTrouble', name: 'IRONSWORN.IMPACT.CATEGORY.Vehicle', type: 'system' }
    // utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    asset: { groupId: 'asset' },
    progress: { groupId: 'progress' },
    connection: { groupId: 'connection' },
    vow: { groupId: 'vow' },
    bondset: { groupId: 'bondset' },
    path: { groupId: 'path' },
    companion: { groupId: 'companion' },
    ritual: { groupId: 'ritual' },
    deed: { groupId: 'deed' },
    module: { groupId: 'module' },
    commandVehicle: { groupId: 'commandVehicle' },
    supportVehicle: { groupId: 'supportVehicle' },
    combatTalent: { groupId: 'combatTalent' }
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

/**
 * Meters
 */
export const METERS = {
    health: 'Health',
    spirit: 'Spirit',
    supply: 'Supply'
}

/**
 * Meters
 */
export const IMPACTS = {
    battered: { name: 'Battered', category: 'vehicleTrouble' },
    corrupted: { name: 'Corrupted', category: 'lastingEffect' },
    cursed: { name: 'Cursed', category: 'vehicleTrouble' },
    doomed: { name: 'Doomed', category: 'burden' },
    encumbered: { name: 'Encumbered', category: 'burden' },
    indebted: { name: 'Indebted', category: 'burden' },
    maimed: { name: 'Mained', category: 'lastingEffect' },
    permanentlyharmed: { name: 'Permanently Harmed' },
    shaken: { name: 'Shaken', category: 'misfortune' },
    tormented: { name: 'Tormented', category: 'burden' },
    traumatized: { name: 'Traumatized', category: 'lastingEffect' },
    unprepared: { name: 'Unprepared', category: 'misfortune' },
    wounded: { name: 'Wounded', category: 'misfortune' }
}

export const IMPACT_CATEGORY = {
    vehicleTrouble: { groupId: 'vehicleTrouble' },
    lastingEffect: { groupId: 'lastingEffect' },
    burden: { groupId: 'burden' },
    misfortune: { groupId: 'misfortune' }
}
