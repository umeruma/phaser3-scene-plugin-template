export default class ScenePluginTemplate extends Phaser.Plugins.ScenePlugin {
  /**
   * @param {Phaser.Scene} scene A reference to the Scene that has installed this plugin.
   * @param {Phaser.Plugins.PluginManager} pluginManager A reference to the Plugin Manager.
   */
  constructor(scene, pluginManager) {
    super(scene, pluginManager)

    this.scene = scene
  }

  boot() {
    /**
     * Scene events you can listen to:
     *
     * start
     * ready
     * preupdate
     * update
     * postupdate
     * resize
     * pause
     * resume
     * sleep
     * wake
     * transitioninit
     * transitionstart
     * transitioncomplete
     * transitionout
     * shutdown
     * destroy
     */

    const eventEmitter = this.systems.events
    eventEmitter.on('start', this.start, this)
    eventEmitter.once('destroy', this.destroy, this)

    console.log('BOOT')
  }

  start() {
    console.log('START')
  }

  destroy() {
    this.scene = undefined
  }
}
