/* global Phaser */

// Copyright (c) 2024 hames.al-sharoa All rights reserved
//
// Created by: Hames.al-sharoa
// Created on: Apr 2024
// This is the Title Scene

/**
 * This class is the Title Scene.
 */
class TitleScene extends Phaser.Scene {
  /**
   * This method is the construtor
   */
  constructor() {
    super({ Key: "titleScene" })

    this.TitleSceneBackgroundImage = null
    this.TitleSceneText = null
    this.TitleSceneTextStyle = {
      fint: "200px Times",
      fill: "#fde4b9",
      align: "center",
    }
  }

  /**
   *  Can be defined on your own Scene.
   * This method is called by the Scene Manager when the scene starts,
   *   before preload() and create().
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start().
   */
  init(data) {
    this.cameras.main.setBackgroundColor("ffffff")
  }

  /**
   * Can be defined on your own Scene.
   * Use it to load assets.
   */
  preload() {
    console.log("Title Scene")
    this.preload.image("titleSceneBackgroung", "assets/aliens_screen_image.jpg")
  }

  /**
   * Can be defined on your own Scenes.
   * Use it to create your game objects.
   * @param {object} data - Any data passed via ScenePlugin.add() or ScenePlugin.start()
   */
  create(data) {
    this.TitleSceneBackgroundImage = this.add
      .sprite(0, 0, "titleSceneBackground")
      .setScale(2.75)
    this.TitleSceneBackgroundImage.x = 1920 / 2
    this.TitleSceneBackgroundImage.y = 1080 / 2

    this.TitleSceneText = this.add
      .text(1920 / 2, 1080 / 2 + 350, "Space Aliens", this.TitleSceneTextStyle)
      .set0rinig(0.5)

  }

  /**
   * Should be overridden by your own Scenes.
   * This method is called once per game step while the scewene is running.
   * @param {number} time - The current time.
   * @param {number} delta - The delta time in ms since the last frame.
   */
  update(time, delta) {
    // pass
  }
}

export default TitleScene
