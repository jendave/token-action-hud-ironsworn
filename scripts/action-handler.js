// System Module Imports
import { ACTION_TYPE, ITEM_TYPE } from './constants.js'
import { Utils } from './utils.js'
import { STATS } from './constants.js'

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
        async buildSystemActions (groupIds) {
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
            } else if (!this.actor) {
                this.#buildMultipleTokenActions()
            }
        }

        /**
         * Build character actions
         * @private
         */
        #buildCharacterActions () {
            this.#buildInventory()
            this.#buildStats()
        }

        /**
         * Build multiple token actions
         * @private
         * @returns {object}
         */
        #buildMultipleTokenActions () {
        }

        /**
         * Build inventory
         * @private
         */
        async #buildInventory () {
            if (this.items.size === 0) return

            const actionTypeId = 'item'
            const inventoryMap = new Map()

            for (const [itemId, itemData] of this.items) {
                // let itemDataTemp = itemData //structuredClone(itemData)
                // if (itemDataTemp.type === 'progress') {
                //     if (itemDataTemp.system.subtype === 'vow') {
                //         itemDataTemp.type = 'vow'
                //     } else if (itemDataTemp.type.system.subtype === 'bond') {
                //         itemDataTemp.type = 'connection'
                //     }
                // } else if (itemDataTemp.type === 'asset') {
                //     if (itemDataTemp.system.category === 'Path') {
                //         itemDataTemp.type = 'path'
                //     } else if (itemDataTemp.system.category === 'Companion') {
                //         itemDataTemp.type = 'companion'
                //     } else if (itemDataTemp.system.category === 'Combat Talent') {
                //         itemDataTemp.type = 'combatTalent'
                //     } else if (itemDataTemp.system.category === 'Ritual') {
                //         itemDataTemp.type = 'ritual'
                //     } else if (itemDataTemp.system.category === 'Deed') {
                //         itemDataTemp.type = 'deed'
                //     } else if (itemDataTemp.system.category === 'Module') {
                //         itemDataTemp.type = 'module'
                //     } else if (itemDataTemp.system.category === 'Command Vehicle') {
                //         itemDataTemp.type = 'commandVehicle'
                //     } else if (itemDataTemp.system.category === 'Support Vehicle') {
                //         itemDataTemp.type = 'supportVehicle'
                //     }
                // }
                // const type = itemDataTemp.type
                // const typeMap = inventoryMap.get(type) ?? new Map()
                // typeMap.set(itemId, itemDataTemp)
                // inventoryMap.set(type, typeMap)
                if (itemData.type === 'progress') {
                    if (itemData.system.subtype === 'vow') {
                        itemData.type = 'vow'
                    } else if (itemData.system.subtype === 'bond') {
                        itemData.type = 'connection'
                    }
                } else if (itemData.type === 'asset') {
                    if (itemData.system.category === 'Path') {
                        itemData.type = 'path'
                    } else if (itemData.system.category === 'Companion') {
                        itemData.type = 'companion'
                    } else if (itemData.system.category === 'Combat Talent') {
                        itemData.type = 'combatTalent'
                    } else if (itemData.system.category === 'Ritual') {
                        itemData.type = 'ritual'
                    } else if (itemData.system.category === 'Deed') {
                        itemData.type = 'deed'
                    } else if (itemData.system.category === 'Module') {
                        itemData.type = 'module'
                    } else if (itemData.system.category === 'Command Vehicle') {
                        itemData.type = 'commandVehicle'
                    } else if (itemData.system.category === 'Support Vehicle') {
                        itemData.type = 'supportVehicle'
                    }
                }
                const type = itemData.type
                const typeMap = inventoryMap.get(type) ?? new Map()
                typeMap.set(itemId, itemData)
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

        /**
         * Build stats
         * @private
         */
        #buildStats () {
            const actionTypeId = 'stats'
            const groupData = { id: 'stats', type: 'system' }

            // Get actions
            const actions = []
            for (const stat in STATS) {
                const id = stat
                const name = STATS[stat]
                const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                const encodedValue = [actionTypeId, id].join(this.delimiter)
                actions.push({
                    id,
                    name,
                    listName,
                    encodedValue
                })
            }
            // TAH Core method to add actions to the action list
            this.addActions(actions, groupData)
        }
    }
})
