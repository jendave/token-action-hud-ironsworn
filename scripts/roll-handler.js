export let RollHandler = null

Hooks.once('tokenActionHudCoreApiReady', async (coreModule) => {
    /**
     * Extends Token Action HUD Core's RollHandler class and handles action events triggered when an action is clicked
     */
    RollHandler = class RollHandler extends coreModule.api.RollHandler {
        /**
         * Handle action click
         * Called by Token Action HUD Core when an action is left or right-clicked
         * @override
         * @param {object} event        The event
         * @param {string} encodedValue The encoded value
         */
        async handleActionClick(event, encodedValue) {
            const [actionTypeId, actionId] = encodedValue.split('|')

            const renderable = ['item']

            if (renderable.includes(actionTypeId) && this.isRenderItem()) {
                return this.doRenderItem(this.actor, actionId)
            }

            const knownCharacters = ['character']

            // If single actor is selected
            if (this.actor) {
                await this.#handleAction(event, this.actor, this.token, actionTypeId, actionId)
                return
            }

            const controlledTokens = canvas.tokens.controlled
                .filter((token) => knownCharacters.includes(token.actor?.type))

            // If multiple actors are selected
            for (const token of controlledTokens) {
                const actor = token.actor
                await this.#handleAction(event, actor, token, actionTypeId, actionId)
            }
        }

        /**
         * Handle action hover
         * Called by Token Action HUD Core when an action is hovered on or off
         * @override
         * @param {object} event        The event
         * @param {string} encodedValue The encoded value
         */
        async handleActionHover(event, encodedValue) { }

        /**
         * Handle group click
         * Called by Token Action HUD Core when a group is right-clicked while the HUD is locked
         * @override
         * @param {object} event The event
         * @param {object} group The group
         */
        async handleGroupClick(event, group) { }

        /**
         * Handle action
         * @private
         * @param {object} event        The event
         * @param {object} actor        The actor
         * @param {object} token        The token
         * @param {string} actionTypeId The action type id
         * @param {string} actionId     The actionId
         */
        async #handleAction(event, actor, token, actionTypeId, actionId) {
            switch (actionTypeId) {
                case 'item':
                    if (actor.items.get(actionId).type === 'progress') {
                        this.#handleProgressAction(event, actor, actionId)
                    }
                    this.#handleAssetAction(event, actor, actionId)
                    break
                case 'stat':
                    this.#handleStatAction(event, actor, actionId)
                    break
                case 'meter':
                    this.#handleMeterAction(event, actor, actionId)
                    break
                case 'impact':
                    this.#handleImpactAction(event, actor, actionId)
                    break
                case 'utility':
                    this.#handleUtilityAction(token, actionId)
                    break
            }
        }

        /**
         * Handle item action
         * @private
         * @param {object} event    The event
         * @param {object} actor    The actor
         * @param {string} actionId The action id
         */
        #handleProgressAction(event, actor, actionId) {
            actor.items.get(actionId).sheet.render(true)
        }

        /**
 * Handle item action
 * @private
 * @param {object} event    The event
 * @param {object} actor    The actor
 * @param {string} actionId The action id
 */
        #handleAssetAction(event, actor, actionId) {
            actor.items.get(actionId).sheet.render(true)
        }

        /**
 * Handle stat action
 * @private
 * @param {object} event    The event
 * @param {object} actor    The actor
 * @param {string} actionId The action id
 */
        #handleStatAction(_event, actor, actionId) {
            CONFIG.IRONSWORN.applications.IronswornPrerollDialog.showForStat(actionId, actor)
        }

        /**
* Handle meter action
* @private
* @param {object} event    The event
* @param {object} actor    The actor
* @param {string} actionId The action id
*/
        #handleMeterAction(_event, actor, actionId) {
            CONFIG.IRONSWORN.applications.IronswornPrerollDialog.showForStat(actionId, actor)
        }

        /**
* Handle meter action
* @private
* @param {object} event    The event
* @param {object} actor    The actor
* @param {string} actionId The action id
*/
        async #handleImpactAction(_event, actor, actionId) {
            const tempValue = !actor.system.debility[actionId]
            const data = {
                system: {
                    debility: {
                        [actionId]: tempValue
                    }
                }
            }
            await actor.update(data)
            Hooks.call('tokenActionHudCoreApiReady', actor)
        }

        /**
         * Handle utility action
         * @private
         * @param {object} token    The token
         * @param {string} actionId The action id
         */
        async #handleUtilityAction(token, actionId) {
            switch (actionId) {
                case 'endTurn':
                    if (game.combat?.current?.tokenId === token.id) {
                        await game.combat?.nextTurn()
                    }
                    break
            }
        }
    }
})
