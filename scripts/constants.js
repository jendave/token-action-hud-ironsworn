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
export const REQUIRED_CORE_MODULE_VERSION = '1.5'

/**
 * Action types
 */
export const ACTION_TYPE = {
    item: 'tokenActionHud.ironsworn.item',
    utility: 'tokenActionHud.utility'
}

/**
 * Groups
 */
export const GROUP = {
    armor: { id: 'armor', name: 'tokenActionHud.ironsworn.armor', type: 'system' },
    equipment: { id: 'equipment', name: 'tokenActionHud.ironsworn.equipment', type: 'system' },
    consumables: { id: 'consumables', name: 'tokenActionHud.ironsworn.consumables', type: 'system' },
    containers: { id: 'containers', name: 'tokenActionHud.ironsworn.containers', type: 'system' },
    treasure: { id: 'treasure', name: 'tokenActionHud.ironsworn.treasure', type: 'system' },
    weapons: { id: 'weapons', name: 'tokenActionHud.ironsworn.weapons', type: 'system' },
    combat: { id: 'combat', name: 'tokenActionHud.ironsworn.combat', type: 'system' },
    token: { id: 'token', name: 'tokenActionHud.ironsworn.token', type: 'system' },
    utility: { id: 'utility', name: 'tokenActionHud.ironsworn.utility', type: 'system' }
}

/**
 * Item types
 */
export const ITEM_TYPE = {
    armor: { groupId: 'armor' },
    backpack: { groupId: 'containers' },
    consumable: { groupId: 'consumables' },
    equipment: { groupId: 'equipment' },
    treasure: { groupId: 'treasure' },
    weapon: { groupId: 'weapons' }
}
