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
    moveClassic: { id: 'moveClassic', name: 'IRONSWORN.RULESETS.classic', type: 'system', ruleset: 'classic' },
    moveDelve: { id: 'moveDelve', name: 'IRONSWORN.RULESETS.delve', type: 'system', ruleset: 'delve' },
    moveStarforged: { id: 'moveStarforged', name: 'IRONSWORN.RULESETS.starforged', type: 'system', ruleset: 'starforged' },
    moveSunderedIsles: { id: 'moveSunderedIsles', name: 'IRONSWORN.RULESETS.sundered_isles', type: 'system', ruleset: 'starforged' },
    sessionMoveStarforged: { id: 'sessionMoveStarforged', name: 'IRONSWORN.MOVES.Session Moves', type: 'system', ruleset: 'starforged' },
    adventureMoveStarforged: { id: 'adventureMoveStarforged', name: 'IRONSWORN.MOVES.Adventure Moves', type: 'system', ruleset: 'starforged' },
    questMoveStarforged: { id: 'questMoveStarforged', name: 'IRONSWORN.MOVES.Quest Moves', type: 'system', ruleset: 'starforged' },
    connectionMoveStarforged: { id: 'connectionMoveStarforged', name: 'IRONSWORN.MOVES.Connection Moves', type: 'system', ruleset: 'starforged' },
    explorationMoveStarforged: { id: 'explorationMoveStarforged', name: 'IRONSWORN.MOVES.Exploration Moves', type: 'system', ruleset: 'starforged' },
    combatMoveStarforged: { id: 'combatMoveStarforged', name: 'IRONSWORN.MOVES.Combat Moves', type: 'system', ruleset: 'starforged' },
    sufferMoveStarforged: { id: 'sufferMoveStarforged', name: 'IRONSWORN.MOVES.Suffer Moves', type: 'system', ruleset: 'starforged' },
    recoverMoveStarforged: { id: 'recoverMoveStarforged', name: 'IRONSWORN.MOVES.Recover Moves', type: 'system', ruleset: 'starforged' },
    thresholdMoveStarforged: { id: 'thresholdMoveStarforged', name: 'IRONSWORN.MOVES.Threshold Moves', type: 'system', ruleset: 'starforged' },
    legacyMoveStarforged: { id: 'LegacyMoveStarforged', name: 'IRONSWORN.MOVES.Legacy Moves', type: 'system', ruleset: 'starforged' },
    fateMoveStarforged: { id: 'fateMoveStarforged', name: 'IRONSWORN.MOVES.Fate Moves', type: 'system', ruleset: 'starforged' },
    sceneChallengeMoveStarforged: { id: 'sceneChallengeMoveStarforged', name: 'IRONSWORN.MOVES.Scene Challenge Moves', type: 'system', ruleset: 'starforged' },
    explorationMoveSunderedIsles: { id: 'explorationMoveSunderedIsles', name: 'IRONSWORN.MOVES.Exploration Moves', type: 'system', ruleset: 'sundered_isles' },
    combatMoveSunderedIsles: { id: 'combatMoveSunderedIsles', name: 'IRONSWORN.MOVES.Combat Moves', type: 'system', ruleset: 'sundered_isles' },
    sufferMoveSunderedIsles: { id: 'sufferMoveSunderedIsles', name: 'IRONSWORN.MOVES.Suffer Moves', type: 'system', ruleset: 'sundered_isles' },
    recoverMoveSunderedIsles: { id: 'recoverMoveSunderedIsles', name: 'IRONSWORN.MOVES.Recover Moves', type: 'system', ruleset: 'sundered_isles' },
    adventureMoveClassic: { id: 'adventureMoveClassic', name: 'IRONSWORN.MOVES.Adventure Moves', type: 'system', ruleset: 'classic' },
    relationshipMoveClassic: { id: 'relationshipMoveClassic', name: 'IRONSWORN.MOVES.Relationship Moves', type: 'system', ruleset: 'classic' },
    combatMoveClassic: { id: 'combatMoveClassic', name: 'IRONSWORN.MOVES.Combat Moves', type: 'system', ruleset: 'classic' },
    sufferMoveClassic: { id: 'sufferMoveClassic', name: 'IRONSWORN.MOVES.Suffer Moves', type: 'system', ruleset: 'classic' },
    questMoveClassic: { id: 'questMoveClassic', name: 'IRONSWORN.MOVES.Quest Moves', type: 'system', ruleset: 'classic' },
    fateMoveClassic: { id: 'fateMoveClassic', name: 'IRONSWORN.MOVES.Fate Moves', type: 'system', ruleset: 'classic' },
    delveMoveDelve: { id: 'delveMoveDelve', name: 'IRONSWORN.MOVES.Delve Moves', type: 'system', ruleset: 'delve' },
    failureMoveDelve: { id: 'failureMoveDelve', name: 'IRONSWORN.MOVES.Failure Moves', type: 'system', ruleset: 'delve' },
    threatMoveDelve: { id: 'threatMoveDelve', name: 'IRONSWORN.MOVES.Threat Moves', type: 'system', ruleset: 'delve' },
    rarityMoveDelve: { id: 'rarityMoveDelve', name: 'IRONSWORN.MOVES.Rarity Moves', type: 'system', ruleset: 'delve' },
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
 * Moves for Ironsworn Classic
 */
export const MOVES_CLASSIC = {
    faceDanger: { name: 'Face Danger', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.c8bacc17f73d3103' }
}

/**
 * Moves for Ironsworn Delve
 */
export const MOVES_DELVE = {
    delveTheDepths: { name: 'Delve the Depths', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.36c6cbe556fbb639' }
}

/**
 * Moves for Starforged
 */
export const MOVES_STARFORGED = {
    enterTheFray: { name: 'Enter the Fray', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.2f2ba4090b22a122' },
    gainGround: { name: 'Gain Ground', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.3f5a834fa3fea5d1' },
    reactUnderFire: { name: 'React Under Fire', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.d9208f9b7d827aec' },
    strike: { name: 'Strike', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.ae5994ceb3cba098' },
    clash: { name: 'Clash', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.723192c97fec4fe2' },
    takeDecisiveAction: { name: 'Take Decisive Action', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.3129f4caa4754caf' },
    faceDefeat: { name: 'Face Defeat', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.23ebe48d2b1a1d58' },
    battle: { name: 'Battle', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.a903d120af3b1475' },
    swearIronVow: { name: 'Swear an Iron Vow', groupId: 'questMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.9c9ab6a42daa96e0' },
    reachMilestone: { name: 'Reach a Milestone', groupId: 'questMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.0d7f13818c1c19ed' }
}

/**
 * Moves for Sundered Isles
 */
export const MOVES_SUNDERED_ISLES = {
    confrontChaos: { name: 'Confront Chaos', groupId: 'explorarationMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.4265fe492d629800' }
}