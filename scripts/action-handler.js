// System Module Imports
import { MODULE_IRONSWORN, ACTION_TYPE, ITEM_TYPE, STATS, LEGACIES, METERS_IS, METERS_SUNDERED_ISLES, IMPACTS_SF, IMPACTS_IS, IMPACTS_STARSHIP, MOVES_CLASSIC, MOVES_DELVE, MOVES_STARFORGED, MOVES_SUNDERED_ISLES } from './constants.js'

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
            this.actors = (!this.actor) ? this._getActors() : [this.actor]
            this.actorType = this.actor?.type
            if (this.actorType === 'character' || this.actorType === 'starship' || this.actorType === 'shared' || this.actorType === 'foe') {
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
                } else if (this.actorType === 'foe') {
                    this.#buildNPCActions()
                }
            } else {
                this.actors = null
                this.actorType = null
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
            if (this.actor.flags.core?.sheetClass !== 'ironsworn.IronswornCharacterSheetV2') {
                this.#buildLegacies()
            }
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
         * Build NPC/foe actions
         * @private
         */
        #buildNPCActions() {
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
                if (itemDataTemp.type === 'bondset' && this.actor.flags.core?.sheetClass !== 'ironsworn.IronswornCharacterSheetV2') {
                    continue
                }
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
                // if (itemDataTemp.type === 'progress' || itemDataTemp.type === 'vow' || itemDataTemp.type === 'connection') {
                //     typeMap.set(itemId, itemDataTemp)
                //     inventoryMap.set(type, typeMap)
                //     itemDataTemp.type = 'markProgress'
                //     inventoryMap.set(type, typeMap)
                //     itemDataTemp.type = 'fulfillProgress'
                //     inventoryMap.set(type, typeMap)
                // } else {
                //     typeMap.set(itemId, itemDataTemp)
                //     inventoryMap.set(type, typeMap)
                // }
            }

            for (const [type, typeMap] of inventoryMap) {
                const groupId = ITEM_TYPE[type]?.groupId

                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                // Get actions
                const actions = [...typeMap].map(([itemId, itemData]) => {
                    const id = itemId
                    const name = itemData.type === 'bondset' ? coreModule.api.Utils.i18n('IRONSWORN.ITEMS.TypeBond') : itemData.name
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    const info1 = (itemData.type === 'progress' || itemData.system.subtype === 'vow' || itemData.type === 'connection') ? { text: Math.floor(itemData.system.current / 4).toString() + ',\u00A0' + Math.floor(itemData.system.current % 4).toString() } : itemData.type === 'bondset' ? { text: Math.floor(itemData.system.bonds.length / 4).toString() + ',\u00A0' + Math.floor(itemData.system.bonds.length % 4).toString() } : ''
                    const tooltip = (itemData.type === 'progress' || itemData.system.subtype === 'vow' || itemData.type === 'connection') ? { content: Math.floor(itemData.system.current / 4).toString() + '\u00A0boxes,\u00A0' + Math.floor(itemData.system.current % 4).toString() + '\u00A0ticks' } : itemData.type === 'bondset' ? { content: Math.floor(itemData.system.bonds.length / 4).toString() + '\u00A0boxes,\u00A0' + Math.floor(itemData.system.bonds.length % 4).toString() + '\u00A0ticks' } : ''

                    // actionTypeId = 'markProgress'
                    // \u23F5 mark progress
                    // actionTypeId = 'fulfillProgress'
                    // '\u23ED' fulfill vow
                    // put into encodedValue
                    return {
                        id,
                        name,
                        listName,
                        encodedValue,
                        info1,
                        tooltip
                    }
                })

                if (groupId === 'connection' || groupId === 'progress' || groupId === 'vow') {
                    let actionsTemp = []
                    for (const item of actions) {
                        actionsTemp.push(item)

                        const markProgressItem = structuredClone(item)
                        const markProgressName = '\u23F5'
                        const markProgressActionTypeId = 'markProgress'
                        const markProgressListName = 'markProgress'
                        markProgressItem.encodedValue = [markProgressActionTypeId, markProgressItem.id].join(this.delimiter)
                        markProgressItem.name = markProgressName
                        markProgressItem.listName = markProgressListName
                        markProgressItem.info1 = ''
                        markProgressItem.tooltip = { content: coreModule.api.Utils.i18n('IRONSWORN.MarkProgress') }
                        markProgressItem.id = `${markProgressItem.id}_markProgress`
                        actionsTemp.push(markProgressItem)

                        const progressRollItem = structuredClone(item)
                        const progressRollName = '\u23ED'
                        const progressRollActionTypeId = 'progressRoll'
                        const progressRollListName = 'progressRoll'
                        progressRollItem.encodedValue = [progressRollActionTypeId, progressRollItem.id].join(this.delimiter)
                        progressRollItem.name = progressRollName
                        progressRollItem.listName = progressRollListName
                        progressRollItem.info1 = ''
                        progressRollItem.tooltip = { content: coreModule.api.Utils.i18n('IRONSWORN.ProgressRoll') }
                        progressRollItem.id = `${progressRollItem.id}_progressRoll`
                        actionsTemp.push(progressRollItem)
                    }
                    this.addActions(actionsTemp, groupData)
                } else if (groupId === 'bondset') {
                    let actionsTemp = []
                    for (const item of actions) {
                        actionsTemp.push(item)

                        const writeEpilogueItem = structuredClone(item)
                        const writeEpilogueName = '\u23ED'
                        const writeEpilogueActionTypeId = 'writeEpilogue'
                        const writeEpilogueListName = 'writeEpilogue'
                        writeEpilogueItem.encodedValue = [writeEpilogueActionTypeId, writeEpilogueItem.id].join(this.delimiter)
                        writeEpilogueItem.name = writeEpilogueName
                        writeEpilogueItem.listName = writeEpilogueListName
                        writeEpilogueItem.info1 = ''
                        writeEpilogueItem.tooltip = { content: coreModule.api.Utils.i18n('IRONSWORN.ProgressRoll') }
                        writeEpilogueItem.id = `${writeEpilogueItem.id}_writeEpilogue`
                        actionsTemp.push(writeEpilogueItem)
                    }
                    this.addActions(actionsTemp, groupData)
                } else {
                    // TAH Core method to add actions to the action list
                    this.addActions(actions, groupData)
                }
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
         * Build legacies
         * @private
         */
        #buildLegacies() {
            const actionTypeId = 'legacy'
            const legacyMap = new Map()
            // const groupData = { id: 'legacy', type: 'system' }

            for (const key in LEGACIES) {
                if (LEGACIES.hasOwnProperty(key)) {
                    const nestedObject = LEGACIES[key];
                    const groupIdMap = legacyMap.get(nestedObject.groupId) ?? new Map()
                    groupIdMap.set(key, nestedObject.groupId)
                    legacyMap.set(nestedObject.groupId, groupIdMap)
                }
            }

            for (const [groupId, groupIdMap] of legacyMap) {
                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }
                // Get actions
                const actions = [...groupIdMap].map(([legacyId]) => {
                    let name = ''
                    let info1 = ''
                    let tooltip = ''
                    const id = legacyId
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    if (id === 'questsIncrease' || id === 'bondsIncrease' || id === 'discoveriesIncrease') {
                        name = '\u23F5'
                        info1 = ''
                        tooltip = { content: coreModule.api.Utils.i18n('IRONSWORN.MarkProgress') }
                    }
                    else {
                        name = coreModule.api.Utils.i18n(LEGACIES[id].name).charAt(0).toUpperCase() + coreModule.api.Utils.i18n(LEGACIES[id].name).slice(1)
                        info1 = { text: Math.floor(this.actor.system?.legacies[id] / 4).toString() + ',\u00A0' + Math.floor(this.actor.system?.legacies[id] % 4).toString() }
                        tooltip = { content: Math.floor(this.actor.system?.legacies[id] / 4).toString() + '\u00A0boxes,\u00A0' + Math.floor(this.actor.system?.legacies[id] % 4).toString() + '\u00A0ticks' }

                    }
                    return {
                        id,
                        name,
                        listName,
                        encodedValue,
                        info1,
                        tooltip
                    }
                })
                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
        }

        /**
         * Build meters
         * @private
         */
        #buildMeters() {
            const actionTypeId = 'meter'
            const meterMap = new Map()

            let METERS

            if (game.settings.get('foundry-ironsworn', 'character-hold')) {
                METERS = METERS_SUNDERED_ISLES
            } else {
                METERS = METERS_IS
            }

            for (const key in METERS) {
                if (METERS.hasOwnProperty(key)) {
                    const nestedObject = METERS[key];
                    const groupIdMap = meterMap.get(nestedObject.groupId) ?? new Map()
                    groupIdMap.set(key, nestedObject.groupId)
                    meterMap.set(nestedObject.groupId, groupIdMap)
                }
            }

            // Get actions
            for (const [groupId, groupIdMap] of meterMap) {
                if (!groupId) continue

                const groupData = { id: groupId, type: 'system' }

                const actions = [...groupIdMap].map(([meterId]) => {
                    const id = meterId
                    const name = coreModule.api.Utils.i18n(METERS[id].name).charAt(0).toUpperCase() + coreModule.api.Utils.i18n(METERS[id].name).slice(1)
                    const actionTypeName = coreModule.api.Utils.i18n(ACTION_TYPE[actionTypeId])
                    const listName = `${actionTypeName ? `${actionTypeName}: ` : ''}${name}`
                    const encodedValue = [actionTypeId, id].join(this.delimiter)
                    let info1 = ''
                    let tooltip = ''
                    if (METERS[id].name === '\u23F4') {
                        tooltip = { content: coreModule.api.Utils.i18n('tokenActionHud.ironsworn.decrease') }
                    } else if (METERS[id].name === '\u23F5') {
                        tooltip = { content: coreModule.api.Utils.i18n('tokenActionHud.ironsworn.increase') }
                    }
                    if (id === 'momentumMax') {
                        info1 = { text: this.actor.system?.momentumMax ? this.actor.system?.momentumMax : '' }
                    } else if (id === 'momentumReset') {
                        info1 = { text: this.actor.system?.momentumReset ? this.actor.system?.momentumReset : '' }
                    } else {
                        info1 = { text: this.actor.system[id]?.value === 0 ? '0' : this.actor.system[id]?.value ? this.actor.system[id]?.value : '' }
                    }
                    return {
                        id,
                        name,
                        listName,
                        encodedValue,
                        info1,
                        tooltip
                    }
                })

                // TAH Core method to add actions to the action list
                this.addActions(actions, groupData)
            }
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
         * Build Moves
         * @private
         */
        async #buildMoves() {
            const moveArray = []

            if (game.settings.get(MODULE_IRONSWORN.ID, 'ruleset-classic')) {
                moveArray.push(MOVES_CLASSIC)
            }

            if (game.settings.get(MODULE_IRONSWORN.ID, 'ruleset-delve')) {
                moveArray.push(MOVES_DELVE)
            }

            if (game.settings.get(MODULE_IRONSWORN.ID, 'ruleset-starforged')) {
                moveArray.push(MOVES_STARFORGED)
            }

            if (game.settings.get(MODULE_IRONSWORN.ID, 'ruleset-sundered_isles')) {
                moveArray.push(MOVES_SUNDERED_ISLES)
            }

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
