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
    impact: 'IRONSWORN.Impacts',
    utility: 'tokenActionHud.utility',
    move: 'IRONSWORN.ITEMS.TypeMove'
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
    vehicleTrouble: { id: 'vehicleTrouble', name: 'IRONSWORN.IMPACT.CATEGORY.Vehicle', type: 'system' },
    bane: { id: 'bane', name: 'IRONSWORN.DEBILITY.CATEGORY.Banes', type: 'system' },
    condition: { id: 'condition', name: 'IRONSWORN.DEBILITY.CATEGORY.Conditions', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.utility', type: 'system' },
    combatMove: { id: 'combatMove', name: 'IRONSWORN.MOVES.Combat Moves', type: 'system' },
    questMove: { id: 'questMove', name: 'IRONSWORN.MOVES.Quest Moves', type: 'system' }
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
    combatTalent: { groupId: 'combatTalent' },
    combatMove: { groupId: 'combatMove' },
    questMove: { groupId: 'questMove' }
}

/**
 * Characteristics
 */
export const STATS = {
    edge: 'IRONSWORN.Edge',
    heart: 'IRONSWORN.Heart',
    iron: 'IRONSWORN.Iron',
    shadow: 'IRONSWORN.Shadow',
    wits: 'IRONSWORN.Wits'
}

/**
 * Meters
 */
export const METERS = {
    health: 'IRONSWORN.Health',
    spirit: 'IRONSWORN.Spirit',
    supply: 'IRONSWORN.Supply',
    momentum: 'IRONSWORN.Momentum',
    hold: 'IRONSWORN.Hold'
}

/**
 * Impacts for Starforged
 */
export const IMPACTS_SF = {
    wounded: { name: 'IRONSWORN.IMPACT.Wounded', groupId: 'misfortune' },
    shaken: { name: 'IRONSWORN.IMPACT.Shaken', groupId: 'misfortune' },
    unprepared: { name: 'IRONSWORN.IMPACT.Unprepared', groupId: 'misfortune' },
    permanentlyharmed: { name: 'IRONSWORN.IMPACT.Permanentlyharmed', groupId: 'lastingEffect' },
    traumatized: { name: 'IRONSWORN.IMPACT.Traumatized', groupId: 'lastingEffect' },
    doomed: { name: 'IRONSWORN.IMPACT.Doomed', groupId: 'burden' },
    tormented: { name: 'IRONSWORN.IMPACT.Tormented', groupId: 'burden' },
    indebted: { name: 'IRONSWORN.IMPACT.Indebted', groupId: 'burden' },
    battered: { name: 'IRONSWORN.IMPACT.Battered', groupId: 'vehicleTrouble' },
    cursed: { name: 'IRONSWORN.IMPACT.Cursed', groupId: 'vehicleTrouble' }
}

/**
 * Impacts for Ironsworn
 */
export const IMPACTS_IS = {
    wounded: { name: 'IRONSWORN.Debility.Wounded', groupId: 'condition' },
    unprepared: { name: 'IRONSWORN.Debility.Unprepared', groupId: 'condition' },
    shaken: { name: 'IRONSWORN.Debility.Shaken', groupId: 'condition' },
    encumbered: { name: 'IRONSWORN.Debility.Encumbered', groupId: 'condition' },
    maimed: { name: 'IRONSWORN.Debility.Maimed', groupId: 'bane' },
    corrupted: { name: 'IRONSWORN.Debility.Corrupted', groupId: 'bane' },
    cursed: { name: 'IRONSWORN.Debility.Cursed', groupId: 'burden' },
    tormented: { name: 'IRONSWORN.Debility.Tormented', groupId: 'burden' },
}

/**
 * Impacts for Starships
 */
export const IMPACTS_STARSHIP = {
    battered: { name: 'IRONSWORN.IMPACT.Battered', groupId: 'vehicleTrouble' },
    cursed: { name: 'IRONSWORN.IMPACT.Cursed', groupId: 'vehicleTrouble' }
}

/**
 * Moves
 */
/**
 * Impacts for Starforged
 */
export const MOVES_SF = {
    strike: { name: 'Strike', groupId: 'combatMove', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.ae5994ceb3cba098' },
    clash: { name: 'Clash', groupId: 'combatMove', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.723192c97fec4fe2' },
    battle: { name: 'Battle', groupId: 'combatMove', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.a903d120af3b1475' },
    swearIronVow: { name: 'Swear an Iron Vow', groupId: 'questMove', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.9c9ab6a42daa96e0' },
    reachMilestone: { name: 'Reach a Milestone', groupId: 'questMove', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.0d7f13818c1c19ed' }
}