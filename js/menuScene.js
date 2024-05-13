/* global Phaser */

// Copyright (c) 2024 Hames.al-sharoa ALL rights reserved
//
// Created by: Hames.al-sharoa
// created on: apr 2024
// This is the phaser Scene 

/**
 * this class is the Menu Scene.
 */
class MenuScene extends Phaser.Scene {
  /**
    * this method is the construtor
    */
  constructor() {
    super({ key: "menuScene" })
  
    this.MenuSceneBackground = null
    this.startbutton = null
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
    console.log("Menu Scene")
    this,load.image("menuSceneBackground", "./assets/aliens_screen_image2.jpg")
    thia.load.image("startButtom", "./assets/start.png")
  }
  
  /**
   * an be defined on your own Scenes.,
   * Use it to create your game objects.
   * @param { object } data - any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  create(data) {
  this.startbutton.MenuSceneBackground = this.add.sprite(0,0, "menuSceneBackground")
  this.MenuSceneBackground.x = 1920 / 2
  this.MenuSceneBackground.y = 1080 / 2

    this.startButton = this.add.sprite(1920 / 2, 1080 / 2 + 100, "startButton")
    this.startButton.setInteractive({ useHandCursor: true})
    this.startButton.on("pointerdown", () => this.clickButton())
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

export default MenuScene 
