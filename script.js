const next = document.getElementById("next-btn");
const start = document.getElementById("start-btn");
const kapsayıcı = document.querySelector(".container");

const cevaplar = document.getElementById("answer-buttons");
const questionContainer = document.getElementById("question-container");
 const soru = document.getElementById("soru");


function sorularıGöster() {

    var getElement = document.querySelector(".container");


    if (getElement.style.display == "none") {


        getElement.style.display = "block";
    }

    baslabutonunuKaldır();

}



function baslabutonunuKaldır() {
    var basla = document.getElementById("start-btn");

    if (basla.style.display == "block") {

        basla.style.display = "none";

    }
}




// function Soru(metin,cevaplar,dogrucevap){
//     this.text=TextEvent;
//     this.cevap=cevap;
//     this.dogrucevap=dogrucevap;
// }


// Sorular.prototype.cavapKontrol=function(cevap)
// {
//     return this.dogrucevap===dogrucevap;
// }
// var s1=new Soru(" Sevdim seni bir kere başkasını sevemem deli diyorlar bana desinler değişemem....",["Emre",  "Halide"],"Emre");
// var s2=new Soru(" Senin Kollarında Başlayan Sabahlara Biten Gecelere Doyamadım Hala?", ["Deniz", "Namık", "Şinasi", "Haluk"],"Namık");
// var s3=new Soru("Seni Seni Bir Tek Seni En Çok Seni Seni Yarim...?"["Han", "Hürrem", "Mahmut", "Ziya"],"Ziya");
// var s4=new Soru(" Kalbim senden senden vazgeçmeyecekkkk korkma içimdee aşkın hiç bitmeyecekkk ?",["Emre",  "Halide"],"Emre");

// console.log(s1.dogrucevap("emine"));


// var sorularDizi=["s1","s2","s3","s4"];





var sorularDizi = [
    {
        soru: "Sevdim seni bir kere başkasını sevemem deli diyorlar bana desinler değişemem....",
        cevaplar: ["Emre",  "Halide"],
        cevap: "Halide"
    },
    {
        soru: "Senin Kollarında Başlayan Sabahlara Biten Gecelere Doyamadım Hala?",
        cevaplar: ["Deniz", "Namık", "Şinasi", "Haluk"],
        cevap: "Namık"
    },
    {
        soru: "Sevgini çiçekler gibi büyüt dedilerr sen unut kalbini sen avut dedilerr akakkakaka?",
        cevaplar: ["Han", "Ziya"],
        cevap: "Ziya"
    }
,
    {
        soru: "Seni Seni Bir Tek Seni En Çok Seni Seni Yarim...?",
        cevaplar: ["Han", "Hürrem", "Mahmut", "Ziya"],
        cevap: "Ziya"
    }
,
    {
        soru: " Kalbim senden senden vazgeçmeyecekkkk korkma içimdee aşkın hiç bitmeyecekkk ?",
        cevaplar: ["Han", "Hürrem", "Mahmut", "Ziya"],
        cevap: "Ziya"
    }

]



function sorularDizi(soru,cevaplar,cevap){

    this.soru=soru;
    this.cevaplar=cevaplar;
    this.cevap=cevap;
}

soru.prototype.dogruCevap=function(cevap){
    return this.cevap===cevap;
}

function Quiz(soruDizi){
    this.soruDizi=soruDizi;
    this.score=0;
    this.soruDiziIndex=0;
}

Quiz.prototype.sorAl=function(){
    return this.soruDizi[this.soruDiziIndex];
}

Quiz.prototype.Bitimi=function(){
    return this.soruDizi.length===this.soruDiziIndex;
}

Quiz.prototype.yenisoruata=function(answer){
    var soruDizi=this.sorAl();

    if(soruDizi.dogruCevap(cevap)){
        this.score++;
    }
    this.soruDiziIndex++;
}


console.log(sorularDizi[i]);





 let soruCount = 0
 let soruSimdi = soruDizi[soruCount]

soru.innerText = soruSimdi.soru

soruSimdi.cevaplar.forEach(function (cevap) {
    let btn = document.createElement("button");
    btn.className = "btn";
    let txt = document.createTextNode(cevap);
    btn.appendChild(txt)
    cevaplar.prepend(btn)
})





for (var i = 0; i < soruDizi.length; i++) {

   
    console.log(soruDizi[i]);

    
}







