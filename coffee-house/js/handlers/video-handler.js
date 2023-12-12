function videoHandler(){
    if(document.querySelector('.enjoy-section')) {
        const video = document.querySelector('#background-video');

        video.addEventListener('contextmenu', (event)=> {
            event.preventDefault();
        })
    }

}
 export default videoHandler;