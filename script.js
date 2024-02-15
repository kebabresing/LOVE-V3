const alternatives = [
  {text:"ayanggg", images:"images/cat-01.gif"},
  {text:"maaciii yaaa udah cama aku teyus", images:"images/cat-02.gif"},
  {text:"meskii habis ini kamu kuliah", images:"images/cat-03.gif"},
  {text:"pastii lingkungan mu lebih luas", images:"images/cat-04.gif"},
  {text:"cemogaa aku cama kamuu bica bareng teyuss", images:"images/cat-03.gif"},
  {text:"aamiin", images:"images/cat-04.gif"},
  {text:"hehehe", images:"images/cat-03.gif"},
  {text:"ohh iyaa satuu lagii", images:"images/cat-04.gif"},
  {text:"cemoga kamu cuka cama kotak pink ituuu", images:"images/cat-05.gif"},
  {text:"sekarang bolee liat pesannyaa, wopyuuuuuuuuuuu❤️", images:"images/cat-05.gif"},
]
const ohyes = {text:"haii cantikk happy valentine day, aku cuma mauu bilang maacii yaa udah cama akuu teyus meskipun akuu banyak kurangnya tapii cemogaa kamu bica terimaa, abis ini kan kamu mauu kuliah cemangat yaa cemoga snbpnya langsung tembuss, biarr ngga capee mikirin ituu teyuss. Oh iyaa misall dah keterimaa di UM nanti akuu anterinn biar kamu gk kesasar, aku dah tauu denah di UM tuhh wajar soalnya aku alumni UM😌. Oh iyaa kalauu semisal takdir berkata lain 'inii misall aja loh yaa' yaudah ikhlas-in ajaa jadii no' berharap lebihh palinggg penting berdoa ajaa cemoga dipermudah 'aamiin yaallah', tenangg nanti belum rezekinya di snbp bisaa masuk FK UIN kalo ngga FK UMM gppaaa kata ibukmuu penting sampe selesaiii, yuii gkkkk. ku doain apapun terbaikk buat kamuuuu, bingungg mau bilang apaa lagii udah malemm iniiii soalnya otakku dah ngantukk, dahh yaa senggkuuuuu yang cantikk iniii wopyuuuuuuuuuuuuuuuuuuuuu❤️", images:"images/cat-yes.gif"}
const cat = document.querySelector('.cat')
const text = document.querySelector('.text')
const buttons = document.querySelectorAll('.button')
const errorButton = document.querySelector('.button__error')

let count = 0;

function updateDisplay(item){
  cat.src = item.images
  text.innerHTML = item.text
}

errorButton.addEventListener('click', ()=>{
  count = 0;
  updateDisplay(alternatives[count])
  buttons.forEach(btn => btn.style.display = 'inline-block')
  errorButton.style.display = 'none'
})

buttons.forEach(button => {
  button.addEventListener('click', ()=>{
      if(button.textContent == "pesan"){
          updateDisplay(ohyes)
          buttons.forEach(btn => btn.style.display = 'none')
      }
      if(button.textContent == 'klik aku duluu'){
          count++
          if(count < alternatives.length){
              updateDisplay(alternatives[count])
          }else{
              buttons.forEach(btn => btn.style.display = 'none')
              errorButton.style.display = 'inline-block'
          }
      }
  })
})
