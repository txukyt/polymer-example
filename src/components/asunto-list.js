import {PolymerElement, html} from '@polymer/polymer/polymer-element.js';

/**
 * `LowerCaseDashedName` Description
 *
 * @customElement
 * @polymer
 * @demo
 * 
 */
class AsuntoList extends PolymerElement {

    static get is(){
        return 'asunto-list'
    }

    static get properties(){
        return {
            tema : Number,
        };
    }

    static get template() {
        return html`
            <p>Asuntos del tema [[tema]]</p>
        `;
    }

    ready(){
        super.ready();
        
    }
}

customElements.define(AsuntoList.is, AsuntoList);