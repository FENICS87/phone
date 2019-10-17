// просмотр товара
import {BaseComponent} from "../shared/component/base/base.component.js";


export class PhoneDetailsComponent extends BaseComponent {
/////////////
constructor({element}){
  super({element});
  this
    .on('click', '.back', (e)=>{
      this.emit("back")    
    })
    .on('click', '.add', (e)=>{
    this.emit("add", this._phone.id);
  });
  this.on('click', '.thumb', (e)=>{
    this._currentImg.src = e.delegateTarget.src;
  });
}
    show(phone) {
        this._phone = phone;
        this._render();
        this._currentImg = this._element.querySelector('.phone');
        [this._currentImg.src] = phone.images;
       super.show(); 
    }

    _render() {
        this._element.innerHTML = `
          <div>

    <img class="phone" src="img/phones/motorola-xoom-with-wi-fi.0.jpg">

    <button class="back">Back</button>
    <button class="add">Add to basket</button>


    <h1>${this._phone.name}</h1>

    <p>${this._phone.description}</p>

    <ul class="phone-thumbs">
    ${this._phone.images.map((src)=>
      `<li><img class="thumb" src=${src}></li>`
      ).join('')}
    </ul>

   
  </div>
        `
    }
}
