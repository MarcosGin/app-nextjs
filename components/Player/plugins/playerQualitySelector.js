import "videojs-contrib-quality-levels"; // register plugin

import videojs from "video.js";
import ConcreteButton from "./ConcreteButton";
import ConcreteMenuItem from "./ConcreteMenuItem";

// Default options for the plugin.
const defaults = {};

// Cross-compatibility for Video.js 5 and 6.
const registerPlugin = videojs.registerPlugin || videojs.plugin;
// const dom = videojs.dom || videojs;

/**
 * VideoJS HLS Quality Selector Plugin class.
 */
class HlsQualitySelectorPlugin {
  /**
   * Plugin Constructor.
   *
   * @param {Player} player - The videojs player instance.
   * @param {Object} options - The plugin options.
   */
  constructor(player, options) {
    this.player = player;

    // If there is quality levels plugin and the HLS tech exists
    // then continue.
    if (this.player.qualityLevels && this.getHls()) {
      // Create the quality button.
      this.createQualityButton();
      this.bindPlayerEvents();
    }
  }

  /**
   * Returns HLS Plugin
   *
   * @return {*} - videojs-hls-contrib plugin.
   */
  getHls() {
    return this.player.tech({ IWillNotUseThisInPlugins: true }).hls;
  }

  /**
   * Binds listener for quality level changes.
   */
  bindPlayerEvents() {
    this.player.qualityLevels().on("addqualitylevel", this.onAddQualityLevel.bind(this));
    this.player.qualityLevels().on("change", this.onChangeQuality.bind(this));
  }

  /**
   * Adds the quality menu button to the player control bar.
   */
  createQualityButton() {
    const player = this.player;

    this._qualityButton = new ConcreteButton(player);

    const placementIndex = player.controlBar.children().length - 2;
    const concreteButtonInstance = player.controlBar.addChild(
      this._qualityButton,
      { componentClass: "qualitySelector" },
      placementIndex
    );

    concreteButtonInstance.addClass("vjs-quality-selector");
    concreteButtonInstance.menuButton_.$(".vjs-icon-placeholder").className += " vjs-icon-cog";
    concreteButtonInstance.removeClass("vjs-hidden");
  }

  /**
   * Builds individual quality menu items.
   *
   * @param {Object} item - Individual quality menu item.
   * @return {ConcreteMenuItem} - Menu item
   */
  getQualityMenuItem(item) {
    const player = this.player;

    return new ConcreteMenuItem(player, item, this._qualityButton, this);
  }

  /**
   * Executed when the quality change, and add class when is HD Quality
   */
  onChangeQuality(params) {
    const className = "vls-quality-selected-hd";
    const qualitys = this.player.qualityLevels().levels_ || [];
    const selectedQuality = qualitys[params.selectedIndex];
    if (selectedQuality.height >= 720) {
      this._qualityButton.addClass(className);
    } else {
      this._qualityButton.removeClass(className);
    }
  }

  /**
   * Executed when a quality level is added from HLS playlist.
   */
  onAddQualityLevel() {
    const player = this.player;
    const qualityList = player.qualityLevels();
    const levels = qualityList.levels_ || [];
    const levelItems = [];

    levelItems.push(
      this.getQualityMenuItem.call(this, {
        label: player.localize("Auto"),
        value: "auto",
        selected: true
      })
    );
    for (let i = 0; i < levels.length; ++i) {
      if (
        !levelItems.filter(_existingItem => {
          return _existingItem.item && _existingItem.item.value === levels[i].height;
        }).length
      ) {
        const levelItem = this.getQualityMenuItem.call(this, {
          label: levels[i].height + "p",
          value: levels[i].height
        });

        if (levels[i].height >= 720) {
          levelItem.addClass("is-hd");
        }

        levelItems.push(levelItem);
      }
    }

    levelItems.sort((current, next) => {
      if (typeof current !== "object" || typeof next !== "object") {
        return -1;
      }
      if (current.item.value < next.item.value) {
        return 1;
      }
      if (current.item.value > next.item.value) {
        return -1;
      }
      return 0;
    });

    if (this._qualityButton) {
      this._qualityButton.createItems = function() {
        return levelItems;
      };
      this._qualityButton.update();
    }
  }

  /**
   * Sets quality (based on media height)
   *
   * @param {number} height - A number representing HLS playlist.
   */
  setQuality(height) {
    const qualityList = this.player.qualityLevels();

    for (let i = 0; i < qualityList.length; ++i) {
      const quality = qualityList[i];

      quality.enabled = quality.height === height || height === "auto";
    }

    this._qualityButton.unpressButton();
  }
}

/**
 * Function to invoke when the player is ready.
 *
 * This is a great place for your plugin to initialize itself. When this
 * function is called, the player will have its DOM and child components
 * in place.
 *
 * @function onPlayerReady
 * @param    {Player} player
 *           A Video.js player object.
 *
 * @param    {Object} [options={}]
 *           A plain object containing options for the plugin.
 */
const onPlayerReady = (player, options) => {
  console.log("Register", player);
  player.addClass("vjs-hls-quality-selector");
  player.hlsQualitySelector = new HlsQualitySelectorPlugin(player, options);
};

/**
 * A video.js plugin.
 *
 * In the plugin function, the value of `this` is a video.js `Player`
 * instance. You cannot rely on the player being in a "ready" state here,
 * depending on how the plugin is invoked. This may or may not be important
 * to you; if not, remove the wait for "ready"!
 *
 * @function hlsQualitySelector
 * @param    {Object} [options={}]
 *           An object of options left to the plugin author to define.
 */
const hlsQualitySelector = function(options) {
  this.ready(() => {
    console.log(this);
    onPlayerReady(this, videojs.mergeOptions(defaults, options));
  });
};
// Register the plugin with video.js.
registerPlugin("hlsQualitySelector", hlsQualitySelector);

// Include the version number.
hlsQualitySelector.VERSION = "0.0.1-custom";
