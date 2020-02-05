import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class EditableLabelComponent extends Component {
  @action
  onInput(evt) {
    this.args.onInput(evt.target.innerText);
  }
}
