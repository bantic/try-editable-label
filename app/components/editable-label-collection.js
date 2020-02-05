import Component from "@glimmer/component";
import { tracked } from "@glimmer/tracking";

export default class EditableLabelCollectionComponent extends Component {
  @tracked
  mortgage = "mortgage";

  @tracked
  item = "house";

  @tracked
  rate = "10";

  @tracked
  term = "30";

  @tracked
  loan = 300000;

  get calculatedInterest() {
    return (
      "$" +
      (parseInt(this.rate) / 100) * parseInt(this.term) * parseInt(this.loan)
    );
  }
}
