/* ========================================================================
 * Bootstrap: transition.js v3.0.0
 * http://twbs.github.com/bootstrap/javascript.html#transitions
 * ========================================================================
 * Copyright 2013 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * ======================================================================== */
/*

Modified for use with PrototypeJS

https://github.com/jwestbrook/bootstrap-prototype/tree/master-3.0


*/


'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================


var BootStrap = {
  transitionendevent : null,
  handleeffects : null
  };

//Test CSS transitions first - less JS to implement
var transEndEventNames = $H({
  'WebkitTransition' : 'webkitTransitionEnd',
  'MozTransition'    : 'transitionend',
  'OTransition'      : 'oTransitionEnd otransitionend',
  'transition'       : 'transitionend'
});

var el = new Element('bootstrap');
transEndEventNames.each(function(pair){
  if(el.style[pair.key] !== undefined)
  {
    BootStrap.transitionendevent = pair.value;
    BootStrap.handleeffects = 'css';
  }
});

//then go to scriptaculous

if(BootStrap.handleeffects === null && typeof Scriptaculous !== 'undefined' && typeof Effect !== 'undefined')
{
  BootStrap.handleeffects = 'effect';
}