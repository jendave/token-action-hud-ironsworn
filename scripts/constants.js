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
    moveClassic: 'IRONSWORN.ITEMS.TypeMove' + ' ' + 'IRONSWORN.RULESETS.classic',
    moveDelve: 'IRONSWORN.ITEMS.TypeMove' + ' ' + 'IRONSWORN.RULESETS.delve',
    moveStarforged: 'IRONSWORN.ITEMS.TypeMove' + ' ' + 'IRONSWORN.RULESETS.starforged',
    moveSunderedIsles: 'IRONSWORN.ITEMS.TypeMove' + ' ' + 'IRONSWORN.RULESETS.sundered_isles'
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
    // moveClassic: { id: 'moveClassic', name: 'IRONSWORN.RULESETS.classic', type: 'system', ruleset: 'classic' },
    // moveDelve: { id: 'moveDelve', name: 'IRONSWORN.RULESETS.delve', type: 'system', ruleset: 'delve' },
    // moveStarforged: { id: 'moveStarforged', name: 'IRONSWORN.RULESETS.starforged', type: 'system', ruleset: 'starforged' },
    // moveSunderedIsles: { id: 'moveSunderedIsles', name: 'IRONSWORN.RULESETS.sundered_isles', type: 'system', ruleset: 'sundered_isles' },
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
 * Moves for Ironsworn Classic
 */
export const MOVES_CLASSIC = {
    faceDanger: { name: 'Face Danger', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.c8bacc17f73d3103', actionTypeId: 'moveClassic' },
    gatherInformation: { name: 'Gather Information', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.4244b77103f55bc4', actionTypeId: 'moveClassic' },
    heal: { name: 'Heal', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.3d315ee54e9ce845', actionTypeId: 'moveClassic' },
    makeCamp: { name: 'Make Camp', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.30046577bc83f2f0', actionTypeId: 'moveClassic' },
    reachYourDestination: { name: 'Reach Your Destination', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.727eb47e8f031e81', actionTypeId: 'moveClassic' },
    resupply: { name: 'Resupply', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.8d90dd472856be27', actionTypeId: 'moveClassic' },
    secureAnAdvantage: { name: 'Secure an Advantage', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.4dd8468e095810a4', actionTypeId: 'moveClassic' },
    undertakeAJourney: { name: 'Undertake a Journey', groupId: 'adventureMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.ac19f4c7f3fe31be', actionTypeId: 'moveClassic' },
    enterTheFray: { name: 'Enter the Fray', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.ed343c963b08f301', actionTypeId: 'moveClassic' },
    strike: { name: 'Strike', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.5288e935906f6d28', actionTypeId: 'moveClassic' },
    clash: { name: 'Clash', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.7e008d0f656dc8b3', actionTypeId: 'moveClassic' },
    battle: { name: 'Battle', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.412156232a6d42bf', actionTypeId: 'moveClassic' },
    endTheFight: { name: 'End the Fight', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.aac3783710ad7499', actionTypeId: 'moveClassic' },
    turnTheTide: { name: 'Turn the Tide', groupId: 'combatMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.12e23cfe23534a8f', actionTypeId: 'moveClassic' },
    askTheOracle: { name: 'Ask the Oracle', groupId: 'fateMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.aba3e44b7e810c0f', actionTypeId: 'moveClassic' },
    payThePrice: { name: 'Pay the Price', groupId: 'fateMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.c10d64f58dd8c5bf', actionTypeId: 'moveClassic' },
    advance: { name: 'Advance', groupId: 'questMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.0151a4905d1f99d2', actionTypeId: 'moveClassic' },
    forsakeYourVow: { name: 'Forsake Your Vow', groupId: 'questMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.f968f5e0a837a83a', actionTypeId: 'moveClassic' },
    fulfillYourVow: { name: 'Fulfill Your Vow', groupId: 'questMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.725a21e2f02d7e12', actionTypeId: 'moveClassic' },
    swearIronVow: { name: 'Swear an Iron Vow', groupId: 'questMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.010e27aa4376d4df', actionTypeId: 'moveClassic' },
    reachMilestone: { name: 'Reach a Milestone', groupId: 'questMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.c3696751a921323b', actionTypeId: 'moveClassic' },
    aidYourAlly: { name: 'Aid Your Ally', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.f762e8f471fe875f', actionTypeId: 'moveClassic' },
    compel: { name: 'Compel', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.be95ca063ded2b19', actionTypeId: 'moveClassic' },
    drawTheCircle: { name: 'Draw the Circle', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.c0967ba47f57393b', actionTypeId: 'moveClassic' },
    forgeABond: { name: 'Forge a Bond', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.b643d9ea53ff8d98', actionTypeId: 'moveClassic' },
    sojourn: { name: 'Sojourn', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.25421995c803340e', actionTypeId: 'moveClassic' },
    testYourBond: { name: 'Test Your Bond', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.421b379cb40b6ab7', actionTypeId: 'moveClassic' },
    writeYourEpilogue: { name: 'Write Your Epilogue', groupId: 'relationshipMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.7b51b945dad12c7d', actionTypeId: 'moveClassic' },
    companionEndureHarm: { name: 'Companion Endure Harm', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.5042c9574d4faf61', actionTypeId: 'moveClassic' },
    endureHarm: { name: 'Endure Harm', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.fdb51ee928b4fca2', actionTypeId: 'moveClassic' },
    endureStress: { name: 'Endure Stress', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.e09e2fc8bb709320', actionTypeId: 'moveClassic' },
    faceASetback: { name: 'Face a Setback', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.79661dee7726dd8c', actionTypeId: 'moveClassic' },
    faceDeath: { name: 'Face Death', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.92b85c33a17ab487', actionTypeId: 'moveClassic' },
    faceDesolation: { name: 'Face Desolation', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.1f978f9faa43d5c6', actionTypeId: 'moveClassic' },
    outOfSupply: { name: 'Out of Supply', groupId: 'sufferMoveClassic', uuid: 'Compendium.foundry-ironsworn.ironswornmoves.Item.e599a449ce2cc52b', actionTypeId: 'moveClassic' }
}

/**
 * Moves for Ironsworn Delve
 */
export const MOVES_DELVE = {
    checkYourGear: { name: 'Check Your Gear', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.48f642fd361e9c03', actionTypeId: 'moveDelve' },
    delveTheDepths: { name: 'Delve the Depths', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.36c6cbe556fbb639', actionTypeId: 'moveDelve' },
    discoverASite: { name: 'Discover a Site', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.e7ad42a1678725b9', actionTypeId: 'moveDelve' },
    escapeTheDepths: { name: 'Escape the Depths', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.313c82cede0ce9a7', actionTypeId: 'moveDelve' },
    findAnOpportunity: { name: 'Find an Opportunity', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.4da87fd54eaa1b89', actionTypeId: 'moveDelve' },
    locateYourObjective: { name: 'Locate Your Objective', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.2cd0d8934c6659fc', actionTypeId: 'moveDelve' },
    revealADanger: { name: 'Reveal a Danger', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.06f78b87b9532437', actionTypeId: 'moveDelve' },
    revealADangerAlt: { name: 'Reveal a Danger (alt)', groupId: 'delveMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.c937a79dfda8095d', actionTypeId: 'moveDelve' },
    learnFromYourFailures: { name: 'Learn From Your Failures', groupId: 'failureMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.d05ecfe8c467bdc5', actionTypeId: 'moveDelve' },
    markYourFailure: { name: 'Mark Your Failure', groupId: 'failureMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.321c86f98e13f183', actionTypeId: 'moveDelve' },
    wieldARarity: { name: 'Wield a Rarity', groupId: 'rarityMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.70c5da168f35295c', actionTypeId: 'moveDelve' },
    advanceAThreat: { name: 'Advance a Threat', groupId: 'threatMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.03754df8933ca564', actionTypeId: 'moveDelve' },
    takeAHiatus: { name: 'Take a Hiatus', groupId: 'threatMoveDelve', uuid: 'Compendium.foundry-ironsworn.ironsworndelvemoves.Item.0cd7709d0a1545c9', actionTypeId: 'moveDelve' }
}

/**
 * Moves for Starforged
 */
export const MOVES_STARFORGED = {
    aidYourAlly: { name: 'Aid Your Ally', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.f4dec946415d8e57', actionTypeId: 'moveStarforged' },
    checkYourGear: { name: 'Check Your Gear', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.8d9830fb825057b0', actionTypeId: 'moveStarforged' },
    compel: { name: 'Compel', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.9f538fabf8998c5b', actionTypeId: 'moveStarforged' },
    faceDanger: { name: 'Face Danger', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.e6ed148eff82c171', actionTypeId: 'moveStarforged' },
    gatherInformation: { name: 'Gather Information', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.13b2d777c6fb719d', actionTypeId: 'moveStarforged' },
    secureAnAdvantage: { name: 'Secure an Advantage', groupId: 'adventureMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.a2d7793b23c17489', actionTypeId: 'moveStarforged' },
    enterTheFray: { name: 'Enter the Fray', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.2f2ba4090b22a122', actionTypeId: 'moveStarforged' },
    gainGround: { name: 'Gain Ground', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.3f5a834fa3fea5d1', actionTypeId: 'moveStarforged' },
    reactUnderFire: { name: 'React Under Fire', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.d9208f9b7d827aec', actionTypeId: 'moveStarforged' },
    strike: { name: 'Strike', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.ae5994ceb3cba098', actionTypeId: 'moveStarforged' },
    clash: { name: 'Clash', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.723192c97fec4fe2', actionTypeId: 'moveStarforged' },
    takeDecisiveAction: { name: 'Take Decisive Action', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.3129f4caa4754caf', actionTypeId: 'moveStarforged' },
    faceDefeat: { name: 'Face Defeat', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.23ebe48d2b1a1d58', actionTypeId: 'moveStarforged' },
    battle: { name: 'Battle', groupId: 'combatMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.a903d120af3b1475', actionTypeId: 'moveStarforged' },
    swearIronVow: { name: 'Swear an Iron Vow', groupId: 'questMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.9c9ab6a42daa96e0', actionTypeId: 'moveStarforged' },
    reachMilestone: { name: 'Reach a Milestone', groupId: 'questMoveStarforged', uuid: 'Compendium.foundry-ironsworn.starforgedmoves.Item.0d7f13818c1c19ed', actionTypeId: 'moveStarforged' }
}

/**
 * Moves for Sundered Isles
 */
export const MOVES_SUNDERED_ISLES = {
    enterTheFray: { name: 'Enter the Fray', groupId: 'combatMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.24dfbbb42bceb9f8', actionTypeId: 'moveSunderedIsles' },
    confrontChaos: { name: 'Confront Chaos', groupId: 'explorationMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.4265fe492d629800', actionTypeId: 'moveSunderedIsles' },
    makeADiscovery: { name: 'Make a Discovery', groupId: 'explorationMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.d5927e1450bfbbca', actionTypeId: 'moveSunderedIsles' },
    setACourse: { name: 'Set a Course', groupId: 'explorationMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.7cb0a8ade5f31444', actionTypeId: 'moveSunderedIsles' },
    undertakeAnExpedition: { name: 'Undertake an Expedition', groupId: 'explorationMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.d80a8e734bed435b', actionTypeId: 'moveSunderedIsles' },
    repair: { name: 'Repair', groupId: 'recoverMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.8a164fecb3029c76', actionTypeId: 'moveSunderedIsles' },
    resupply: { name: 'Resupply', groupId: 'recoverMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.c96bafd5cbda43bc', actionTypeId: 'moveSunderedIsles' },
    withstandDamage: { name: 'Withstand Damage', groupId: 'sufferMoveSunderedIsles', uuid: 'Compendium.foundry-ironsworn.sunderedislesmoves.Item.a03a648bb3a06d93', actionTypeId: 'moveSunderedIsles' }
}