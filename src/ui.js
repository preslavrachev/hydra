goog.provide("hydra.Button");
goog.provide("hydra.ScrollPreventer");

goog.require("hydra.Sprite");
goog.require("hydra.dom");

/**
 * @constructor
 * @extends hydra.Sprite
 * @param {Element=} element
 */
hydra.Button = function (element) {
    goog.base(this, element);

    /**
     * @private
     * @type {boolean}
     */
    this.toggled = false;

    hydra.dom.addClass(this.element, "button");

    this.registerListener(this.element, "touchstart", this);
    this.registerListener(this.element, "touchend", this);
    this.registerListener(this.element, "touchcancel", this);
}
goog.inherits(hydra.Button, hydra.Sprite);

hydra.Button.prototype.onTap = function () { }

/**
 * @inline
 * @param {string} className
 * @return {hydra.Button}
 */
hydra.Button.div = function (className) {
    return new hydra.Button(hydra.dom.div(className));
}

/**
 * @param {boolean} t
 */
hydra.Button.prototype.setToggled = function (t) {
    this.toggled = t;
    if (t) {
        hydra.dom.addClass(this.element, "button-down");
    } else {
        hydra.dom.removeClass(this.element, "button-down");
    }
}

hydra.Button.prototype.isToggled = function () {
    return this.toggled;
}

hydra.Button.prototype["handleEvent"] = function (event) {
    if (this.scene.isCurrentScene()) {
        switch (event.type) {
            case "touchstart":
                hydra.dom.addClass(this.element, "button-down");
                break;
            case "touchend":
            case "touchcancel":
                if (!event.targetTouches.length) {
                    hydra.dom.removeClass(this.element, "button-down");
                    this.onTap();
                }
                break;
        }
    }
    event.stopPropagation();
}

/**
 * @constructor
 * @extends hydra.Entity
 */
hydra.ScrollPreventer = function () {
    goog.base(this);

    this.registerListener(document, "touchstart", this);

    /** @type boolean */
    this.enabled = true;
}
goog.inherits(hydra.ScrollPreventer, hydra.Entity);

hydra.ScrollPreventer.prototype["handleEvent"] = function (event) {
    if (this.enabled) {
        event.preventDefault();
    }
}
