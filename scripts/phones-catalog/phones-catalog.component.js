//создание  HTML верстки |||||||||||||||||
import {BaseComponent} from "../shared/component/base/base.component.js";

export class PhonesCatalogComponent extends BaseComponent {
    constructor({element, phones}){
        super({element});
        this._phones = phones;
        this._render();

        this.on("click", ".thumb", (e) => {
          this.emit("phone-selected", e.delegateTarget.dataset.phoneId);
        })
        .on("click", ".add", (e) => {
          this.emit("add-to-cart", e.delegateTarget.dataset.phoneId);
        });
    }

        
    _render() {
        this._element.innerHTML = `
              <ul class="phones">
              ${this._phones.map((phone) => `
                      <li class="thumbnail phone" data-phone-id=${phone.id}>
          <a href="#!/phones/${phone.id}" class="thumb">
            <img alt=${phone.name} src=${phone.imageUrl}>
          </a>

          <div class="phones__btn-buy-wrapper add" data-phone-id="${phone.id}">
            <a class="btn btn-success">
              Add
            </a>
          </div>

          <a href="#!/phones/${phone.id}">${phone.name}</a>
          <p>${phone.snippet}</p>
        </li>`).join('')}
      </ul>
        `
    }
}
