/*globals define*/
define(function (require, exports, module) {
    'use strict';

    Meteor.startup(function () {
        // require every needed definition here so they get bundled
        Famous.Engine = require('famous/core/Engine');
        Famous.Entity = require('famous/core/Entity');
        Famous.EventHandler = require('famous/core/EventHandler');
        Famous.Matrix = require('famous/math/Matrix');
        Famous.Modifier = require('famous/core/Modifier');
        Famous.RenderNode = require('famous/core/RenderNode');
        Famous.Surface = require('famous/core/Surface');
        Famous.Transform = require('famous/core/Transform');
        Famous.View = require('famous/core/View');
        Famous.ViewSequence = require('famous/core/ViewSequence');

        Famous.Scrollview = require('famous/views/Scrollview');

        Famous.FastClick = require('famous/inputs/FastClick');

        Famous.Utility = require('famous/utilities/Utility');

        // run hooks
        _.each(Famous._onLoad, function (func) {
            func(require);
        });
    });
});