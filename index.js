// Aşağıdaki görevleri tamamlayın

const { transformFile } = require("@babel/core");

/*
  GÖREV 1
    - Bir Kisi Constructor'ı yazın 'isim ve 'yas' argümanları alsın.
    - Tüm Kisi örnekleri boş bir `mide` dizisi ile yüklensin.
    - Kisi örneklerine `.ye("birYemek")` yeteneği ekleyin:
        + .ye() parametre olarak bir string almalıdır, bu parametre yenilebilir bir yiyeceği temsil eder
        + Bir yiyecek yenildiğinde, `mide` dizisine eklenir.
        + Mide dizisinde 10 eleman varsa `ye` metodu hiçbir etki yapmaz.
    - Kisi örneklerine `.bosalt()` yeteneği ekleyin:
        + Eğer bosalt tetiklenirse, 'mide' dizisi boşaltılır.
    - Kisi örneklerine `.toString()` metodu ekleyin:
        + Bu `isim` ve `yas` i içeren bir string döndürmelidir Örnek: "Mary, 50"
*/


function Kisi(isim,yas) {
  this.isim = isim;
  this.yas = yas;
  this.mide = [];
  this.ye = function(yemek){
    
    if (this.mide.length<11){
      this.mide.push(yemek)
    }
  }
  this.bosalt = function(){
    this.mide =[];
  }
this.toString = function(){
  return `${this.isim}, ${this.yas}`
}
}
let name = new Kisi("İhsan", 40); 
name.ye("patates")
name.ye("hamburger")
name.toString()

   console.log(name.toString())

/*
  GÖREV 2
    - Bir Araba constructoru yazın, parametre olarak `model` ve `milesPerGallon` alsın.
    - Tüm Araba örnekleri:
        + `tank` ı 0 olarak yüklensin
        + `odometer` ı 0 olarak yüklensin
    - Arabalara `.fill(gallons)` metoduyla depoyu fulleme kabiliyeti ekleyin
      + 'gallons', galon sayısını parametre olarak alacak
      + girilen galonu `tank` a ekleyecek.
    - ESNEK: Arabalara `.drive(distance)` yeteneği ekleyin. Distance ile ilgili:
        + `odometer` ın yükselmesine neden olmalı.
        + `MilesPerGallon` hesaba katılarak `tankın` düşmesine neden olmalıdır.
    - ESNEK: Bir arabanın benzini biterse drive metodu etkisiz şunu döndürmelidir:
        +  "x milde benzinim bitti!" x değişkeni `odometer` daki sayı olmalıdır.
*/

function Araba(model,tüketim) {
  this.model = model;
  this.milesPerGallon = tüketim;
  this.tank = 0;
  this.odometer = 0;
  this.fill = function (galon){
    this.tank+=galon;
  }
  this.drive = function (distance){
    this.odometer += distance;
    this.tank -= Math.round(distance/this.milesPerGallon);
    if(this.tank <=0) {
      const extraMile = this.tank * this.milesPerGallon;
      this.odometer += Math.round(extraMile);
      this.tank=0;
      console.log( `${this.odometer} milde benzinim bitti!`)
    }
  }

}
 let VW = new Araba("passat",15);
 VW.fill(65);
 VW.drive(125);
 VW.drive(950);

 console.log(VW.tank);
 console.log(VW.odometer);



/* 
  GÖREV 3
  Kendi cümlelerinizle "this" kelimesinin 4 prensibini açıklayın:
  1. Global Binding:Bir işlev bağımsız bir işlev olarak çağrıldığında bu tarayıcının penceresi ve küresel nesneyi ifade eder.
  2. Implicit Binding: Bir işlev, yöntem olarak çağrıldığında bu yöntemin çağrıldığı nesneyi ifade eder.
  3. Explicit Binding:Bunun değerini bir işlevin içinde call(), Apply() veya bind() yöntemlerini kullanarak açıkça ayarlayabiliriz.
  4. New Binding: Bir fonksiyon new anahtar kelimesi ile çağrıldığında yeni bir nesne oluşturur ve bu yeni oluşturulan nesneyi ifade eder.
*/


/* !!!! Burdan aşağısını değiştirmeyin !!!! */
function as(){
  console.log('Kodlar sorunsuz çalışıyor!');
  return 'sa';
}
as();
module.exports = {
  as,
  Kisi, 
  Araba,
  /* Bebek */
}
