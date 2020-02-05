import Component from "@glimmer/component";
import { action } from "@ember/object";

export default class EditableLabelComponent extends Component {
  @action
  onBlur(evt) {
    this.args.onBlur(evt.target.innerText);
  }
}
