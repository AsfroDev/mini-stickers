const btnAdd = document.querySelector('.btn-add')
const sticker = document.querySelector('.sticker')
const grid = document.querySelector('.grid')
const imgInitial = document.getElementById('img')
//modal geral references
const modalWindow = document.querySelector('.modal-window')
const closeModalBtn = document.getElementById('close-modal-btn')
const saveStickerModalBtn = document.querySelector('.btn-save-sticker')
const overlay = document.querySelector('.overlay')
//modal text area reference
const textArea = document.getElementById('inputTextModal')
const textLenght = document.querySelector('.text-area-lenght')
//modal color selector references
const btnColorNight = document.querySelector('.select-color-night')
const btnColorPaper = document.querySelector('.select-color-paper')
const btnColorLight = document.querySelector('.select-color-light')
//modal font selector references
const btnFontItalic = document.querySelector('.italic')
const btnFontBolder = document.querySelector('.bolder')
const btnFontNormal = document.querySelector('.normal')

var boldswitch = 0

//head ADD STICKER btn event
btnAdd.addEventListener('click', () => {
    imgInitial.style.display = 'none'
    openModalWindow()
})  

//modal
closeModalBtn.addEventListener('click', () => {
    setTimeout(() => {

        modalWindow.style.display = 'none'
        modalWindow.style.backgroundColor = 'white'
        textArea.style.backgroundColor = 'white'
        textArea.value = ''
        textArea.style.fontStyle = 'normal'
        textArea.style.fontWeight = 'normal'
        overlay.style.display = 'none'
    }, 130);
})

//modal lenght count
textArea.addEventListener('input', function (e) {
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLength = target.getAttribute('maxlength');

    // Count the current number of characters
    const currentLength = target.value.length;

    textLenght.innerHTML = `${currentLength}/${maxLength}`;
});

//modal color selector actions
btnColorNight.addEventListener('click', () => {

    modalWindow.style.backgroundColor = '#A3BB98'
    textArea.style.backgroundColor = '#A3BB98'
})
btnColorPaper.addEventListener('click', () => {

    modalWindow.style.backgroundColor = '#FBC252'
    textArea.style.backgroundColor = '#FBC252'
})
btnColorLight.addEventListener('click', () => {

    modalWindow.style.backgroundColor = '#F0ECCF'
    textArea.style.backgroundColor = '#F0ECCF'
})

//modal font selector actions
btnFontItalic.addEventListener('click', () => {

    textArea.style.fontStyle = 'italic'
})

btnFontBolder.addEventListener('click', () => {   
    switch (boldswitch) {
        case 0:
        textArea.style.fontWeight = 'bolder'
        boldswitch = 1
            break;
        case 1:
            textArea.style.fontWeight = 'normal' 
            boldswitch = 0
            break;
    
        default:
            break;
    }
})

btnFontNormal.addEventListener('click', () => {

    textArea.style.fontStyle = 'normal'
})
//modal btn save sticker action
saveStickerModalBtn.addEventListener('click', () => {
    createSticker()
})  

 


//funcs
function openModalWindow() {

    overlay.style.display = 'block'
    modalWindow.style.display = 'block'
    modalWindow.style.backgroundColor = 'white'
    textLenght.innerHTML = '/50'
}

function createSticker() {

    const lengthStickers = document.querySelectorAll('.sticker')
    const newSticker = document.createElement('div')
    //default sticker atributes
    newSticker.style.backgroundColor = 'white'
    newSticker.style.fontStyle =  'normal'
    newSticker.style.fontWeight = 'normal'
    
    newSticker.innerHTML = textArea.value
    newSticker.style.backgroundColor = textArea.style.backgroundColor
    newSticker.style.fontStyle =  textArea.style.fontStyle
    newSticker.style.fontWeight = textArea.style.fontWeight
    newSticker.style.fontFamily = textArea.style.fontFamily
    newSticker.style.wordBreak = 'normal'
    
    newSticker.setAttribute('id',lengthStickers.length+1)
    newSticker.classList.add('sticker')
    

    grid.appendChild(newSticker)
    
    setTimeout(() => {

        modalWindow.style.display = 'none'
        modalWindow.style.backgroundColor = 'white'
        textArea.style.backgroundColor = 'white'
        textArea.value = ''
        textArea.style.fontStyle = 'normal'
        textArea.style.fontWeight = 'normal'
        overlay.style.display = 'none'
        textLenght.innerHTML = '/50'
    }, 50);

    //sticker click func
    newSticker.addEventListener('click', () => {
        stickerSelected = document.getElementById(event.target.id)
        openDestroySticker()
        
    }) 
}

//popUpReference and func destroy
const popUpDestroy = document.querySelector('.popup-delete')
const btnCancelPopup = document.getElementById('btn-cancel-popup')
const btnDeletePopup  = document.getElementById('btn-delete-popup')

function openDestroySticker(){
    //open pop up destroy
    overlay.style.display = 'block'
    popUpDestroy.style.display = 'block'
    //if cancel, close window
    btnCancelPopup.addEventListener('click', () => {      

        overlay.style.display = 'none'
        popUpDestroy.style.display = 'none'
    }) 
    //if clicked accept / destroy and close window    
    btnDeletePopup.addEventListener('click', () => {

        stickerSelected.remove()

        overlay.style.display = 'none'
        popUpDestroy.style.display = 'none'
    }) 
}
