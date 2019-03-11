/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import './shared-styles.js';

import './components/asunto-list.js';

class MyView1 extends PolymerElement {
  static get template() {
    return html`
      <style include="shared-styles">
        :host {
          display: block;

          padding: 10px;
        }
      </style>

      <div class="card">
        <h1>Últimos comentarios</h1>
        <p>Tu opinión cuenta. Si quieres hacer aportaciones y sugerencias sobre los servicios y actividades del ayuntamiento, si en tu calle hay baldosas sueltas o farolas que no funcionan, si no encuentras en la web municipal la información que necesitas ... puedes utilizar el buzón ciudadano para hacer tu aportación, plantear tu queja o duda al Ayuntamiento.</p>
        <p>A través del buzón puedes consultar lo que el Ayuntamiento responda, leer los comentarios de otras personas y seguir los asuntos que hayas planteado.</p>
      </div>

      <asunto-list tema="1"></asunto-list>
    `;
  }
}

window.customElements.define('my-view1', MyView1);
