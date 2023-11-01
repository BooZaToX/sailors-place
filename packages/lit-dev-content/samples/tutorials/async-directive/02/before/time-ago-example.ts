import {html, css, LitElement} from 'lit';
import {customElement} from 'lit/decorators.js';

@customElement('time-ago-example')
export class TimeAgoExample extends LitElement {

  render() {
    return html`
      <p>This page was rendered.</p>
    `;
  }

}
