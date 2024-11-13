// System Module Imports
import { ACTION_TYPE, ITEM_TYPE, STATS, METERS, IMPACTS_SF, IMPACTS_IS, IMPACTS_STARSHIP, MOVES_CLASSIC, MOVES_DELVE, MOVES_STARFORGED, MOVES_SUNDERED_ISLES } from './constants.js'
// import { Utils } from './utils.js'

export let ActionHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's ActionHandler class and builds system-defined actions for the HUD
     */
    ActionHandler = class ActionHandler extends coreModule.api.ActionHandler {
        /**
         * Build system actions
         * Called by Token Action HUD Core
         * @override
         * @param {array} groupIds
         */a
        async buildSystemActions(groupIds) {
            // Set actor and token variables
            this.actors = (!this.actor) ? this._getActors() : [this.actor]
            this.actorType = this.actor?.type

            // Set items variable
            if (this.actor) {
                let items = this.actor.items
                items = coreModule.api.Utils.sortItemsByName(items)
                this.items = items
            }

            if (this.actorType === 'character') {
                this.#buildCharacterActions()
            } else if (this.actorType === 'starship') {
                this.#buildStarshipActions()
            } else if (this.actorType === 'shared') {
                this.#buildSharedActions()
            }
        }

        /**
         * Build character actions
         * @private
         */
        #buildCharacterActions() {
            this.#buildInventory()
            this.#buildStats()
            this.#buildMeters()
            this.#buildImpacts()
            this.#buildMoves()
        }

        /**
         * Build starship actions
         * @private
         */
        #buildStarshipActions() {
            this.#buildImpacts(true)
        }

        /**
         * Build shared sheet actions
         * @private
         */
        #buildSharedActions() {
            this.#buildInventory()
        }

        /**
         * Build inventory
         * @private
         */
        async #buildInventory() {
            if (this.items.size === 0) return

            const actionTypeId = 'item'
            const inventoryMap = new Map()

            for (const [itemId, itemData] of this.items) {
                const itemDataTemp = structuredClone(itemData)
                if (itemDataTemp.type === 'progress') {
                    if (itemDataTemp.system.subtype === 'vow') {
                        itemDataTemp.type = 'vow'
                    } else if (itemDataTemp.system.subtype === 'bond') {
                        itemDataTemp.type = 'connection'
                    }
                } else if (itemDataTemp.type === 'asset') {
                    if (itemDataTemp.system.category === 'Path') {
                        itemDataTemp.type = 'path'
                    } else if (itemDataTemp.system.category === 'Companion') {
                        itemDataTemp.type = 'companion'
                    } else if (itemDataTemp.system.category === 'Combat Talent') {
                        itemDataTemp.type = 'combatTalent'
                    } else if (itemDataTemp.system.category === 'Ritual') {
                        itemDataTemp.type = 'ritual'
                    } else if (itemDataTemp.system.category === 'Deed') {
                        itemDataTemp.type = 'deed'
                    } else if (itemDataTemp.system.category === 'Module') {
                        itemDataTemp.type = 'module'
                    } else if (itemDataTemp.system.category === 'Command Vehicle') {
                        itemDataTemp.type = 'commandVehicle'
                    } else if (itemDataTemp.system.category === 'Support Vehicle') {
                        itemDataTemp.type = 'supportVehicle'
                    }
                }
                const type = itemDataTemp.type
                const typeMap = inventoryMap.get(type) ?? new Map()
                typeMap.set(itemId, itemDataTemp)
                inventoryMap.set(type, typeMap)
            }

            for (const [type, typeMap] of inventoryMap) {
                const groupId = ITEM_TYPE[type]?.groupId

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...typeMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = itemData.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    const info1 = (itemData.type === 'progress' || itemData.system.subtype === 'vow' || itemData.type === 'connection') ? { text: Math.floor(itemData.system.current / 4).toString() } : null

                    return {
                        id,
                        name,
                        listName,
                        encodedValue,
                        info1
                    }
                })
                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }

        /**
         * Build stats
         * @private
         */
        #buildStats() {
            const actionTypeId = 'stat'
            const groupData = { id: 'stat', type: 'system' }

            // Get actions
            const actions = []
            for (const stat in STATS) {
                const id = stat
                const name = coreModule.api.Utils.i18n(STATS[stat]).charAt(0).toUpperCase() + coreModule.api.Utils.i18n(STATS[stat]).slice(1)
                const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                const encodedValue = [actionTypeId, id].join(this.delimiter)
                const info1 = { text: this.actor.system[stat] }
                actions.push({
                    id,
                    name,
                    listName,
                    encodedValue,
                    info1
                })
            }
            // TAH Core method to add actions to the action list
            this.addActions(actions, groupData)
        }

        /**
         * Build meters
         * @private
         */
        #buildMeters() {
            const actionTypeId = 'meter'
            const groupData = { id: 'meter', type: 'system' }

            // Get actions
            const actions = []
            for (const meter in METERS) {
                const id = meter
                if (meter == 'hold' && !game.settings.get('foundry-ironsworn', 'character-hold')) {
                    continue
                }

                const name = coreModule.api.Utils.i18n(METERS[meter]).charAt(0).toUpperCase() + coreModule.api.Utils.i18n(METERS[meter]).slice(1)
                const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                const encodedValue = [actionTypeId, id].join(this.delimiter)
                const info1 = { text: this.actor.system[meter].value }
                actions.push({
                    id,
                    name,
                    listName,
                    encodedValue,
                    info1
                })
            }
            // TAH Core method to add actions to the action list
            this.addActions(actions, groupData)
        }

        /**
         * Build impacts
         * @private
         */
        async #buildImpacts(isStarship) {
            const actionTypeId = 'impact'
            const impactMap = new Map()
            let IMPACTS

            if (this.actor.flags.core?.sheetClass === 'ironsworn.IronswornCharacterSheetV2') {
                IMPACTS = IMPACTS_IS
            } else if (isStarship) {
                IMPACTS = IMPACTS_STARSHIP
            } else {
                IMPACTS = IMPACTS_SF
            }

            for (const key in IMPACTS) {
                if (IMPACTS.hasOwnProperty(key)) {
                    const nestedObject = IMPACTS[key];
                    const groupIdMap = impactMap.get(nestedObject.groupId) ?? new Map()
                    groupIdMap.set(key, nestedObject.groupId)
                    impactMap.set(nestedObject.groupId, groupIdMap)
                }
            }

            for (const [groupId, groupIdMap] of impactMap) {
                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...groupIdMap].map(([impactId]) => {
                    const id = impactId
                    const name = coreModule.api.Utils.i18n(IMPACTS[impactId].name).charAt(0).toUpperCase() + coreModule.api.Utils.i18n(IMPACTS[impactId].name).slice(1)
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    const info1 = { text: this.actor.system.debility[impactId] ? '\u{1F518}' : null }
                    return {
                        id,
                        name,
                        listName,
                        encodedValue,
                        info1
                    }
                })
                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }

        /**
         * Build moves
         * @private
         */
        async #buildMoves() {
            const moveArray = [ MOVES_CLASSIC, MOVES_DELVE, MOVES_STARFORGED, MOVES_SUNDERED_ISLES ]
            for (const key of moveArray) {
                const moveMap = new Map()
                let MOVES = key

                for (const key in MOVES) {
                    if (MOVES.hasOwnProperty(key)) {
                        const nestedObject = MOVES[key];
                        const groupIdMap = moveMap.get(nestedObject.groupId) ?? new Map()
                        groupIdMap.set(key, nestedObject.groupId)
                        moveMap.set(nestedObject.groupId, groupIdMap)
                    }
                }

                for (const [groupId, groupIdMap] of moveMap) {
                    if (!groupId) continue

                    const groupData = { id: groupId, type: 'system' }

                    // Get actions
                    const actions = [...groupIdMap].map(([moveId]) => {
                        const id = moveId
                        const name = MOVES[moveId].name
                        const actionTypeName = MOVES[moveId].actionTypeId
                        const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                        const encodedValue = [MOVES[moveId].actionTypeId, id].join(this.delimiter)
                        return {
                            id,
                            name,
                            listName,
                            encodedValue
                        }
                    })
                    // TAH Core method to add actions to the action list
                    this.addActions(actions, groupData)
                }
            }
        }
    }
})
