/* global Phaser */

// Copyright (c) 2024 Hames.al-sharoa ALL rights reserved
//
// Created by: Hames.al-sharoa
// created on: apr 2024
// This is the phaser Scene 

/**
 * this class is the Menu Scene.
 */
class GameScene extends Phaser.Scene {
  /**
    * this method is the construtor
    */
  constructor() {
    super({ key: "gameScene" })
  }

  /**
   * can be definded on your own Scenes.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   *@param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to load assets.
   */
  preload() {
    console.log("Game Scene")
  }

  /**
   * an be defined on your own Scenes.,
   * Use it to create your game objects.
   * @param {object} data - any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
    //pass
  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame. 
   */
  update(time, delta) {
    //pass
  }
}

export default GameScene 