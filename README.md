Hydra
=====

Hydra is a Javascript game engine for Mobile WebKit.

Documentation is sorely lacking, but I've dogfooded it with a couple games:
  - Block Dream (projects/tetris): http://aduros.emufarmers.com/block-dream
  - Fruit Link (projects/jam): http://aduros.emufarmers.com/html5jam

Design
------

Hydra aims to be fast:
  - Animations are implemented as CSS transitions, which can be hardware accelerated.
  - All game updates are performed on a single setInterval callback.
  - Sprites can be pooled, avoiding costly construction and removal of DOM elements.
  - Games are compiled with Google's Closure Compiler in "advanced" mode, allowing aggressive inlining and dead-code elimination.

Hydra also aims to be functional:
  - Animations can programmatically be started, paused, and sequenced together.
  - Games are composed from scenes, entities (which live in scenes) and tasks (which act upon entities).
  - Has the usual collection of utility functions and classes, supplemented by the massive Closure Library.
  - Needless abstractions are avoided, you should still know how to work with the DOM and skin your game with CSS.

Platforms
---------

Platforms currently supported:
  - iOS 3+ (iPhone, iPod touch, iPad)
  - Android 2.1+

I'd eventually like to be able to support:
  - Blackberry OS 6+
  - WebOS (via PhoneGap)